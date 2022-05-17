import React from 'react'
import NavBar from '../Navbar/NavBar'
import { Blueline, Connect, Firstline, Id, Id1, Id2, Input, Main, Name, Number, Product, Quantity, Search } from './style'
import CustomizedSwitches from '../SwitchforBuyurtma'
import SearchIcon from './../../image/search.png'

const Buyurtma = () => {
    return (
        <>
        <NavBar />
        <Main>
            <Blueline>
                <Id2>ID</Id2>
                <Name>Ismi</Name>
                <Number>Telefon Raqami</Number>
                <Product>Mahsulot nomlari</Product>
                <Quantity>Miqdor</Quantity>
                <Connect>Qayta aloqa</Connect>
            </Blueline>
            <Firstline>
                <Id1>6</Id1>
                <Id1>Jenny Wilson</Id1>
                <Id1>+998 90 123 45 67</Id1>
                <Id1>Ortopedik Eko matras</Id1>
                <Id1>4</Id1>
                <CustomizedSwitches />
            </Firstline>
            <Firstline>
                <Id1>7</Id1>    
                <Id1>Jenny Wilson</Id1>
                <Id1>+998 90 123 45 67</Id1>
                <Id1>Ortopedik Eko matras</Id1>
                <Id1>4</Id1>
                <CustomizedSwitches />
            </Firstline>
            <Firstline>
                <Id1>3</Id1>
                <Id1>Jenny Wilson</Id1>
                <Id1>+998 90 123 45 67</Id1>
                <Id1>Ortopedik Eko matras</Id1>
                <Id1>4</Id1>
                <CustomizedSwitches />
            </Firstline>
            <Firstline>
                <Id1>3</Id1>
                <Id1>Jenny Wilson</Id1>
                <Id1>+998 90 123 45 67</Id1>
                <Id1>Ortopedik Eko matras</Id1>
                <Id1>4</Id1>
                <CustomizedSwitches />
            </Firstline>
            <Input placeholder='User' />
            <Search src={SearchIcon} />
        </Main>
        </>
    )
}

export default Buyurtma