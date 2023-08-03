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
});
