import React, { useEffect, useState } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider';
import CheckoutProduucts from './CheckoutProducts';
import { Link, useHistory} from 'react-router-dom'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { getBasketTotal } from "./reducer";
import CurrencyFormat from 'react-currency-format';
import axios from 'axios';

function Payment() {

    const [{basket, user },dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();


    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 1000}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    console.log('THE SECRET IS >>>', clientSecret)
    console.log('👱', user)
    
    const handleSubmit =async(event)=> {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation

            

            setSucceeded(true);
            setError(null)
            setProcessing(false)

            // dispatch({
            //     type: 'EMPTY_BASKET'
            // })

            history.replace('/orders')
        })

    }

    const handleChange = event =>{
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }
    return (
        <div className='paymnet'>
            <div className="payment__container">
                <h1>
                    Checkout {<Link to='/checkout'>{basket?.length} items</Link>}
                </h1>
                {/* payment address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>temp</p>
                        <p>Kerala</p>
                    </div>
                </div>
                {/* review */}
                <div className="payment__section">
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            < CheckoutProduucts
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                {/* payment mode */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            
                            <div className='payment__priceContainer'>
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"₹"}
                                    />
                                    <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                    </button>
                                    {error && <div>{error}</div>}
                                </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
