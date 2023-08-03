import { useState } from 'react';
import { TodoType } from './type';
import { TodoList } from './TodoList';
import { TodoInput } from './TodoInput';

const Todo = () => {
	const [todos, setTodos] = useState<TodoType[]>([]);

	const onItemAdded = (todo: TodoType) => {
		setTodos([todo, ...todos]);
	};

	return (
		<div>
			<h2>todos</h2>
			<TodoInput onItemAdded={onItemAdded} />
			<TodoList todos={todos} />
		</div>
	);
};

export default Todo;
