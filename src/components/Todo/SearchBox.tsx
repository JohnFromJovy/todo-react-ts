import { ChangeEvent } from 'react';

export const SearchBox = ({
	performSearch,
}: {
	performSearch: (query: string) => void;
}) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		performSearch(e.target.value);
	};

	return (
		<input
			data-testid="search-input"
			className="todo-input"
			type="text"
			placeholder="search todo here"
			onChange={handleChange}
		/>
	);
};
