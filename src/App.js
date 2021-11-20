import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function App() {
	const [todo, setTodo] = useState('')
	const [todos, setTodos] = useState([
		{ id: 1, todo: 'Eat' },
		{ id: 2, todo: 'Sleep' },
		{ id: 3, todo: 'Repeat' },
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

	const handleDelete = (id) => {
		const filtered = todos.filter((todo) => todo.id !== id)
		console.log(id)
		setTodos(filtered)
	}

	const listTodos = todos.map((item, id) => (
		<div className='flex flex-row' key={id}>
			{item.todo}
			<button
				className='ml-2 text-red-600'
				onClick={() => handleDelete(item.id)}
			>
				X
			</button>
		</div>
	))

	return (
		<div className='min-h-screen bg-gray-600 flex flex-row justify-center'>
			<div className='bg-gray-100 my-20 flex flex-col items-center rounded-xl w-3/4 sm:w-1/2'>
				<h1 className='mt-10 mb-5 font-extrabold'>Todo List:</h1>
				<div className='w-48 sm:w-96'>
					<form
						className='flex flex-col space-y-3 items-center justify-center'
						onSubmit={handleSubmit}
					>
						<label>Enter your Todo:</label>
						<input
							className='text-blue-600 w-48 focus:outline-none rounded'
							placeholder='Do some job'
							type='text'
							value={todo}
							onChange={handleChange}
						/>
						<button className='w-20 rounded bg-blue-400' type='submit'>
							Submit
						</button>
					</form>
					<div className='mt-10 border-2 border-gray-400 rounded p-2'>
						{!todos ? (
							'Please enter your todo'
						) : (
							<div className='flex flex-col space-y-2'>{listTodos}</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
