import React from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';

const BudgetItem = ({gadget, handleEdit, handleDelete}) => {
    const {id, definition, price} = gadget;
    return (
        <li className="item">
            <div className="info">
                <span className="expense">{definition}</span>
                <span className="amount">${price}</span>
            </div>
            <div>
                <button className="edit-btn" aria-label="edit button"
                        onClick={() => handleEdit(id)}>
                    <MdEdit />
                </button>
                <button className="clear-btn" aria-label="delete button"
                        onClick={() => handleDelete(id)}>
                    <MdDelete />
                </button>
            </div>
        </li>
    )
};


export default BudgetItem;