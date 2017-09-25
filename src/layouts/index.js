import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.scss'

const navLinks = [
  {
    name: 'HOME',
    target: '/',
  }, 
  {
    name: 'CATEGORIES',
    target: '/categories',
  }, 
  {
    name: 'BRANDS',
    target: '/brands',
  }, 
  {
    name: 'PRODUCTS',
    target: '/products',
  }
]

const Header = () => (
  <div
    className="navbar"
  >
    <div
      className="navbarInner"
    >
      { navLinks.map(link => (
      <div className="navLink" key={link.target}> 
        <Link
          to={link.target}
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {link.name}
        </Link>
      </div>
      )) }
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
