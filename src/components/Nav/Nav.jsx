import './Nav.scss'

const Nav = ({ handleDarkMode, isDarkMode }) => {
	return (
		<nav className="nav">
			<div className="nav-container">
				<div className="nav-headline">
					<h1 className="nav-title">Social Media Dashboard</h1>
					<p className="nav-text">Total Followers: 23, 004</p>
				</div>
				<div className="nav-line"></div>
				<div className="nav-mode">
					<p className="nav-text">Dark Mode</p>
					{isDarkMode ? (
						<button className="nav-btn active" onClick={() => handleDarkMode()}></button>
					) : (
						<button className="nav-btn" onClick={() => handleDarkMode()}></button>
					)}
				</div>
			</div>
		</nav>
	)
}

export default Nav
