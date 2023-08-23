import { useState } from 'react';
import { TodoType } from './type';

export const useTodos = (items: TodoType[] = []) => {
	const [todos, setTodos] = useState<TodoType[]>(items);
	const [displayTodos, setDisplayTodos] = useState<TodoType[]>(items);
	const addTodo = (todo: TodoType) => {
		setTodos([todo, ...todos]);
	};

	const filterCompletedTodos = () => {
		setDisplayTodos(todos.filter((todo) => todo.completed));
	};

	const filterTotalTodos = () => {
		setDisplayTodos(todos);
	};

	const toggleTodo = (todo: TodoType) => {
		setTodos(
			todos.map((item) => {
				if (item.id === todo.id) {
					return { ...item, completed: !item.completed };
				}
				return item;
			})
		);
	};

	const deleteTodo = (todo: TodoType) => {
		setTodos(todos.filter((item) => item.id !== todo.id));
	};

	return {
		todos: displayTodos,
		addTodo,
		filterCompletedTodos,
		filterTotalTodos,
		toggleTodo,
		deleteTodo,
	};
};
