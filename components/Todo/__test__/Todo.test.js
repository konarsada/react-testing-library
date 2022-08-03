import {render, screen, fireEvent} from "@testing-library/react"
import {BrowserRouter} from "react-router-dom"

import Todo from "../Todo"

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}

describe("Todo", () => {
    it("should render same text passed into title prop", () => {
        render(<MockTodo />)

        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
        const buttonElement = screen.getByRole("button", {name: /Add/i})

        fireEvent.change(inputElement, {target: {value: "Go Grocery Shopping"}})
        fireEvent.click(buttonElement)

        const divElement = screen.getByText(/Go Grocery Shopping/i)

        expect(divElement).toBeInTheDocument()
    })

    const addTask =(tasks) => {
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
        const buttonElement = screen.getByRole("button", {name: /Add/i})

        tasks.forEach(task => {
            fireEvent.change(inputElement, {target: {value: task}})
            fireEvent.click(buttonElement)
        })
    }

    it("should render multiple items", () => {
        render(<MockTodo />)

        addTask(["Go Grocery Shopping", "Pet my dog", "Go shopping"])

        const divElement = screen.getAllByTestId("task-container")

        expect(divElement.length).toBe(3)
    })

    it("task should not have completed class when initially rendered", () => {
        render(<MockTodo />)

        addTask(["Go grocery shopping"])

        const divElement = screen.getByText(/Go Grocery shopping/i)

        expect(divElement).not.toHaveClass("todo-item-active")
    })

    it("task should have completed class when clicked", () => {
        render(<MockTodo />)

        addTask(["Go grocery shopping"])

        const divElement = screen.getByText(/Go Grocery shopping/i)

        fireEvent.click(divElement)

        expect(divElement).toHaveClass("todo-item-active")
    })
})