import SocialItem from '../SocialItem/SocialItem'
import './SocialItems.scss'
import { overview } from '../../data'

const SocialItems = () => {
	const showSocialItems = overview.map(item => {
		return <SocialItem key={item.id} {...item} className="social"/>
	})

	return <section className="social-container">{showSocialItems}</section>
}

export default SocialItems
