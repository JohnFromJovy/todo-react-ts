import { useMemo, useState } from 'react';
import { TodoType } from './type';

export const useTodos = (items: TodoType[] = []) => {
	const [todos, setTodos] = useState<TodoType[]>(items);
	const [category, setCategory] = useState<string>('total');
	const [query, setQuery] = useState<string>('');

	const completed = useMemo(() => {
		return todos.filter((todo) => todo.completed);
	}, [todos]);

	const active = useMemo(() => {
		return todos.filter((todo) => !todo.completed);
	}, [todos]);
	const displayTodos = useMemo(() => {
		const getDisplayTodos = () => {
			switch (category) {
				case 'total':
					return todos;
				case 'completed':
					return completed;
				case 'active':
					return active;
				default:
					return todos;
			}
		};
		const items = getDisplayTodos();

		return items.filter((item) => item.content.includes(query));
	}, [active, completed, category, todos, query]);

	const aggregation = useMemo(() => {
		return {
			total: todos.length,
			completed: todos.filter((todo) => todo.completed).length,
			active: todos.filter((todo) => !todo.completed).length,
		};
	}, [todos]);

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

	const search = (query: string) => {
		setQuery(query);
	};

	return {
		displayTodos,
		aggregation,
		setCategory,
		addTodo,
		toggleTodo,
		deleteTodo,
		search,
	};
};
