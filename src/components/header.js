import React, { useState } from 'react'
import { Link } from 'gatsby'

const Header = () => {

	const [ isOpen, setIsOpen ] = useState(false)

	const handleMenuClick = () => {
		setIsOpen(prev => !prev)
	}

	return (
		<header>
			<div className="headerContainer">
				<Link to='/' style={{display: "contents"}}>
					<svg xmlns="http://www.w3.org/2000/svg" width="107" height="26" viewBox="0 0 107 26" fill="none">
						<path d="M1.976 3.712C1.56 3.712 1.208 3.568 0.92 3.28C0.632 2.992 0.488 2.64 0.488 2.224C0.488 1.808 0.632 1.456 0.92 1.168C1.208 0.879999 1.56 0.735999 1.976 0.735999C2.376 0.735999 2.712 0.879999 2.984 1.168C3.272 1.456 3.416 1.808 3.416 2.224C3.416 2.64 3.272 2.992 2.984 3.28C2.712 3.568 2.376 3.712 1.976 3.712ZM3.032 5.848V19H0.848V5.848H3.032ZM13.1623 5.608C14.7623 5.608 16.0583 6.096 17.0503 7.072C18.0423 8.032 18.5383 9.424 18.5383 11.248V19H16.3783V11.56C16.3783 10.248 16.0503 9.248 15.3943 8.56C14.7383 7.856 13.8423 7.504 12.7063 7.504C11.5543 7.504 10.6343 7.864 9.94625 8.584C9.27425 9.304 8.93825 10.352 8.93825 11.728V19H6.75425V5.848H8.93825V7.72C9.37025 7.048 9.95425 6.528 10.6903 6.16C11.4423 5.792 12.2663 5.608 13.1623 5.608ZM26.7618 19.216C25.7538 19.216 24.8498 19.048 24.0498 18.712C23.2498 18.36 22.6178 17.88 22.1538 17.272C21.6898 16.648 21.4338 15.936 21.3858 15.136H23.6418C23.7058 15.792 24.0098 16.328 24.5538 16.744C25.1138 17.16 25.8418 17.368 26.7378 17.368C27.5698 17.368 28.2258 17.184 28.7058 16.816C29.1858 16.448 29.4258 15.984 29.4258 15.424C29.4258 14.848 29.1698 14.424 28.6578 14.152C28.1458 13.864 27.3538 13.584 26.2818 13.312C25.3058 13.056 24.5058 12.8 23.8818 12.544C23.2738 12.272 22.7458 11.88 22.2978 11.368C21.8658 10.84 21.6498 10.152 21.6498 9.304C21.6498 8.632 21.8498 8.016 22.2498 7.456C22.6498 6.896 23.2178 6.456 23.9538 6.136C24.6898 5.8 25.5298 5.632 26.4738 5.632C27.9298 5.632 29.1058 6 30.0018 6.736C30.8978 7.472 31.3778 8.48 31.4418 9.76H29.2578C29.2098 9.072 28.9298 8.52 28.4178 8.104C27.9218 7.688 27.2498 7.48 26.4018 7.48C25.6178 7.48 24.9938 7.648 24.5298 7.984C24.0658 8.32 23.8338 8.76 23.8338 9.304C23.8338 9.736 23.9698 10.096 24.2418 10.384C24.5298 10.656 24.8818 10.88 25.2978 11.056C25.7298 11.216 26.3218 11.4 27.0738 11.608C28.0178 11.864 28.7858 12.12 29.3778 12.376C29.9698 12.616 30.4738 12.984 30.8898 13.48C31.3218 13.976 31.5458 14.624 31.5618 15.424C31.5618 16.144 31.3618 16.792 30.9618 17.368C30.5618 17.944 29.9938 18.4 29.2578 18.736C28.5378 19.056 27.7058 19.216 26.7618 19.216ZM35.7729 3.712C35.3569 3.712 35.0049 3.568 34.7169 3.28C34.4289 2.992 34.2849 2.64 34.2849 2.224C34.2849 1.808 34.4289 1.456 34.7169 1.168C35.0049 0.879999 35.3569 0.735999 35.7729 0.735999C36.1729 0.735999 36.5089 0.879999 36.7809 1.168C37.0689 1.456 37.2129 1.808 37.2129 2.224C37.2129 2.64 37.0689 2.992 36.7809 3.28C36.5089 3.568 36.1729 3.712 35.7729 3.712ZM36.8289 5.848V19H34.6449V5.848H36.8289ZM45.9751 5.632C47.1111 5.632 48.1031 5.88 48.9511 6.376C49.8151 6.872 50.4551 7.496 50.8711 8.248V5.848H53.0791V19.288C53.0791 20.488 52.8231 21.552 52.3111 22.48C51.7991 23.424 51.0631 24.16 50.1031 24.688C49.1591 25.216 48.0551 25.48 46.7911 25.48C45.0631 25.48 43.6231 25.072 42.4711 24.256C41.3191 23.44 40.6391 22.328 40.4311 20.92H42.5911C42.8311 21.72 43.3271 22.36 44.0791 22.84C44.8311 23.336 45.7351 23.584 46.7911 23.584C47.9911 23.584 48.9671 23.208 49.7191 22.456C50.4871 21.704 50.8711 20.648 50.8711 19.288V16.528C50.4391 17.296 49.7991 17.936 48.9511 18.448C48.1031 18.96 47.1111 19.216 45.9751 19.216C44.8071 19.216 43.7431 18.928 42.7831 18.352C41.8391 17.776 41.0951 16.968 40.5511 15.928C40.0071 14.888 39.7351 13.704 39.7351 12.376C39.7351 11.032 40.0071 9.856 40.5511 8.848C41.0951 7.824 41.8391 7.032 42.7831 6.472C43.7431 5.912 44.8071 5.632 45.9751 5.632ZM50.8711 12.4C50.8711 11.408 50.6711 10.544 50.2711 9.808C49.8711 9.072 49.3271 8.512 48.6391 8.128C47.9671 7.728 47.2231 7.528 46.4071 7.528C45.5911 7.528 44.8471 7.72 44.1751 8.104C43.5031 8.488 42.9671 9.048 42.5671 9.784C42.1671 10.52 41.9671 11.384 41.9671 12.376C41.9671 13.384 42.1671 14.264 42.5671 15.016C42.9671 15.752 43.5031 16.32 44.1751 16.72C44.8471 17.104 45.5911 17.296 46.4071 17.296C47.2231 17.296 47.9671 17.104 48.6391 16.72C49.3271 16.32 49.8711 15.752 50.2711 15.016C50.6711 14.264 50.8711 13.392 50.8711 12.4ZM63.2979 5.608C64.2899 5.608 65.1859 5.824 65.9859 6.256C66.7859 6.672 67.4099 7.304 67.8579 8.152C68.3219 9 68.5539 10.032 68.5539 11.248V19H66.3939V11.56C66.3939 10.248 66.0659 9.248 65.4099 8.56C64.7539 7.856 63.8579 7.504 62.7219 7.504C61.5699 7.504 60.6499 7.864 59.9619 8.584C59.2899 9.304 58.9539 10.352 58.9539 11.728V19H56.7699V1.24H58.9539V7.72C59.3859 7.048 59.9779 6.528 60.7299 6.16C61.4979 5.792 62.3539 5.608 63.2979 5.608ZM74.7854 7.648V15.4C74.7854 16.04 74.9214 16.496 75.1934 16.768C75.4654 17.024 75.9374 17.152 76.6094 17.152H78.2174V19H76.2494C75.0334 19 74.1214 18.72 73.5134 18.16C72.9054 17.6 72.6014 16.68 72.6014 15.4V7.648H70.8974V5.848H72.6014V2.536H74.7854V5.848H78.2174V7.648H74.7854ZM86.2156 7.648H83.4556V19H81.2716V7.648H79.5676V5.848H81.2716V4.912C81.2716 3.44 81.6476 2.368 82.3996 1.696C83.1676 1.008 84.3916 0.663999 86.0716 0.663999V2.488C85.1116 2.488 84.4316 2.68 84.0316 3.064C83.6476 3.432 83.4556 4.048 83.4556 4.912V5.848H86.2156V7.648ZM100.426 5.848V19H98.2421V17.056C97.8261 17.728 97.2421 18.256 96.4901 18.64C95.7541 19.008 94.9381 19.192 94.0421 19.192C93.0181 19.192 92.0981 18.984 91.2821 18.568C90.4661 18.136 89.8181 17.496 89.3381 16.648C88.8741 15.8 88.6421 14.768 88.6421 13.552V5.848H90.8021V13.264C90.8021 14.56 91.1301 15.56 91.7861 16.264C92.4421 16.952 93.3381 17.296 94.4741 17.296C95.6421 17.296 96.5621 16.936 97.2341 16.216C97.9061 15.496 98.2421 14.448 98.2421 13.072V5.848H100.426ZM106.298 1.24V19H104.114V1.24H106.298Z" fill="black"/>
					</svg>
				</Link>
				<div className='headerNav'>
					<Link to='/' className='navLink'>home</Link>
					<Link to='/contact' className='navLink'>contact</Link>
					<Link to='/privacy-policy/' className='navLink'>privacy policy</Link>
				</div>
				<div className='headerNav mobile'>
					<div id='menuHamburger' onClick={ handleMenuClick }>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" fill='#' /></svg>
					</div>
					{(isOpen) &&
						<div className='mobileNavWrapper'>
							<div className='mobileNavMenuContainer'>
								<div className='mobileNavExit' onClick={ handleMenuClick } >
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35" height="35"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="#f9f9f9"/></svg>
								</div>
								<ul className="mobileNavMenu">
									<div onClick={ handleMenuClick }><Link to="/" className='navLink'>home</Link></div>
									<div onClick={ handleMenuClick }><Link to="/contact/" className='navLink'>contact</Link></div>
									<div onClick={ handleMenuClick }><Link to="/privacy-policy/" className='navLink'>privacy policy</Link></div>
								</ul>
							</div>
						</div>
					}
				</div>
			</div>
		</header>
	)
}

export default Header