import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import TitleText from "../components/TitleImage";
import RegisterForms from "../components/RegisterForms";
import { AuthContext } from "../providers/auth";

export default function TeacherStudent() {
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
        <TeacherStudentDiv>
            <TitleText />
            <TeacherStudentButton onClick={() => navigate('/sign-up/true')}>Professor</TeacherStudentButton>
            <TeacherStudentButton onClick={() => navigate('/sign-up/false')}>Aluno</TeacherStudentButton>
            <StyledLink to="/">
                <p>
                    Já tem uma conta? Entre agora!
                </p>
            </StyledLink>
        </TeacherStudentDiv>
    );
}

const TeacherStudentDiv = styled.div`
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

const TeacherStudentButton = styled.button`
    cursor:pointer;
    height: 46px;
    width: 100%;
    max-width: 300px;
    margin:20px 0px 20px 0px;
    border:none;
    border-radius: 5px;
    background-color:#263B57;
    color:#FFFFFF;
    font-family: 'Raleway',sans-serif;
    font-size: 20px;
    font-weight: 700;
`;

const StyledLink = styled(Link)`
    color:#ffffff;
    width:100%;
    margin-top:16px;
    text-decoration: none;
    font-family: 'Raleway',sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
`;