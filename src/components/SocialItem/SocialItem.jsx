import './SocialItem.scss'

const SocialItem = ({ icon, title, login, usersTotal, usersType, todayIcon, todayNum, borderColor }) => {
	return (
		<article className="social">
			<div className="social-border" style={{ background: `${borderColor}` }}></div>
			<div className="social-headline">
				<img src={icon} alt={title} className="social-img" />
				<p className="social-login">{login}</p>
			</div>
			<div className="social-numbers">
				<p className="social-total">{usersTotal}</p>
				<p className="social-users-type">{usersType}</p>
			</div>
			<div className="social-footer">
				<img src={todayIcon} alt="today icon" />
				{todayIcon === 'images/icon-down.svg' ? (
					<p className="social-footer-text" style={{ color: 'var(--bright-red)' }}>
						{todayNum} Today
					</p>
				) : (
					<p className="social-footer-text" style={{ color: 'var(--lime-green)' }}>
						{todayNum} Today
					</p>
				)}
			</div>
		</article>
	)
}

export default SocialItem
