import React from 'react'
import NavBar from '../Navbar/NavBar'
import './style'
import { Blueline, Button, Container, Delete, DeleteBack, Edit, EditBack, Firstline, Location, Model, Model2, Text, Text1, Text2 } from './style'

import LocationIcon from '../../image/location.png'
import DeleteIcon from '../../image/delete.png'
import EditIcon from '../../image/Edit.png'
import DeleteBg from '../../image/Deletebg.png'
import EditBg from '../../image/EditBg.png'

const Manzil = () => {
    return (
    <>
    <NavBar />,
    <Container>
        <Blueline>
            <Text>Manzil</Text>
            <Text1>Matn</Text1>
            <Text2>Location</Text2>
        </Blueline>
        <Firstline>
            <Model>Toshkent, Parken...</Model>
            <Model2>Mo'ljal: Qoraqamish...</Model2>
            <Location src={LocationIcon} />
            <Delete src={DeleteIcon} />
            <DeleteBack src={DeleteBg} />
            <Edit src={EditIcon} />
            <EditBack src={EditBg} />
        </Firstline>
    </Container>
        <Button>Qo'shish</Button>
    </>
    )
}

export default Manzil