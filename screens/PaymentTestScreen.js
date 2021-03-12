import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class PaymentTestScreen extends React.Component {

    loadScript = (src) => {
        return new Promise(resolve => {
            const script = document.createElement('script')
            script.src = src
            document.body.appendChild(script)
            script.onload = () => {
                resolve(true)
            }
            script.onerror = () => {
                resolve(false)
            }
            document.body.appendChild(script)
        })
    }



    async displayRazorpay() {

        const res = await this.loadScript("https://checkout.razorpay.com/v1/checkout.js")

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?')
            return
        }

        //const [name] = useState('Sreekar')
        const data = await fetch('http://localhost:1337/razorpay', { method: 'POST' }).then(t=>
        t.json()
        )

        console.log(data)

        const options = {
            "key": "rzp_test_A1kaSDnyfaT5yv", // Enter the Key ID generated from the Dashboard
            "amount": data.amount.toString(), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": data.currency, //Here, amount and currency i commented because it is to be used again in index.js
            "name": "Grocery App",
            "description": "Thank you for shopping with us",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT28U-fHjCHiwLxRAQzGhnsJEX-Qd7LnNyK_g&usqp=CAU",
            "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": function (response) {
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature)
            },
            prefill: {
                name:"Sreekar"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }
    render() {
        return (
            <View style = {{justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity onPress={() => { this.displayRazorpay() }}>
                    <Text>Pay $5</Text>
                </TouchableOpacity>
            </View>
        )
    }
}