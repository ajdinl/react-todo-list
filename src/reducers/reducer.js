import { v4 as uuidv4 } from 'uuid'
import { ACTIONS } from '../actions/actions'

export const initialState = [
	{ id: 1, todo: 'Code', completed: false },
	{ id: 2, todo: 'Sleep', completed: true },
	{ id: 3, todo: 'Repeat', completed: false },
]

export const reducer = (todos = initialState, action) => {
	switch (action.type) {
		case ACTIONS.ADD_TODO:
			return [
				...todos,
				{ id: uuidv4(), todo: action.payload.newTodo, completed: false },
			]
		case ACTIONS.TOGGLE_TODO:
			return todos.map((todo) => {
				return todo.id === action.payload.id
					? { ...todo, completed: !todo.completed }
					: { ...todo }
			})
		case ACTIONS.REMOVE_TODO:
			return todos.filter((todo) => todo.id !== action.payload.id)
		default:
			return
	}
}
