import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';

import { BrowserRouter } from 'react-router-dom';

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
    return (
        <BrowserRouter>
            <TodoFooter
                numberOfIncompleteTasks={numberOfIncompleteTasks}
            />
        </BrowserRouter>
    )
}

describe("TodoFooter", () => {
    beforeEach(() => {
        console.log("Running before each test")
    })

    beforeAll(() => {
        console.log("Running once before all tests")
    })

    afterEach(() => {
        console.log("Running after each test")
    })

    afterAll(() => {
        console.log("Ran once after all tests")
    })

    it('should render the correct amount of incomplete tasks', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={5} />);
        const paragraphElement = screen.getByText(/5 tasks left/i);
        expect(paragraphElement).toBeInTheDocument();
    });

    it('should render "task" when the number of incomplete task is one', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1} />);
        const paragraphElement = screen.getByText(/1 task left/i);
        expect(paragraphElement).toBeInTheDocument();
    });
})

describe("Test 2", () => {
    it('should render "task" when the number of incomplete task is one -- ex-2', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1} />);
        const paragraphElement = screen.getByText(/1 task left/i);
        expect(paragraphElement).toBeTruthy();
    });

    it('should render "task" when the number of incomplete task is one -- ex-3', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1} />);
        const paragraphElement = screen.getByText(/1 task left/i);
        expect(paragraphElement).toContainHTML("p");
    });

    it('should render "task" when the number of incomplete task is one -- ex-4', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1} />);
        const paragraphElement = screen.getByTestId("para");
        expect(paragraphElement.textContent).not.toBe(/1 tasks left/i);
    });
})