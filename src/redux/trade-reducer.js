import { binanceAPI } from '../api/binance-api'

const SET_GLASS = 'trade/SET-GLASS'
const MESSAGE_RECEVIED = 'trade/MESSAGE-RECEVIED'
const CLEAR_GLASS = 'trade/CLEAR-GLASS'

let initialState = {
    symbol: 'BTCUSDT',
    glass: { bind: [], asks: [] },
    messages: []
}

const tradeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GLASS:
            return {
                ...state,
                ...action.payload,
                messages: []
            }
        case MESSAGE_RECEVIED:            
            const update = () => {
                // отсеили нулевые
                // eslint-disable-next-line
                action.message.b = action.message.b.filter(b => b[1] != 0).reverse()
                // eslint-disable-next-line
                action.message.a = action.message.a.filter(a => a[1] != 0).reverse()

                let bids = action.message.b
                let asks = action.message.a

                // пеервернули стакан
                state.glass.bids = state.glass.bids.reverse()
                state.glass.asks = state.glass.asks.reverse()

                // удаляем из стакана 
                state.glass.bids.splice(state.glass.bids.length - bids.length, bids.length)
                state.glass.asks.splice(state.glass.asks.length - asks.length, asks.length)

                // обновляем стакан
                state.glass.bids = [...bids, ...state.glass.bids]
                state.glass.asks = [...asks, ...state.glass.asks]
            }

            if (action.message.u > state.glass.lastUpdateId) {
                if ((state.messages.length > 0 && action.message.U === state.messages[state.messages.length - 1].u + 1)
                    || (state.messages.length === 0 && action.message.U <= state.glass.lastUpdateId + 1 && action.message.u >= state.glass.lastUpdateId + 1)) {                    
                    update()
                    return {
                        ...state,
                        messages: [...state.messages, action.message]
                    }
                }
            }
            return state
        case CLEAR_GLASS:
            return {
                state: initialState
            }
        default:
            return state
    }
}

export const actions = {
    setGlass: (glass, symbol) => ({ type: SET_GLASS, payload: { glass, symbol } }),
    messagesReceived: (message) => ({ type: MESSAGE_RECEVIED, message }),
    clearGlass: () => ({ type: CLEAR_GLASS })
}

export const getGlass = (symbol) => async (dispatch) => {
    const data = await binanceAPI.getGlass(symbol)
    dispatch(actions.setGlass(data, symbol))
}

export const clearGlass = () => async (dispatch) => {
    dispatch(actions.clearGlass())
}

let _newMessageHandler = null
const newMessageHandlerCreator = (dispatch) => {
    if (_newMessageHandler === null) {
        _newMessageHandler = (message) => {
            dispatch(actions.messagesReceived(message))
        }
    }
    return _newMessageHandler
}

export const startMessagesListening = (symbol) => async (dispatch) => {
    binanceAPI.start(symbol)
    binanceAPI.subscribe('messages-received', newMessageHandlerCreator(dispatch))
}
export const stopMessagesListening = () => async (dispatch) => {
    binanceAPI.unsubscribe('messages-received', newMessageHandlerCreator(dispatch))
    binanceAPI.stop()
}

export default tradeReducer