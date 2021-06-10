import React from 'react'
import s from './Glass.module.css'

const Glass = (props) => {

    props.full.length === 0 && props.startConnection(props.symbol) && props.getGlass(props.symbol)

    return (
        <div className="glassWrap">
            {props.full.length > 0 &&
                <div className={s.glassWrap__table}>
                    <table className={s.bodyHead} cellSpacing="0" cellPadding="0" border="1">
                        <thead className={s.glassWrap__table_head}>
                            <tr>
                                <th colSpan="6">{props.symbol}</th>
                            </tr>
                            <tr>
                                <th colSpan="3">Bid</th>
                                <th colSpan="3">Ask</th>
                            </tr>
                            <tr>
                                <th>Amount</th>
                                <th>Price</th>
                                <th>Total</th>
                                <th>Amount</th>
                                <th>Price</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                    </table>
                    <div className={s.bodyTable}>
                        <table cellSpacing="0" cellPadding="0" border="1">
                            <tbody>
                                {props.full}
                            </tbody>
                        </table>
                    </div>
                </div>
            }
        </div>

    )
}

export default Glass