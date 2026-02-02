// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TxRelay title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TxRelay/i);
    expect(titleElement).toBeInTheDocument();
});
