import styled from "styled-components";

export const Container = styled.div`
    width: 16.17%;
    height: 100vh;
    background: #01384D;
    position: absolute;
    top: 0;
    left: 0;
`
export const Brand = styled.div`
    width: 100%;
    height: 10.78%;
    border: 1px  solid black;
    position: relative;
`
export const Head = styled.div`
    width: 83.83%;
    height: 10.78%;
    position: absolute;
    left: 16.17%;
    background: #01384D;
`
export const Logo = styled.img`
    width: 30px;
    height: 30px;
    position: absolute;
    left: 15%;
    top: 25%;
`
export const Brandname = styled.h1`
    color: #fff;
    font-size: 22px;
    font-family: 'Sail';
    font-weight: 300;
    position: absolute;
    left: 30%;
    top: 25%;
`
export const Orders = styled.div`
    width: 100%;
    height: calc(100vh - 92.2%);
    position: relative;
    color: #fff;
    transition: 0.5s;
    cursor: pointer;
    &:hover{
        width: 115%;
        background: #EABF9F;
    }
`
export const Homeicon = styled.img`
    width: 17px;
    height: 17px;
    position: absolute;
    left: 15%;
    top: 30%;
`
export const Ordertxt = styled.h1`
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    position: absolute;
    left: 30%;
    top: 27%;
`
export const Peopleicon = styled.img`
    position: absolute;
    left: 15%;
    top: 30%;
`
export const Avatar = styled.img`
    width: 40px;
    height: 40px;
    position: absolute;
    left: 80%;
    top: 25%;
`
export const Profileimg = styled.img`
    width: 20px;
    height: 25px;
    position: absolute;
    left: 80.8%;
    top: 33%;
`
export const Username = styled.h1`
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    position: absolute;
    left: 84.5%;
    top: 35%;
`