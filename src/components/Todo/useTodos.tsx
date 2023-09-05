import { useMemo, useState } from 'react';
import { TodoType } from './type';

export const useTodos = (items: TodoType[] = []) => {
	const [todos, setTodos] = useState<TodoType[]>(items);
	const [category, setCategory] = useState<string>('total');

	const displayTodos = useMemo(() => {
		switch (category) {
			case 'total':
				return todos;
			case 'completed':
				return todos.filter((todo) => todo.completed);
			case 'active':
				return todos.filter((todo) => !todo.completed);
			default:
				return todos;
		}
	}, [category, todos]);

	const addTodo = (todo: TodoType) => {
		setTodos([todo, ...todos]);
	};

	const toggleTodo = (todo: TodoType) => {
		const updatedTodos = todos.map((item) => {
			if (item.id === todo.id) {
				return { ...item, completed: !item.completed };
			}
			return item;
		});
		setTodos(updatedTodos);
	};

	const deleteTodo = (todo: TodoType) => {
		setTodos(todos.filter((item) => item.id !== todo.id));
	};

	const aggregation = useMemo(() => {
		return {
			total: todos.length,
			completed: todos.filter((todo) => todo.completed).length,
			active: todos.filter((todo) => !todo.completed).length,
		};
	}, [todos]);

	return {
		displayTodos,
		aggregation,
		setCategory,
		addTodo,
		toggleTodo,
		deleteTodo,
	};
};
