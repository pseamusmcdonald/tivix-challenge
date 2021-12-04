
require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
  }),
  

module.exports = {
  	siteMetadata: {
    	siteUrl: "https://www.yourdomain.tld",
    	title: "tivix-challenge",
  	},
	plugins: [
    	"gatsby-plugin-image",
    	"gatsby-plugin-sharp",
    	"gatsby-transformer-sharp",
    	{
      		resolve: "gatsby-source-filesystem",
      		options: {
        		name: "images",
        		path: "./src/assets/images/",
      		},
      		__key: "images",
		},
		{
			resolve: 'gatsby-source-prismic',
			options: {
		  	repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
		  		accessToken: process.env.PRISMIC_ACCESS_TOKEN,
		  		customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
				linkResolver: (doc) => linkResolver(doc),
			},
		},
	],
};
