import React, { useState } from 'react';
import './App.css';
import BudgetList from './components/BudgetList';
import BudgetForm from './components/BudgetForm';
import Alert from './components/Alert';
import uuid from 'uuid/v4';

const initialGadgets = [
	{ id: uuid(), definition: "Smth", price: 500},
	{ id: uuid(), definition: "Smth2", price: 5000},
]

function App() {

	

	const [gadgets, setGadgets] = useState(initialGadgets);

	const [definition, setDefinition] = useState('');
	const [price, setPrice] = useState('');
	const [alert, setAlert] = useState({show:false});
	const [edit, setEdit] = useState(false);
	const [id, setId] = useState(0);

	const handleDefinition = e => {
		console.log(`Definition: ${e.target.value}`);
		setDefinition(e.target.value);
	};

	const handlePrice = e => {
		console.log(`Price: ${e.target.value}`);
		setPrice(e.target.value);
	};

	const handleAlert = ({type, text}) => {
		setAlert({show:true, type, text});
		setTimeout(() => {
			setAlert({show:false})
		}, 3000);
	}

	const handleSubmit = e => {
		e.preventDefault();
		if(definition !== '' && price > 0){
			if(edit){
				let curr = gadgets.map(item => {
					return item.id === id ? {...item, definition,price} : item;
				});
				setGadgets(curr);
				setEdit(false);
			}else{
				const singleGadget = { id: uuid(), definition, price};
				setGadgets([...gadgets, singleGadget]);
				handleAlert({type: "success", text:"Item Added!"});
			}
			setPrice('');
			setDefinition('');

		}else{
			if(definition === ''){
				handleAlert({type: 'danger', text: 'Definition can not be empty!'});
			}else if(price < 0){
				handleAlert({type: 'danger', text: 'Price must be bigger than 0'});
			}else{
				handleAlert({type: 'danger', text: 'Please fill the fields!'});
			}
		}
	};

	const clearItems = () => {
		// Clear all the items.
		let answer = window.confirm('Are you sure?');
		if(answer){
			setGadgets([]);
			handleAlert({type: 'success', text: 'All items deleted!'});
		}
	};

	const handleDelete = (id) => {
		//console.log(`Item deleted: ${id}`);
		let ans = window.confirm('Are you sure?');
		if(ans){
			let elems = gadgets.filter(item => item.id !== id);
			setGadgets(elems);
			handleAlert({type: 'success', text: 'Item deleted!'});
		}
	};

	const handleEdit = (id) => {
		let item = gadgets.find((a) => a.id === id);
		console.log(item);
		let {definition, price} = item;
		setDefinition(definition);
		setPrice(price);
		setEdit(true);
		setId(id);
	};

	return (
		<>
			{alert.show && <Alert type={alert.type} text={alert.text} />}
			<h1>Budget Gadget!</h1>
			<main className="App">
				<BudgetForm definition={definition} price={price}
							handleDefinition={handleDefinition}
							handlePrice={handlePrice}
							handleSubmit={handleSubmit}
							edit={edit} />
				<BudgetList gadgets={gadgets}
							handleDelete={handleDelete}
							handleEdit={handleEdit}
							clearItems={clearItems} />
			</main>
			<h1>
				Total amont: <span className="total"> $ {gadgets.reduce((total, now) => {
					return (total += parseInt(now.price));
				}, 0)} </span>
			</h1>
			
		</>
	);
}

export default App;
