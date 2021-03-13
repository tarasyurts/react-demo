import React, { useState } from 'react'
import Counter from './Counter'
import CounterHooks from './CounterHooks'

export const ThemeContext = React.createContext()

function App() {
	const [theme, setTheme] = useState('red')
	return (
		<ThemeContext.Provider value={ { backgroundColor: theme } }>
			<Counter initialCount={0}/>
			<CounterHooks initialCount={5} />
			<button onClick={ () => setTheme(prevTheme =>{ return prevTheme === 'red' ? 'blue' : 'red' }) } >Change Theme</button>
		</ThemeContext.Provider>
	)
}

export default App
