import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Todo from './Todo';
import { act } from 'react-dom/test-utils';

describe('Todos apllication', () => {
	it('renders the title', () => {
		render(<Todo />);
		expect(screen.getByText('todos')).toBeInTheDocument();
	});

	it('add item to the list', () => {
		render(<Todo />);
		const input = screen.getByTestId('todo-input');
		act(() => {
			userEvent.type(input, 'buy some milk');
			userEvent.type(input, '{enter}');
		});
		expect(screen.getByText('buy some milk')).toBeInTheDocument();
	});

	it('completes an item when clicked', () => {
		render(<Todo />);
		const input = screen.getByTestId('todo-input');
		act(() => {
			userEvent.type(input, 'buy some milk');
			userEvent.type(input, '{enter}');
		});
		const item = screen.getByText('buy some milk');
		act(() => {
			userEvent.click(item);
		});

		expect(item).toHaveAttribute('data-completed', 'true');
	});

	it('delete an item when button clicked', () => {
		render(<Todo />);
		const input = screen.getByTestId('todo-input');
		act(() => {
			userEvent.type(input, 'buy some milk');
			userEvent.type(input, '{enter}');
		});
		const item = screen.getByText('buy some milk');
		expect(item).toBeInTheDocument;
		const deleteButton = screen.getByTestId('delete-button');
		act(() => {
			userEvent.click(deleteButton);
		});
		expect(item).not.toBeInTheDocument;
	});

	it('render a list of items', () => {
		const items = [
			{ id: '1', content: 'buy some milk', completed: false },
			{ id: '2', content: 'learn javascript & react', completed: true },
			{ id: '3', content: 'pack up toys', completed: false },
		];
		render(<Todo items={items} />);
		expect(screen.getByText('learn javascript & react')).toBeInTheDocument;
	});

	it('render a differnt group of items', () => {
		const items = [
			{ id: '1', content: 'buy some milk', completed: false },
			{ id: '2', content: 'learn javascript & react', completed: true },
			{ id: '3', content: 'pack up toys', completed: false },
		];
		render(<Todo items={items} />);
		const todoItems = screen.getAllByTestId('todo-item');
		expect(todoItems.length).toEqual(items.length);

		const completedTab = screen.getByTestId('todo-completed');
		act(() => {
			userEvent.click(completedTab);
		});

		expect(screen.getAllByTestId('todo-item').length).toEqual(1);
		expect(screen.getByText('learn javascript & react')).toBeInTheDocument();
	});

	it('switch tabs', () => {
		const items = [
			{ id: '1', content: 'buy some milk', completed: false },
			{ id: '2', content: 'learn javascript & react', completed: true },
			{ id: '3', content: 'pack up toys', completed: false },
		];
		render(<Todo items={items} />);
		const todoItems = screen.getAllByTestId('todo-item');
		expect(todoItems.length).toEqual(items.length);

		const completedTab = screen.getByTestId('todo-completed');
		act(() => {
			userEvent.click(completedTab);
		});
		expect(screen.getAllByTestId('todo-item').length).toEqual(1);
		expect(screen.getByText('learn javascript & react')).toBeInTheDocument();

		const totalTab = screen.getByTestId('todo-total');
		act(() => {
			userEvent.click(totalTab);
		});
		expect(screen.getAllByTestId('todo-item').length).toEqual(3);
		expect(screen.getByText('learn javascript & react')).toBeInTheDocument();
		expect(screen.getByText('buy some milk')).toBeInTheDocument();
		expect(screen.getByText('pack up toys')).toBeInTheDocument();
	});

	it('render active tabs', () => {
		const items = [
			{ id: '1', content: 'buy some milk', completed: false },
			{ id: '2', content: 'learn javascript & react', completed: true },
			{ id: '3', content: 'pack up toys', completed: false },
		];
		render(<Todo items={items} />);
		const todoItems = screen.getAllByTestId('todo-item');
		expect(todoItems.length).toEqual(items.length);

		const activeTab = screen.getByTestId('todo-active');
		act(() => {
			userEvent.click(activeTab);
		});
		expect(screen.getAllByTestId('todo-item').length).toEqual(2);
		expect(screen.getByText('buy some milk')).toBeInTheDocument();
		expect(screen.getByText('pack up toys')).toBeInTheDocument();

		// const totalTab = screen.getByTestId('todo-total');
		// act(() => {
		// 	userEvent.click(totalTab);
		// });
		// expect(screen.getAllByTestId('todo-item').length).toEqual(3);
		// expect(screen.getByText('learn javascript & react')).toBeInTheDocument();
		// expect(screen.getByText('buy some milk')).toBeInTheDocument();
		// expect(screen.getByText('pack up toys')).toBeInTheDocument();
	});
});
