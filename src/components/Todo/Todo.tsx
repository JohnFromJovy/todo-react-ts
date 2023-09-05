import { TodoList } from './TodoList';
import { TodoInput } from './TodoInput';
import { TodoType } from './type';
import './Todo.css';
import { useTodos } from './useTodos';

const Todo = ({ items }: { items?: TodoType[] }) => {
	const {
		displayTodos,
		aggregation,
		setCategory,
		addTodo,
		toggleTodo,
		deleteTodo,
	} = useTodos(items);

	return (
		<div className="todo-container">
			<h2>todos</h2>
			<TodoInput onItemAdded={addTodo} />
			<div className="aggregation">
				<div>
					<label>
						Total:
						<button
							data-testid="todo-total"
							onClick={() => setCategory('total')}>
							{aggregation.total}
						</button>
					</label>
					<label>
						Completed:
						<button
							data-testid="todo-completed"
							onClick={() => setCategory('completed')}>
							{aggregation.completed}
						</button>
					</label>
					<label>
						Active:
						<button
							data-testid="todo-active"
							onClick={() => setCategory('active')}>
							{aggregation.active}
						</button>
					</label>
				</div>
			</div>
			<TodoList
				todos={displayTodos}
				onToggleItem={toggleTodo}
				onDeleteItem={deleteTodo}
			/>
		</div>
	);
};

export default Todo;
