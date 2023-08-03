import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

type TodoType = {
	id: string;
	content: string;
};

const Todo = () => {
	const [todos, setTodos] = useState<TodoType[]>([]);
	const [content, setContent] = useState<string>('');

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setContent(e.target.value);
	};
	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			const id = uuidv4();
			setTodos([{ id, content }, ...todos]);
		}
	};

	return (
		<div>
			<h2>todos</h2>
			<input
				type="text"
				data-testid="todo-input"
				onChange={handleChange}
				onKeyDown={handleKeyDown}></input>
			{todos.map((todo) => (
				<div key={todo.id}> {todo.content} </div>
			))}
		</div>
	);
};

export default Todo;
