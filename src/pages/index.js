import React from "react"
import { graphql } from 'gatsby'

import Layout from "../layout"
import HeroSection from '../components/hero-section'

const IndexPage = ({data}) => {
	return (
    	<Layout>
			<HeroSection image={data.prismicHomepage.data.hero_image.gatsbyImageData} text={data.prismicHomepage.data.hero_text.html}/>
		</Layout>
 	)
}

export const query = graphql`
{
    prismicHomepage {
    	data {
        	hero_image {
          		gatsbyImageData(layout: CONSTRAINED)
        	}
        	hero_text {
          		html
        	}
      	}
    }
}
`

export default IndexPage
