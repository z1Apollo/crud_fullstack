import styled from "@emotion/styled";
import { breakpoints } from "../../Styles/breakpoints";

export const BtnEdit = styled.button`
    background-color: #fbcd79;
    color: white;
    border-radius: 5px;
    padding: 3px 10px 3px 10px;
    cursor: pointer;
    margin-top: 5px;
    transition: 0.3s ease-in;

    &:hover {
        background-color: #a18400;
    } 
`

export const BtnRemove = styled.button`
    background-color: #f27171;
    color: white;
    border-radius: 5px;
    padding: 3px 10px 3px 10px;
    cursor: pointer;
    margin-top: 5px;
    transition: 0.3s ease-in;

    &:hover {
        background-color: #cc0303;
    }
`

export const BtnSalvar = styled.button`
    background-color: #387619ac;
    color: white;
    border-radius: 5px;
    padding: 7px 10px;
    cursor: pointer;
    margin-top: 5px;
    transition: 0.3s ease-in;

    &:hover {
        background-color: #028119;
    } 
`

export const BtnCancelar = styled.button`
    background-color: #f27171;
    color: white;
    border-radius: 5px;
    padding: 7px 10px;
    cursor: pointer;
    margin-top: 5px;
    transition: 0.3s ease-in;

    &:hover {
        background-color: #cc0303;
    }
`

export const Li = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`

export const EditMobile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    div {
        display: flex;
        gap: 5px;
    }
        
    @media (max-width: ${breakpoints.mobile}) {
        flex-direction: column;
    }
`