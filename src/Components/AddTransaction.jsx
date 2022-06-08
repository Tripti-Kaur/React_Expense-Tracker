import React, {useState, useContext, useRef} from "react";
import { GlobalContext } from "../Context/GlobalState";

const AddTransaction = () => {
  const {addTransaction} = useContext(GlobalContext);
  const {transactions} = useContext(GlobalContext);
  const id = transactions.length ? transactions[transactions.length-1].id + 1 : 1;

  const amountRef = useRef(null);
  const textRef = useRef(null);

  const [amount, setAmount] = useState(0);
  const [text, setText] = useState('');

  const onSubmit = e =>{
    e.preventDefault();
    const newTransaction = {
      id: id,
      text: text === '' ? '-' : text,
      amount: +amount
      // Instead of writing "amount:amount", we can even write just "amount". Both means same!
      // we added + sign to change it from string to a number
    }

    setText(e.target.value='')
    setAmount(e.target.value='')

    textRef.current.blur();
    amountRef.current.blur();
    
    addTransaction(newTransaction);

  } 

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input 
            type="text" 
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..." 
            ref={textRef}
          />
        </div>
        <div className="form_control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input 
            type="number" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..." 
            ref={amountRef}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
};

export default AddTransaction;
