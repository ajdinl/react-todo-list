import { useContext } from 'react'
import { AppContext } from '../context'
import { ACTIONS } from '../actions/actions'

export default function ListTodos() {
	const { todos } = useContext(AppContext)
	const { dispatch } = useContext(AppContext)

	const handleDelete = (id) => {
		dispatch({ type: ACTIONS.REMOVE_TODO, payload: { id } })
	}

	const handleCompleted = (id) => {
		dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id } })
	}

	const listTodos = todos.map((item) => (
		<div
			className='flex flex-row m-2 break-all border-gray-300 border-b-2'
			key={item.id}
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
				{todos.length === 0 ? (
					'Your todo list is empty'
				) : (
					<div className='flex flex-col space-y-2'>{listTodos}</div>
				)}
			</div>
		</div>
	)
}
