import React, { useState } from 'react'
import '../css/currency.css'
import { FaArrowCircleRight } from "react-icons/fa";
import Button from '@mui/material/Button';
import axios from 'axios';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_FJUjBu3UuP1YPwu9YTyQJyYVxLpToZ7GzhSxwreS";

function Currency() {
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TL');
    const [result, setResult] = useState(0);

    const exchance = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        const rate = response.data.data[toCurrency];
        setResult((amount * rate).toFixed(2));
    }

    return (
        <div className='currency-div'>
            <div className='title'>
                <h3 >DÖVİZ KURU UYGULAMASI</h3>
            </div>

            <div className='content'>
                <input type="number" className='amount' value={amount} onChange={(e) => setAmount(e.target.value)} />

                <select className='from-currency-option' value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="TRY">TL</option>
                </select>
                <FaArrowCircleRight style={{ fontSize: '25px', marginRight: '10px' }} />
                <select className='to-currency-option' value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                    <option value="TRY">TL</option>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                </select>

                <input type="number" className='result' value={result} />
            </div>

            <div className='button' onClick={exchance}>
                <Button style={{ color: 'white', borderColor: 'black', backgroundColor: 'black', cursor: 'pointer' }} variant="outlined">Primary</Button>
            </div>

        </div>
    )
}

export default Currency
