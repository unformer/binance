import axios from 'axios'

const subcribers = {
    'messages-received': []
}

let ws = null

const closeHandler = () => {
    console.log('CLOSE')
}
const messageHandler = (e) => {
    const newMessage = JSON.parse(e.data)
    subcribers['messages-received'].forEach(s => s(newMessage))
}
const openHandler = () => {
    console.log('OPEN')
}
const errorHandler = () => {
    console.log('REFRESH')
}
const cleanUp = () => {
    ws?.removeEventListener('close', closeHandler)
    ws?.removeEventListener('message', messageHandler)
    ws?.removeEventListener('open', openHandler)
    ws?.removeEventListener('error', errorHandler)
}

function createChannel(symbol) {
    cleanUp()
    ws?.close()
    ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@depth`)
    ws.addEventListener('close', closeHandler)
    ws.addEventListener('message', messageHandler)
    ws.addEventListener('open', openHandler)
    ws.addEventListener('error', errorHandler)
}

export const binanceAPI = {
    async getGlass(symbol) {
        const res = await axios.get(`https://api.binance.com/api/v3/depth?symbol=${symbol}&limit=500`)
        return res.data
    },
    start(symbol) {
        createChannel(symbol)
    },
    stop() {
        cleanUp()
        ws.close()
        subcribers['messages-received'] = []
    },
    subscribe(eventName, callback) {
        subcribers[eventName].push(callback)
        return () => {
            subcribers[eventName] = subcribers[eventName].filter(s => s !== callback)
        }
    },
    unsubscribe(eventName, callback) {
        subcribers[eventName] = subcribers[eventName].filter(s => s !== callback)
    }
}