import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layout'
import RichText from '../components/rich-text'

const PrivacyPolicy = ({data}) => {
	console.log(data.prismicPrivacyPolicyPage)
	return (
		<Layout>
			<div className='legalPageContainer'>
				<h1>{data.prismicPrivacyPolicyPage.data.page_title.text}</h1>
				<RichText html={data.prismicPrivacyPolicyPage.data.page_content.html} />
			</div>
		</Layout>
	)
}

export const query = graphql`
  {
    prismicPrivacyPolicyPage {
      data {
        page_title {
		  text
        }
        page_content {
          html
        }
      }
    }
  }
`

export default PrivacyPolicy