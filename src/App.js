import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ListTodos from './components/ListTodos'
import Form from './components/Form'

function App() {
	const [todo, setTodo] = useState('')
	const [todos, setTodos] = useState([
		{ id: 1, todo: 'Eat', completed: false },
		{ id: 2, todo: 'Sleep', completed: true },
		{ id: 3, todo: 'Repeat', completed: false },
	])

	const handleSubmit = (e) => {
		e.preventDefault()
		setTodos((prev) => {
			return [...prev, { id: uuidv4(), todo }]
		})
		setTodo('')
	}

	const handleChange = (e) => {
		setTodo(e.target.value)
	}

	return (
		<div className='min-h-screen bg-gray-600 flex flex-row justify-center'>
			<div className='bg-gray-100 my-20 flex flex-col items-center rounded-xl w-3/4 sm:w-1/2'>
				<h1 className='mt-10 mb-5 font-extrabold'>Todo List</h1>
				<div className='w-48 sm:w-72'>
					<Form
						todo={todo}
						handleChange={handleChange}
						handleSubmit={handleSubmit}
					/>
					<ListTodos todos={todos} setTodos={setTodos} />
				</div>
			</div>
		</div>
	)
}

export default App
