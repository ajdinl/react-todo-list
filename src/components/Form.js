import { v4 as uuidv4 } from 'uuid'

export default function Form({ todo, setTodo, setTodos }) {
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
