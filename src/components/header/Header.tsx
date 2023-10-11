import React from 'react'

const Header = ({ title }) => {
  return (
    <header>
      {title}
    </header>
  )
}

Header.defaultProps = {
  title: 'Application Title'
}

export default Header 