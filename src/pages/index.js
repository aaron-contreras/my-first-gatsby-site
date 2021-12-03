import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
	return (
		<Layout pageTitle="Home Page">
			<p>I'm making this by following the Gatsby Tutorial.</p>
			<StaticImage
				alt="A description of what a 'tubby' is"
			src="../images/tubby.png"
			/>
		</Layout>
	)
}

export default IndexPage
