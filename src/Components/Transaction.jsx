import React, {useContext} from "react";
import { GlobalContext } from "../Context/GlobalState";

export const Transaction = ({transaction}) => {
  const {deleteTransaction} = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text}
        <span>{sign}&#x20b9;{Math.abs(transaction.amount)}</span>
        <button
          onClick={() => deleteTransaction(transaction.id)}
          className="delete-btn"
          >
            x
        </button>
    </li>
)
};
