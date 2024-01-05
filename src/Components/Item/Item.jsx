import React from 'react' //6.9k (gzipped: 2.7k)
import './Item.css'

const Item = (props) => {
    return (
        <div className='item'>
            <img src={props.image} alt="" />
            <p>{props.name}</p>
            <div className="item-prices">
            <div className="item-price-new">
                ${props.new_price}
            </div>
            <div className="item-price-old">
                ${props.old_price}
            </div>
            </div>
        </div>
    )
}

export default Item