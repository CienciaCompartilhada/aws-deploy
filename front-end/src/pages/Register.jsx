import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import TitleText from "../components/TitleImage";
import RegisterForms from "../components/RegisterForms";
import { AuthContext } from "../providers/auth";

export default function Register() {
    const navigate = useNavigate();
    const { setToken } = React.useContext(AuthContext);
    useEffect(() => {
        const localToken = localStorage.getItem("tokenCienciaCompartilhada");
        if (localToken) {
            setToken(localToken);
            navigate("/home");
        }
    }, []);
    return (
        <RegisterDiv>
            <TitleText />
            <RegisterForms />
            <StyledLink to="/">
                <p>
                    Já tem uma conta? Entre agora!
                </p>
            </StyledLink>
        </RegisterDiv>
    );
}

const RegisterDiv = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
    height:100%;
    min-height:100vh;
    padding:0px 25px 0px 25px;
    background-color:#63BBA2;
`;

const StyledLink = styled(Link)`
    color:#ffffff;
    width:100%;
    margin-top:36px;
    text-decoration: none;
    font-family: 'Raleway',sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
`;