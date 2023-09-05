import { TodoList } from './TodoList';
import { TodoInput } from './TodoInput';
import { TodoType } from './type';
import './Todo.css';
import { useTodos } from './useTodos';
import { Aggregation } from './Aggregation';

const Todo = ({ items }: { items?: TodoType[] }) => {
	const {
		displayTodos,
		aggregation,
		setCategory: switchCategory,
		addTodo,
		toggleTodo,
		deleteTodo,
	} = useTodos(items);

	return (
		<div className="todo-container">
			<h2>todos</h2>
			<TodoInput onItemAdded={addTodo} />
			<Aggregation
				aggregation={aggregation}
				switchCategory={switchCategory}
			/>
			<TodoList
				todos={displayTodos}
				onToggleItem={toggleTodo}
				onDeleteItem={deleteTodo}
			/>
		</div>
	);
};

export default Todo;
