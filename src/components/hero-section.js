import React from "react"
import { GatsbyImage } from 'gatsby-plugin-image'

import RichText from "./rich-text"

const HeroSection = ({image, text}) => {
	return (
		<div className="heroSectionContainer">
			<div className="heroTextContainer">
				<RichText html={text} />
			</div>
			<div className="heroImageContainer">
				<GatsbyImage image={image}/>
			</div>
		</div>
	)
}

export default HeroSection