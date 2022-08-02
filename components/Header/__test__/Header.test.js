import { render, screen } from '@testing-library/react';
import Header from '../Header';

// we can use it OR test

it('should render same text passed into title prop', () => {
    render(<Header title={"Sada React Testing"} />);
    const headingElement = screen.getByText(/sada react testing/i);
    expect(headingElement).toBeInTheDocument();
});

// test('should render same text passed into title prop -- ex-2', () => {
//     render(<Header title={"Sada React Testing"} />);
    
//     const headingElement = screen.getByRole("heading", {
//         name: "Sada React Testing"
//     })

//     expect(headingElement).toBeInTheDocument();
// });

// it('should render same text passed into title prop -- ex-3', () => {
//     render(<Header title={"Sada React Testing"} />);
//     const headingElement = screen.getByTitle(/header/i);
//     expect(headingElement).toBeInTheDocument();
// });

// it('should render same text passed into title prop -- ex-4', () => {
//     render(<Header title={"Sada React Testing"} />);
//     const headingElement = screen.getByTestId(/header-1/i);
//     expect(headingElement).toBeInTheDocument();
// });

// // Find By
// it('should render same text passed into title prop -- ex-5', async () => {
//     render(<Header title={"Sada React Testing"} />);
//     const headingElement = await screen.findByText(/sada react testing/i);
//     expect(headingElement).toBeInTheDocument();
// });

// // Query By
// it('should render same text passed into title prop -- ex-6', () => {
//     render(<Header title={"Sada React Testing"} />);
//     const headingElement = screen.queryByText("dogs");
//     expect(headingElement).not.toBeInTheDocument();
// });

// it('should render same text passed into title prop -- ex-7', () => {
//     render(<Header title={"Sada React Testing"} />);
//     const headingElements = screen.getAllByRole("heading");
//     expect(headingElements.length).toBe(2);
// });