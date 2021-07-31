import React from 'react';
import './Checkout.css'
import CheckoutProduucts from './CheckoutProducts';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className= "checkout__left">
                <img className="chekout__ad" src="http://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                <div>
                    <h3>Hello,{user?.email}</h3>
                    <h2 className="checkout__title"> Your Cart</h2>

                    {basket.map(item => (
                        <CheckoutProduucts
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>

            <div className="checkout__right">
                <h2>The subtotal will go here</h2> 
                <Subtotal/>
            </div>
        </div>

    )
}

export default Checkout
