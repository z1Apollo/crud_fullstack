import styled from "@emotion/styled";
import { breakpoints } from "../../Styles/breakpoints";

export const InputsForm = styled.input`
    border: 2px solid #5050a5ca;
    border-radius: 5px;
    padding: 5px 10px 5px 10px;
`

export const FormCD = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    @media (max-width: ${breakpoints.mobile}) {
        flex-direction: column;
    }
`

export const Btn = styled.button`
    border-radius: 5px;
    background-color: #5050a5d4;
    color: white;
    font-weight: 500;
    padding: 7px 15px;
    transition: 0.3s ease-in;
    cursor: pointer;

    &:hover {
        background-color: #434390;
        
    }

    @media (max-width: ${breakpoints.mobile}){
        padding: 7px 92px;
    }
`