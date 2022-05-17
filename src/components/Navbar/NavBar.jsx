import React from 'react'
import './style';
import { Brand, Container, Logo, Orders, Brandname, Homeicon, Ordertxt, Peopleicon, Navigation, Head, Avatar, Profileimg, Username } from './style';
import LogoIcon from './../../image/bed 1.png';
import HomeIcon from './../../image/homeicon.png'
import PeopleIcon from './../../image/people.png'
import CategoryIcon from './../../image/category.png'
import ProductsIcon from './../../image/Product.png'
import TechnologyIcon from './../../image/Technology.png'
import AdressIcon from './../../image/adres.png'
import Avatarka from './../../image/avatar.png'
import Profile from './../../image/Profile.png'

import Buyurtma from '../Buyurtmalar/Buyurtma';
import Customers from '../Customers/Customers';
import Toifalar from '../Toifalar/Toifalar'
import { Link, Route, Routes, NavLink  } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <Head>
        <Avatar src={Avatarka} />
        <Profileimg src={Profile} />
        <Username>John Doe</Username>
      </Head>
      <Container>
        <Brand>
          <Logo src={LogoIcon} />
          <Brandname>Matrassue</Brandname>
        </Brand>
          <Link to='/'>
        <Orders>
          <Homeicon src={HomeIcon} />
            <Ordertxt>Buyurtmalar</Ordertxt>
        </Orders>
            </Link>
          <Link to='/customers'>
        <Orders>
          <Peopleicon src={PeopleIcon} />
          <Ordertxt>Сustomers</Ordertxt>
        </Orders>
          </Link>
          <Link to='/toifalar'>
        <Orders>
          <Peopleicon src={CategoryIcon} />
          <Ordertxt>Toifalar</Ordertxt>
        </Orders>
          </Link>
          <Link to='/mahsulotlar'>
        <Orders>
          <Peopleicon src={ProductsIcon} />
          <Ordertxt>Mahsulotlar</Ordertxt>
        </Orders>
          </Link>
        <Link to='/texnologiyalar'>
        <Orders>
          <Peopleicon src={TechnologyIcon} />
          <Ordertxt>Texnologiyalar</Ordertxt>
        </Orders>
        </Link>
        <Link to='/manzil'>
        <Orders>
          <Peopleicon src={AdressIcon} />
          <Ordertxt>Manzil</Ordertxt>
        </Orders>
        </Link>
      </Container>
    </>
  )
}

export default NavBar