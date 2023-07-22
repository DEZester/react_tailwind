import styles from './style.js'
import { Billing, Business, CardDeal, Clients, CTA, Footer, Hero, Navbar, Stats, Testimonials } from './components'
import upArrowImg from './assets/uparrow.png'
import { useEffect, useState } from 'react'

const App = () => {
	const [showTopButton, setShowTopButton] = useState(false)

	const handleScrollToTopEvent = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	useEffect(() => {
		const handleTopEvent = () => {
			window.pageYOffset > 300 ? setShowTopButton(true) : setShowTopButton(false)
		}

		window.addEventListener('scroll', handleTopEvent)


		return () => {
			window.removeEventListener('scroll', handleTopEvent)
		}
	}, [])

	return <div className='bg-primary w-full overflow-hidden'>
		<div className={`${styles.paddingX} ${styles.flexCenter}`}>
			<div className={`${styles.boxWidth}`}>
				<Navbar />
			</div>
		</div>

		<div className={`bg-primary ${styles.flexStart}`}>
			<div className={`${styles.boxWidth}`}>
				<Hero />
			</div>
		</div>

		<div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
			<div className={`${styles.boxWidth}`}>
				<Stats />
				<Business />
				<Billing />
				<CardDeal />
				<Testimonials />
				<Clients />
				<CTA />
				<Footer />

				{showTopButton && (
					<div>
						<button
							className=' bg-blue-gradient rounded-full fixed bottom-8 right-8 z-50 cursor-pointer p-2.5'
							onClick={handleScrollToTopEvent}>
							<img className='w-[30px] h-[30px]' src={upArrowImg} alt='up' />
						</button>
					</div>
				)}
			</div>
		</div>


	</div>
}

export default App
