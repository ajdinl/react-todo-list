import { useContext } from 'react'
import { AppContext } from '../context'

export default function ListTodos() {
	const { todos } = useContext(AppContext)
	const { dispatchTodoEvent } = useContext(AppContext)

	const handleDelete = (id) => {
		dispatchTodoEvent('REMOVE_TODO', { id })
	}

	const handleCompleted = (id) => {
		dispatchTodoEvent('TOGGLE_TODO', { id })
	}

	const listTodos = todos.map((item, id) => (
		<div
			className='flex flex-row m-2 break-all border-gray-300 border-b-2'
			key={id}
		>
			<span type='checkbox' onClick={() => handleCompleted(item.id)}>
				<div className={`${item.completed ? 'line-through' : ''}`}>
					{item.todo}
				</div>
			</span>
			<button
				className='ml-2 text-red-600'
				onClick={() => handleDelete(item.id)}
			>
				X
			</button>
		</div>
	))
	return (
		<div>
			<div className='mt-10 border-2 border-gray-400 rounded p-2'>
				{!todos ? (
					'Please enter your todo'
				) : (
					<div className='flex flex-col space-y-2'>{listTodos}</div>
				)}
			</div>
		</div>
	)
}
