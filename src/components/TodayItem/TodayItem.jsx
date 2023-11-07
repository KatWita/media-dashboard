import './TodayItem.scss'

const TodayItem = ({ type, socialIcon, number, percentageIcon, percentageNum }) => {
	return (
		<article className="today">
			<div className="today-social-box">
				<p className="today-type">{type}</p>
				<img src={socialIcon} alt="" className="today-icon" />
			</div>
			<div className="today-number-box">
				<p className="today-number">{number}</p>
				<div className="today-percentage-box">
					<img src={percentageIcon} alt="percentage icon" />
					{percentageIcon === 'images/icon-down.svg' ? (
						<p className="today-percentage" style={{ color: 'var(--bright-red)' }}>
							{percentageNum}%
						</p>
					) : (
						<p className="today-percentage" style={{ color: 'var(--lime-green)' }}>
							{percentageNum}%
						</p>
					)}
				</div>
			</div>
		</article>
	)
}

export default TodayItem
