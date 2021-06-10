import React from 'react'
import { connect } from 'react-redux'
import { getGlass, clearGlass, startMessagesListening, stopMessagesListening } from '../../redux/trade-reducer'
import Glass from './Glass'
import uuid from 'uuid'

function GlassContainer(props) {
    
    const asks = props.glass.asks
    const bids = props.glass.bids
    let full = []

    for (let i = 0; i < asks.length; i++) {
        full[i] = <tr key={uuid(8)}>
            <td>{bids[i][0]}</td><td>{bids[i][1]}</td><td>{(bids[i][0] * bids[i][1]).toFixed(7)}</td>
            <td>{asks[i][0]}</td><td>{asks[i][1]}</td><td>{(asks[i][0] * asks[i][1]).toFixed(7)}</td>            
        </tr>
    }

    full = full.reverse()

    return (
        <Glass symbol={props.symbol} full={full} getGlass={props.getGlass} startConnection={props.startMessagesListening} />
    )
}

let mapStateToProps = (state) => {
    return ({
        symbol: state.trade.symbol,
        glass: state.trade.glass,
        messages: state.trade.messages
    })
}

export default connect(mapStateToProps, { getGlass, clearGlass, startMessagesListening, stopMessagesListening })(GlassContainer)