import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';

const mockedSetTodo = jest.fn() // mock function

describe("AddInput", () => {
    it('should render input element', () => {
        render(
            <AddInput
                todos={[]}
                // setTodos={() => {}}
                // setTodos is a hook function,
                // in this case we do not care what this does,
                // so this is perfectly valid.
                // Better approach is to mock the function
                setTodos={mockedSetTodo}
            />
        );
        const inputElement = screen.getByPlaceholderText(/add a new task here../i);
        expect(inputElement).toBeInTheDocument();
    });

    xit('should be able to type into input', () => {
        render(
            <AddInput
                todos={[]}
                setTodos={mockedSetTodo}
            />
        );
        const inputElement = screen.getByPlaceholderText(/add a new task here../i);
        fireEvent.change(inputElement, {target: {value: "Go shopping"}})
        expect(inputElement.value).toBe("Go shopping");
    });

    it('should have empty input when add button is clicked', () => {
        render(
            <AddInput
                todos={[]}
                setTodos={mockedSetTodo}
            />
        );
        const inputElement = screen.getByPlaceholderText(/add a new task here../i);
        const buttonElement = screen.getByRole("button", {name: /Add/i});
        fireEvent.change(inputElement, {target: {value: "Go shopping"}})
        fireEvent.click(buttonElement)
        expect(inputElement.value).toBe("");
    });
})