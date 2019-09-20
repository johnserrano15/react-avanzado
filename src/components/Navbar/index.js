import React from 'react'
import { Nav, Link } from './styles'
import { MdHome, MdFavorite, MdPersonOutline } from 'react-icons/md'

const SIZE = '32px'

export const Navbar = () => (
  <Nav>
    <Link to='/'><MdHome size={SIZE} /></Link>
    <Link to='/favs'><MdFavorite size={SIZE} /></Link>
    <Link to='/user'><MdPersonOutline size={SIZE} /></Link>
  </Nav>
)
