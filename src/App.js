import { useReducer } from 'react'
import ListTodos from './components/ListTodos'
import Form from './components/Form'
import Header from './components/Header'
import { AppContext } from './context'
import { initialState, reducer } from './reducers/reducer'

function App() {
	const [todos, dispatch] = useReducer(reducer, initialState)

	return (
		<div className='min-h-screen bg-gray-600 flex flex-row justify-center'>
			<div className='bg-gray-100 my-20 flex flex-col items-center rounded-xl w-3/4 sm:w-1/3'>
				<Header />
				<div className='w-48 sm:w-64'>
					<AppContext.Provider value={{ todos, dispatch }}>
						<Form />
						<ListTodos />
					</AppContext.Provider>
				</div>
			</div>
		</div>
	)
}

export default App
