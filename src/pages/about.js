import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => {
    return (
            <Layout>
            <h1>This is the page title for the about page</h1>
            <p>this is the content for the about page</p>
            <p>contact me <Link to="/contact">Link to contact page</Link></p>
            </Layout>
    )
}

export default AboutPage