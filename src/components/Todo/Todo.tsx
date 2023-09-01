import { TodoList } from './TodoList';
import { TodoInput } from './TodoInput';
import { TodoType } from './type';
import './Todo.css';
import { useTodos } from './useTodos';

const Todo = ({ items }: { items?: TodoType[] }) => {
	const {
		todos,
		addTodo,
		filterCompletedTodos,
		filterTotalTodos,
		filterActiveTodos,
		toggleTodo,
		deleteTodo,
	} = useTodos(items);

	return (
		<div className="todo-container">
			<h2>todos</h2>
			<TodoInput onItemAdded={addTodo} />
			<div className="aggregation">
				<button
					data-testid="todo-total"
					onClick={() => filterTotalTodos()}>
					total
				</button>

				<button
					data-testid="todo-completed"
					onClick={() => filterCompletedTodos()}>
					completed
				</button>

				<button
					data-testid="todo-active"
					onClick={() => filterActiveTodos()}>
					active
				</button>
			</div>
			<TodoList
				todos={todos}
				onToggleItem={toggleTodo}
				onDeleteItem={deleteTodo}
			/>
		</div>
	);
};

export default Todo;
