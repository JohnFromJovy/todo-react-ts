import React from 'react';
import './App.css';
import './components/Todo/Todo';
import Todo from './components/Todo/Todo';

// const items = [
// 	{ id: '1', content: 'buy some milk', completed: false },
// 	{ id: '2', content: 'lean javascript & react', completed: true },
// 	{ id: '3', content: 'pack up toys', completed: false },
// ];

function App() {
	return (
		<div className="App">
			learn react
			<Todo />
		</div>
	);
}

export default App;
