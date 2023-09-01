import { useState } from 'react';
import { TodoType } from './type';

export const useTodos = (items: TodoType[] = []) => {
	const [todos, setTodos] = useState<TodoType[]>(items);
	const [displayTodos, setDisplayTodos] = useState<TodoType[]>(items);

	const addTodo = (todo: TodoType) => {
		setTodos([todo, ...todos]);
		setDisplayTodos([todo, ...todos]);
	};

	const filterCompletedTodos = () => {
		setDisplayTodos(todos.filter((todo) => todo.completed));
	};

	const filterTotalTodos = () => {
		setDisplayTodos(todos);
	};

	const filterActiveTodos = () => {
		setDisplayTodos(todos.filter((todo) => !todo.completed));
	};

	const toggleTodo = (todo: TodoType) => {
		const updatedTodos = todos.map((item) => {
			if (item.id === todo.id) {
				return { ...item, completed: !item.completed };
			}
			return item;
		});

		setTodos(updatedTodos);
		setDisplayTodos(updatedTodos);
	};

	const deleteTodo = (todo: TodoType) => {
		setTodos(todos.filter((item) => item.id !== todo.id));
		setDisplayTodos(todos.filter((item) => item.id !== todo.id));
	};

	return {
		todos: displayTodos,
		addTodo,
		filterCompletedTodos,
		filterTotalTodos,
		filterActiveTodos,
		toggleTodo,
		deleteTodo,
	};
};
