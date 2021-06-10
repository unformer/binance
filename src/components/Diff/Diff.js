import React from 'react'
import s from './Diff.module.css'

function Diff(props) {

    props.asks.length === 0 && props.startConnection(props.symbol) && props.getGlass(props.symbol)

    let diff = props.messages.map(m => <li key={m.U}>U: {m.U} - u: {m.u}</li>)

    const handleChange = (e) => {
        props.startConnection(e.target.value)
        props.getGlass(e.target.value)        
    }

    return (
        <>
            <div className={s.menu}>
                <label><span>Currency: </span>
                    <select value={props.symbol} onChange={(e => handleChange(e))} >
                        <option value="BTCUSDT">BTCUSDT</option>
                        <option value="BNBBTC">BNBBTC</option>
                        <option value="ETHBTC">ETHBTC</option>
                    </select>
                </label>
            </div>
            <ul className={s.diffList}>
                {diff}
            </ul>
        </>
    )
}

export default Diff