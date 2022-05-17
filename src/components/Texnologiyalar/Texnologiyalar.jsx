import React from 'react'
import NavBar from '../Navbar/NavBar'
import './style'
import { Blueline, Container, Delete, DeleteBack, Edit, EditBack, Firstline, Model, Model2, Model3, Text, Text1, Text2 } from './style'

import DeleteIcon from '../../image/delete.png'
import EditIcon from '../../image/Edit.png'
import DeleteBg from '../../image/Deletebg.png'
import EditBg from '../../image/EditBg.png'

const Texnologiyalar = () => {
    return (
        <>
        <NavBar />,
        <Container>
            <Blueline>
                <Text>Nomlari</Text>
                <Text1>Matn</Text1>
                <Text2>Video</Text2>
            </Blueline>
            <Firstline>
                <Model>Menory foam</Model>
                <Model2>Enim urna...</Model2>
                <Model3>youtube.com...</Model3>
                <Delete src={DeleteIcon} />
                <DeleteBack src={DeleteBg} />
                <Edit src={EditIcon} />
                <EditBack src={EditBg} />
            </Firstline>


            <Firstline>
            <Model>Menory foam</Model>
            <Model2>Enim urna...</Model2>
            <Model3>youtube.com...</Model3>
            <Delete src={DeleteIcon} />
                <DeleteBack src={DeleteBg} />
                <Edit src={EditIcon} />
                <EditBack src={EditBg} />
            </Firstline>


            <Firstline>
            <Model>Menory foam</Model>
            <Model2>Enim urna...</Model2>
            <Model3>youtube.com...</Model3>
            <Delete src={DeleteIcon} />
                <DeleteBack src={DeleteBg} />
                <Edit src={EditIcon} />
                <EditBack src={EditBg} />
            </Firstline>

            <Firstline>
            <Model>Menory foam</Model>
            <Model2>Enim urna...</Model2>
            <Model3>youtube.com...</Model3>
            <Delete src={DeleteIcon} />
                <DeleteBack src={DeleteBg} />
                <Edit src={EditIcon} />
                <EditBack src={EditBg} />
            </Firstline>
        </Container>
        </>
    )
}

export default Texnologiyalar
