import React from 'react'
import classes from './Header.module.scss'
import Nav from '../../components/Nav/Nav'
import Logo from '../../assets/images/logo.svg'

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={Logo} alt='Logo of W.' className={classes.header__logo}/>
      <Nav/>
    </header>
  )
}

export default Header