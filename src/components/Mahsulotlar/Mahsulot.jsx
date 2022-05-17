import React from 'react'
import NavBar from '../Navbar/NavBar'
import './style'
import { Blueline, Container, Delete, DeleteBack, Edit, EditBack, Firstline, Input, Model, Model1, Model2, Model3, Model4, Model5, Search, Text, Text1, Text2, Text3, Text4, Text5, Text6 } from './style'

import SearchIcon from './../../image/search.png'

import DeleteIcon from '../../image/delete.png'
import EditIcon from '../../image/Edit.png'
import DeleteBg from '../../image/Deletebg.png'
import EditBg from '../../image/EditBg.png'

import CustomizedSwitches from '../SwitchforMahsulot'

const Mahsulot = () => {
    return (
        <>
        <NavBar />
        <Container>
            <Blueline>
            <Text1>Mahsulot nomlari</Text1>
            <Text2>Toifalar</Text2>
            <Text3>Narxi</Text3>
            <Text4>Yuklama</Text4>
            <Text5>Razmeri</Text5>
            <Text6>Status</Text6>
            </Blueline>

            {/* 1 */}
            <Firstline>
            <Model>Lux Soft Memory</Model>
            <Model2>Model C</Model2>
            <Model3>1 600 000 so'm</Model3>
            <Model4>150 kg</Model4>
            <Model5>200 x 134 x 40</Model5>
            <CustomizedSwitches></CustomizedSwitches>

            <Delete src={DeleteIcon} />
            <DeleteBack src={DeleteBg} />
            <Edit src={EditIcon} />
            <EditBack src={EditBg} />
            </Firstline>

            {/* 2 */}
            <Firstline>
            <Model>Lux Soft Memory</Model>
            <Model2>Model C</Model2>
            <Model3>1 600 000 so'm</Model3>
            <Model4>150 kg</Model4>
            <Model5>200 x 134 x 40</Model5>
            <CustomizedSwitches></CustomizedSwitches>

            <Delete src={DeleteIcon} />
            <DeleteBack src={DeleteBg} />
            <Edit src={EditIcon} />
            <EditBack src={EditBg} />
            </Firstline>

            {/* 3 */}
            <Firstline>
            <Model>Lux Soft Memory</Model>
            <Model2>Model C</Model2>
            <Model3>1 600 000 so'm</Model3>
            <Model4>150 kg</Model4>
            <Model5>200 x 134 x 40</Model5>
            <CustomizedSwitches></CustomizedSwitches>

            <Delete src={DeleteIcon} />
            <DeleteBack src={DeleteBg} />
            <Edit src={EditIcon} />
            <EditBack src={EditBg} />
            </Firstline>

            {/* 4 */}
            <Firstline>
            <Model>Lux Soft Memory</Model>
            <Model2>Model C</Model2>
            <Model3>1 600 000 so'm</Model3>
            <Model4>150 kg</Model4>
            <Model5>200 x 134 x 40</Model5>
            <CustomizedSwitches></CustomizedSwitches>

            <Delete src={DeleteIcon} />
            <DeleteBack src={DeleteBg} />
            <Edit src={EditIcon} />
            <EditBack src={EditBg} />
            </Firstline>
            <Input placeholder='Mahsulotlar' />
            <Search src={SearchIcon} />
        </Container>
        </>
    )
}

export default Mahsulot