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

	const clearInput = () => {
		const inputText: any = document.querySelector('input');
		inputText.value = '';
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setContent(e.target.value);
		// document.querySelector('input')?.value = '';
		// clearInput();
	};
	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			const id = uuidv4();
			onItemAdded({ id, content, completed: false });
			clearInput();
		}
	};
	return (
		<input
			data-testid="todo-input"
			className="todo-input"
			type="text"
			placeholder="Add todo task here"
			onChange={handleChange}
			onKeyDown={handleKeyDown}></input>
	);
};
