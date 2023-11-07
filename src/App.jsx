import { useEffect, useState } from 'react'
import './App.scss'
import Nav from './components/Nav/Nav'
import SocialItems from './components/SocialItems/SocialItems'
import TodayItems from './components/TodayItems/TodayItems'

const getInitialDarkMode = () => {
	const prefersDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches
	const storedDarkMode = localStorage.getItem('darkMode') === 'true'

	return storedDarkMode || prefersDarkMode
}

function App() {
	const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode)

	const handleDarkMode = () => {
		const newDarkMode = !isDarkMode
		setIsDarkMode(newDarkMode)
		localStorage.setItem('darkMode', newDarkMode)
	}

	useEffect(() => {
		document.body.classList.toggle('dark-mode', isDarkMode)
	}, [isDarkMode])

	return (
		<main>
			<Nav handleDarkMode={handleDarkMode} isDarkMode={isDarkMode} />
			<div className="container">
				<SocialItems />
				<TodayItems />
			</div>
		</main>
	)
}

export default App
