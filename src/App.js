import { useState } from 'react'
import ListTodos from './components/ListTodos'
import Form from './components/Form'
import Header from './components/Header'

function App() {
	const [todo, setTodo] = useState('')
	const [todos, setTodos] = useState([
		{ id: 1, todo: 'Code', completed: false },
		{ id: 2, todo: 'Sleep', completed: true },
		{ id: 3, todo: 'Repeat', completed: false },
	])

	return (
		<div className='min-h-screen bg-gray-600 flex flex-row justify-center'>
			<div className='bg-gray-100 my-20 flex flex-col items-center rounded-xl w-3/4 sm:w-1/3'>
				<Header />
				<div className='w-48 sm:w-64'>
					<Form todo={todo} setTodo={setTodo} setTodos={setTodos} />
					<ListTodos todos={todos} setTodos={setTodos} />
				</div>
			</div>
		</div>
	)
}

export default App
