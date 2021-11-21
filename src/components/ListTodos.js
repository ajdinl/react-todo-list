export default function ListTodos({ todos, setTodos }) {
	const handleDelete = (id) => {
		const filtered = todos.filter((todo) => todo.id !== id)
		setTodos(filtered)
	}

	const handleCompleted = (id) => {
		const status = todos.map((todo) => {
			return todo.id === id
				? { ...todo, completed: !todo.completed }
				: { ...todo }
		})
		setTodos(status)
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
