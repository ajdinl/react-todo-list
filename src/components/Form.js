import { useState, useContext } from 'react'
import { AppContext } from '../context'

export default function Form() {
	const [todo, setTodo] = useState('')
	const { dispatchTodoEvent } = useContext(AppContext)

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatchTodoEvent('ADD_TODO', todo)
		setTodo('')
	}

	const handleChange = (e) => {
		setTodo(e.target.value)
	}

	return (
		<form
			className='flex flex-col space-y-3 items-center justify-center'
			onSubmit={handleSubmit}
		>
			<label>Enter your Todo:</label>
			<input
				className='text-blue-600 w-48 sm:w-64 focus:outline-none rounded'
				placeholder='Do some job'
				type='text'
				value={todo}
				onChange={handleChange}
			/>
			<button className='w-20 rounded bg-blue-400' type='submit'>
				Submit
			</button>
		</form>
	)
}
