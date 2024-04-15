import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
// import { useDispatch } from 'react-redux';

const Budget = () => {
    // const dispatch = useDispatch();
    const { budget, expenses, currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        
        if(event.target.value > 20000) {
            alert("The budget value cannot exceed £20,000");
            // setCost("");
            return;
        } else if(event.target.value - totalExpenses < 0){
            alert("You cannot reduce the budget value lower than the spending");
            return;
        }else{
            setNewBudget(event.target.value);
            dispatch({
                type: 'SET_BUDGET',
                payload: event.target.value,
            })
        }
    }
    // const handleBudgetChange = (event) => {
    //     setNewBudget(event.target.value);
    // }

    return (
    <div className='alert alert-secondary'>
        <span>Budget: {currency}</span>
        <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
    </div>
    );
};
export default Budget;