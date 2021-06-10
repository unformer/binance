import React from 'react'
import Diff from "./Diff"
import { getGlass, clearGlass, startMessagesListening } from '../../redux/trade-reducer'
import { connect } from 'react-redux'

function DiffContainer(props) {
    return (
        <Diff symbol={props.symbol} asks={props.glass.asks} getGlass={props.getGlass} startConnection={props.startMessagesListening} messages={props.messages}/>
    )
}

let mapStateToProps = (state) => {
    return ({
        symbol: state.trade.symbol,
        glass: state.trade.glass,
        messages: state.trade.messages
    })
}

export default connect(mapStateToProps, { getGlass, clearGlass, startMessagesListening})(DiffContainer)