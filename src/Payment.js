import React, { useState } from 'react';
import "./Payment.css";

function Payment() {
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [cardExpiry, setCardExpiry] = useState('');
    const [cardCVC, setCardCVC] = useState('');
    const [processingPayment, setProcessingPayment] = useState(false);
    const [paymentComplete, setPaymentComplete] = useState(false);

    const handlePayment = async () => {
        // Simulate payment processing (replace with actual payment integration)
        setProcessingPayment(true);
        await simulatePaymentProcessing();
        setProcessingPayment(false);
        setPaymentComplete(true);
    };

    const simulatePaymentProcessing = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 2000); // Simulate a 2-second payment processing time
        });
    };

    return (
        <div className="payment-container">
            <h2>Payment Information</h2>
            {paymentComplete ? (
                <div className="payment-success">
                    <p>Payment Successful!</p>
                </div>
            ) : (
                <div className="payment-form">
                    <input
                        type="text"
                        placeholder="Card Number"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Cardholder Name"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Expiry Date (MM/YY)"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="CVC"
                        value={cardCVC}
                        onChange={(e) => setCardCVC(e.target.value)}
                    />
                    <button onClick={handlePayment} disabled={processingPayment}>
                        {processingPayment ? 'Processing...' : 'Submit Payment'}
                    </button>
                </div>
            )}
        </div>
    );
}

export default Payment;