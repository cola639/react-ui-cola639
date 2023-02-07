import { render, screen } from '@testing-library/react';
import { Wrap } from '../index';

describe('Wrap', () => {
	test('Should render Container correctly', () => {
		render(<Wrap data-testid="basic-container" />);
		expect(screen.getByTestId('basic-container')).toBeInTheDocument();
	});

	test('Should render child element as a descendant', () => {
		render(
			<Wrap data-testid="container-with-child">
				<div>Content</div>
			</Wrap>,
		);
		expect(screen.getByTestId('container-with-child')).toHaveTextContent(
			'Content',
		);
	});

	test('Should have some certain classes within `class` attribute', () => {
		render(
			<Wrap
				data-testid="custom-container"
				className="custom-class developer-class"
			/>,
		);
		expect(screen.getByTestId('custom-container')).toHaveClass('custom-class');
		expect(screen.getByTestId('custom-container')).toHaveClass(
			'developer-class',
		);
	});
});
