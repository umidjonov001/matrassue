import React from 'react'
import NavBar from '../Navbar/NavBar'
import './style'
import { Blueline, Container, Delete, DeleteBack, Edit, EditBack, Firstline, Model, Text } from './style'

import DeleteIcon from '../../image/delete.png'
import EditIcon from '../../image/Edit.png'
import DeleteBg from '../../image/Deletebg.png'
import EditBg from '../../image/EditBg.png'


const Toifalar = () => {
    return (
        <>
        <NavBar />,
        <Container>
            <Blueline>
                <Text>Toifalar</Text>
                
            </Blueline>
                <Firstline>
                <Model>Model C</Model>
                <Delete src={DeleteIcon}></Delete>
                <DeleteBack src={DeleteBg}></DeleteBack>
                <Edit src={EditIcon}></Edit>
                <EditBack src={EditBg}></EditBack>
                </Firstline>
                <Firstline>
                <Model>Model C</Model>
                <Delete src={DeleteIcon}></Delete>
                <DeleteBack src={DeleteBg}></DeleteBack>
                <Edit src={EditIcon}></Edit>
                <EditBack src={EditBg}></EditBack>
                </Firstline>
                <Firstline>
                <Model>Model C</Model>
                <Delete src={DeleteIcon}></Delete>
                <DeleteBack src={DeleteBg}></DeleteBack>
                <Edit src={EditIcon}></Edit>
                <EditBack src={EditBg}></EditBack>
                </Firstline>
                <Firstline>
                <Model>Model C</Model>
                <Delete src={DeleteIcon}></Delete>
                <DeleteBack src={DeleteBg}></DeleteBack>
                <Edit src={EditIcon}></Edit>
                <EditBack src={EditBg}></EditBack>
                </Firstline>
                
        </Container>
        </>
    )
}

export default Toifalar