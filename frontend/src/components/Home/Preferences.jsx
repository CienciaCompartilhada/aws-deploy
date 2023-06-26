import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../../providers/auth";
import Loading from "../Loading";
import { useNavigate } from "react-router-dom";

export default function Preferences() {
    const [expertises, setExpertises] = React.useState({
        expertise1: '',
        expertise2: '',
        expertise3: '',
        expertise4: '',
        expertise5: '',
    })
    const [dbexpertises, setDbExpertises] = React.useState([]);
    const navigate = useNavigate()
    const [submited, setSubmited] = React.useState(false)
    const { token } = React.useContext(AuthContext);
    const localToken = localStorage.getItem("tokenCienciaCompartilhada");

    console.log(expertises)
    useEffect(()=>{
        const config = {
            headers: {
                "Authorization": `Bearer ${token ? token : localToken}`
            }
        }
        const getDbExpertises = axios.get(`${process.env.REACT_APP_API_URL}expertises/all`, config)
        getDbExpertises.then(ans => {
            setDbExpertises(ans.data)
        })
    }, []);

    function handleExpertises(e) {
        setExpertises({ ...expertises, [e.target.name]: e.target.value })
    }
    function failedUpdate(e){
        alert(e.response.data.details);
        setSubmited(false)
    }
    function hasDuplicates(numbers) {
        const values = Object.values(numbers).filter(value => value !== "");
        const valueSet = new Set(values);
        return valueSet.size !== values.length;
    }
    function doUpdate(e) {
        setSubmited(true)
        e.preventDefault();
        const body = {expertises:[
            expertises.expertise1,
            expertises.expertise2,
            expertises.expertise3,
            expertises.expertise4,
            expertises.expertise5,
        ]}
        if(hasDuplicates(expertises)){
            alert("Não é possivel inserir interesses repetidos")
            setSubmited(false);
        }else{
            const config = {
                headers: {
                    "Authorization": `Bearer ${token ? token : localToken}`
                }
            }
            const updatePreferencesPost = axios.post(`${process.env.REACT_APP_API_URL}expertises/`, body, config)
            updatePreferencesPost.then(() => {
                alert("ATUALIZADO COM SUCESSO")
                setSubmited(false)
            })
        }
    }
    return (
        <PreferencesDiv>
            <form onSubmit={doUpdate}>
                <select
                    name="expertise1"
                    onChange={handleExpertises}
                    value={expertises.expertise1}
                >
                    <option value="">Selecione uma Especialidade</option>
                    {dbexpertises.map((university) => (
                    <option key={university.id} value={university.id}>
                        {university.name}
                    </option>
                    ))}
                </select>
                <select
                    name="expertise2"
                    onChange={handleExpertises}
                    value={expertises.expertise2}
                >
                    <option value="">Selecione uma Especialidade</option>
                    {dbexpertises.map((university) => (
                    <option key={university.id} value={university.id}>
                        {university.name}
                    </option>
                    ))}
                </select>
                <select
                    name="expertise3"
                    onChange={handleExpertises}
                    value={expertises.expertise3}
                >
                    <option value="">Selecione uma Especialidade</option>
                    {dbexpertises.map((university) => (
                    <option key={university.id} value={university.id}>
                        {university.name}
                    </option>
                    ))}
                </select>
                <select
                    name="expertise4"
                    onChange={handleExpertises}
                    value={expertises.expertise4}
                >
                    <option value="">Selecione uma Especialidade</option>
                    {dbexpertises.map((university) => (
                    <option key={university.id} value={university.id}>
                        {university.name}
                    </option>
                    ))}
                </select>
                <select
                    name="expertise5"
                    onChange={handleExpertises}
                    value={expertises.expertise5}
                >
                    <option value="">Selecione uma Especialidade</option>
                    {dbexpertises.map((university) => (
                    <option key={university.id} value={university.id}>
                        {university.name}
                    </option>
                    ))}
                </select>
                <button
                    disabled={submited}
                    type="submit"
                >{submited ? <Loading /> : "Atualizar"}</button>
            </form>
        </PreferencesDiv>
    )
}

const PreferencesDiv = styled.div`
    width: 57%;
    height: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
    background: linear-gradient(to bottom, #82b6fa, #8DD4E0);
    form{
        display:flex;
        flex-direction: column;
        margin-top:24px;
        select{
            height: 100%;
            max-height: 40px;
            width: 100%;
            border: none;
            border-radius: 5px;
            margin-bottom: 13px;
            padding: 12px 15px;
            background-color: #ffffff;
            color: #000000;
            &::placeholder {
                font-family: 'Raleway', sans-serif;
                font-size: 20px;
                font-weight: 400;
                color: #000000;
            }
        }
        button{
            cursor:pointer;
            height: 46px;
            width: 100%;
            border:none;
            border-radius: 5px;
            background-color:#263B57;
            color:#FFFFFF;
            font-family: 'Raleway',sans-serif;
            font-size: 20px;
            font-weight: 700;
        }
    }
`;