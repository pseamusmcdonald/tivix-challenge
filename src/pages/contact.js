import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layout'
import ContactForm from '../components/contact-form'
import RichText from '../components/rich-text'

const Contact = ({data}) => {
	return (
		<Layout>
			<div className="contactPageContainer">
				<div className="contactPageSectionWrapper left">
					<RichText html={data.prismicContactPage.data.contact_form_text.html} />
				</div>
				<div className="contactPageSectionWrapper right">
					<ContactForm />
				</div>
			</div>
			
		</Layout>
	)
}

export const query = graphql`
{
	prismicContactPage {
      	data {
    		contact_form_text {
    			html
			}
      	}
	}
}
`

export default Contact