const app = require('express')()
const path = require('path')
const shortid = require('shortid')
const Razorpay = require('razorpay')
const cors = require('cors')


app.use(cors())
const razorpay = new Razorpay({
    key_id: 'rzp_test_A1kaSDnyfaT5yv',
    key_secret: 'RzFbrR19QDulmeewoQSm3Rek',
});


app.get('./assets/logo.png', (req, res) => {
    res.sendFile(path.join(__dirname, 'logo.png'))
})

app.post('/razorpay', async (req, res) => {

    const payment_capture = 1
    const amount = 5
    const currency = 'INR'

    const options = {
        amount: (amount * 100).toString(),
        currency,
        receipt: shortid.generate(),
        payment_capture
    }

    try {
        const response = await razorpay.orders.create(options)
        console.log(response)
        res.json({
            id:response.id,
            currency:response.currency,
            amount:response.amount
        })
    } catch (error) {
        console.log(error)
    }
})

app.listen(1337, () => {
    console.log('Listening on 1337')
})