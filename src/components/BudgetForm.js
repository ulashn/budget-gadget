import React from 'react';
import { MdSend } from 'react-icons/md';

const BudgetForm = ({definition, price, handleDefinition, handlePrice, handleSubmit, edit}) => {
    return (
        <form onSubmit={handleSubmit} >
            <div className="form-center">
                <div className="form-group">
                    <label htmlFor="definition">definition</label>
                    <input type="text" 
                            className="form-control" 
                            id="definition" 
                            name="definition" 
                            placeholder="e.g. Rent"
                            value={definition}
                            onChange={handleDefinition} />
                </div>
                <div className="form-group">
                    <label htmlFor="price">price</label>
                    <input type="number" 
                            className="form-control" 
                            id="price" 
                            name="price" 
                            placeholder="e.g. 500"
                            value={price}
                            onChange={handlePrice} />
                </div>
            </div>
            <button type="submit" className="btn">
                {edit ? 'Edit' : 'Submit'}
                <MdSend className="btn-icon" />
            </button>
        </form>
    )
};

export default BudgetForm;