import { useState, useContext } from 'react'
import { AppContext } from '../context'
import { ACTIONS } from '../actions/actions'

export default function Form() {
	const [newTodo, setnewTodo] = useState('')
	const { dispatch } = useContext(AppContext)

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch({ type: ACTIONS.ADD_TODO, payload: { newTodo } })
		setnewTodo('')
	}

	const handleChange = (e) => {
		setnewTodo(e.target.value)
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
				value={newTodo}
				onChange={handleChange}
			/>
			<button className='w-20 rounded bg-blue-400' type='submit'>
				Submit
			</button>
		</form>
	)
}
