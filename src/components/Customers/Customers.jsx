import React from 'react'
import './style'
import NavBar from '../Navbar/NavBar'
import { Blueline, Connect, Date, Delete, DeleteBack, Firstline, Id1, Id2, Input, Main, Name, Number, Number1, Search, Span } from './style'
import CustomizedSwitches from '../Switch'
import DeleteIcon from '../../image/delete.png'
import DeleteBackg from '../../image/Deletebg.png'

import SearchIcon from './../../image/search.png'


const Customers = () => {
    return (
    <>
    <NavBar />
    <Main>
        <Blueline>
            <Id2>ID</Id2>
            <Name>Sana</Name>
            <Number>Telefon Raqami</Number>
            <Connect>Qayta Aloqa</Connect>
            
        </Blueline>
        <Firstline>
            <Id1>6</Id1>
            <Date>12:13<Span>-12.05.2021</Span></Date>
            <Number1>+998 90 123 45 67</Number1>
            <CustomizedSwitches></CustomizedSwitches>
            <Delete src={DeleteIcon} />
            <DeleteBack src={DeleteBackg} />
        </Firstline>
        <Firstline>
        <Id1>6</Id1>
            <Date>12:13<Span>-12.05.2021</Span></Date>
            <Number1>+998 90 123 45 67</Number1>
            <CustomizedSwitches></CustomizedSwitches>
            <Delete src={DeleteIcon} />
            <DeleteBack src={DeleteBackg} />
        </Firstline>
        <Firstline>
        <Id1>6</Id1>
            <Date>12:13<Span>-12.05.2021</Span></Date>
            <Number1>+998 90 123 45 67</Number1>
            <CustomizedSwitches></CustomizedSwitches>
            <Delete src={DeleteIcon} />
            <DeleteBack src={DeleteBackg} />
        </Firstline>
        <Firstline>
        <Id1>6</Id1>
            <Date>12:13<Span>-12.05.2021</Span></Date>
            <Number1>+998 90 123 45 67</Number1>
            <CustomizedSwitches></CustomizedSwitches>
            <Delete src={DeleteIcon} />
            <DeleteBack src={DeleteBackg} />
            <Input placeholder='User' />
            <Search src={SearchIcon} />
        </Firstline>
    </Main>
    </>
    )
}

export default Customers
