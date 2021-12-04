import React from 'react'

import Header from './components/header'
import Footer from './components/footer'
import './layout.css'

const Layout = ({children}) => {
	return (
		<>
			<Header />
			<main>
				{children}
			</main>
			<Footer />
		</>
	)
}

export default Layout