import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';


const ChangeCurrency = () => {
    const {currency, dispatch} = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        dispatch({type: 'CHG_CURRENCY', payload: event.target.value});
    };

    const options = [
        {value: '$', label: '$ Dollar'},
        {value: '£', label: '£ Pound'},
        {value: '€', label: '€ Euro'},
        {value: '₹', label: '₹ Rupee'},
    ];

    return (
        <div className='alert alert-success' style={{height: 'auto', width: 'auto'}}>
            <span>Currency </span>
            <select 
            value={currency}
            onChange={handleCurrencyChange}
            style={{color: 'black', background: '#ACEBC2', height: '30px', width: '200px'}}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
};

export default ChangeCurrency;
