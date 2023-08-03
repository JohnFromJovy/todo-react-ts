import { ChangeEvent } from 'react';
import { KeyboardEvent } from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodoType } from './type';

export const TodoInput = ({
	onItemAdded,
}: {
	onItemAdded: (todo: TodoType) => void;
}) => {
	const [content, setContent] = useState<string>('');
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setContent(e.target.value);
	};
	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			const id = uuidv4();
			onItemAdded({ id, content });
			// setTodos([{ id, content }, ...todos]);
		}
	};
	return (
		<input
			type="text"
			data-testid="todo-input"
			onChange={handleChange}
			onKeyDown={handleKeyDown}></input>
	);
};
