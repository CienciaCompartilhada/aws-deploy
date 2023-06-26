import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import TitleText from "../components/TitleImage";
import LoginForms from "../components/LoginForms";
import { AuthContext } from "../providers/auth";

export default function Login() {
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
        <LoginDiv>
            <TitleText />
            <LoginForms />
            <StyledLink to="/teacher-student">
                <p>
                    Primeira vez? Cadastre-se!
                </p>
            </StyledLink>
        </LoginDiv>
    );
}

const LoginDiv = styled.div`
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