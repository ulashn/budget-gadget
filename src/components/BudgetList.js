import React from 'react';
import BudgetItem from "./BudgetItem";
import { MdDelete } from 'react-icons/md';

const BudgetList = ({gadgets, handleEdit, handleDelete, clearItems}) => {
    return (
        <>
            <ul className="list">
                {gadgets.map((gad) => {
                    return <BudgetItem key={gad.id} 
                                        gadget={gad}
                                        handleDelete={handleDelete}
                                        handleEdit={handleEdit} />
                })}
            </ul>
            {gadgets.length > 0 && <button className="btn" onClick={clearItems}> Clear Gadgets 
            <MdDelete className="btn-icon" /></button>}
        </>
    )
};

export default BudgetList;
