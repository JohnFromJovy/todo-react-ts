import { useState } from 'react';
import { TodoType } from './type';
import { TodoList } from './TodoList';
import { TodoInput } from './TodoInput';
import './Todo.css';

const Todo = () => {
	const [todos, setTodos] = useState<TodoType[]>([]);

	const onItemAdded = (todo: TodoType) => {
		setTodos([todo, ...todos]);
	};

	const onToggleItem = (todo: TodoType) => {
		setTodos(
			todos.map((item) => {
				if (item.id === todo.id) {
					return { ...item, completed: !item.completed };
				}
				return item;
			})
		);
	};

	const onDeleteItem = (todo: TodoType) => {
		setTodos(todos.filter((item) => item.id !== todo.id));
	};

	return (
		<div className="todo-container">
			<h2>todos</h2>
			<TodoInput onItemAdded={onItemAdded} />
			<TodoList
				todos={todos}
				onToggleItem={onToggleItem}
				onDeleteItem={onDeleteItem}
			/>
		</div>
	);
};

export default Todo;
