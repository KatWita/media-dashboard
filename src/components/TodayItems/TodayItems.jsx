import './TodayItems.scss'
import { today } from '../../data'
import TodayItem from '../TodayItem/TodayItem'

const showItems = today.map(item => {
	return <TodayItem key={item.id} {...item} />
})

const TodayItems = () => {
	return (
		<section className="today-container">
			<h2 className="today-container-title">Overview - Today</h2>
			<div className="today-items-container">{showItems}</div>
		</section>
	)
}

export default TodayItems
