import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../../providers/auth";

export default function StudentFeed(){
    const [students, setStudents] = useState([]);
    const { token } = React.useContext(AuthContext);
    const localToken = localStorage.getItem("tokenCienciaCompartilhada");

    useEffect(()=>{
        
        const config = {
            headers: {
                "Authorization": `Bearer ${token ? token : localToken}`
            }
        }
        const getStudents = axios.get(`${process.env.REACT_APP_API_URL}users/students`, config)
        getStudents.then(ans => {
            setStudents(ans.data)
        })
    }, []);
    return(
        <Feed>
            {students.length === 0 ? <p>Não existem estudantes cadastrados</p> : students.map(i =>
                <Student>
                    <StudentInfo>
                        <h1>{i.name}</h1>
                        <h2>Universidade: {i.university}</h2>
                        <h2>Especialidade: {i.expertises.map(j => j.name).join(", ")}</h2>
                    </StudentInfo>
                </Student>
            )}
        </Feed>
    );
}

const Feed = styled.div`
    width: 57%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
`;

const Student = styled.div`
    width: 80%;
    background: linear-gradient(to bottom, #82b6fa, #8DD4E0);
    border-radius: 10px;
    height: 100%;
    min-height: 140px;
    max-height: 150px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    padding: 10px;
    img {
        height: 100%;
        max-width: 100%;
        max-height: 200px;
        border-radius: 15px;
    }
`;


const StudentInfo = styled.div`
    width:100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
        font-weight: 600;
        font-size: 25px;
    }
    h2 {
        margin-top: 10px;
        font-weight: 500;
    }
`;
