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
});