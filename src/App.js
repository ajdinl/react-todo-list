import { useState } from 'react'
import ListTodos from './components/ListTodos'
import Form from './components/Form'
import Header from './components/Header'
import { AppContext } from './context'
import { v4 as uuidv4 } from 'uuid'

function App() {
	const [todos, setTodos] = useState([
		{ id: 1, todo: 'Code', completed: false },
		{ id: 2, todo: 'Sleep', completed: true },
		{ id: 3, todo: 'Repeat', completed: false },
	])

	const dispatchTodoEvent = (actionType, payload) => {
		switch (actionType) {
			case 'ADD_TODO':
				setTodos([...todos, { id: uuidv4(), todo: payload, completed: false }])
				return
			case 'TOGGLE_TODO':
				setTodos(
					todos.map((todo) => {
						return todo.id === payload.id
							? { ...todo, completed: !todo.completed }
							: { ...todo }
					})
				)
				return
			case 'REMOVE_TODO':
				setTodos(todos.filter((todo) => todo.id !== payload.id))
				console.log(todos)
				return
			default:
				return
		}
	}
	return (
		<div className='min-h-screen bg-gray-600 flex flex-row justify-center'>
			<div className='bg-gray-100 my-20 flex flex-col items-center rounded-xl w-3/4 sm:w-1/3'>
				<Header />
				<div className='w-48 sm:w-64'>
					<AppContext.Provider value={{ todos, dispatchTodoEvent }}>
						<Form />
						<ListTodos />
					</AppContext.Provider>
				</div>
			</div>
		</div>
	)
}

export default App
