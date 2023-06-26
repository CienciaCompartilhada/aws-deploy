import React from 'react';
import styled from "styled-components";

export default function HomeOptions(props){
    return(
        <OptionsDiv>
            <OptionButton chosen={props.chosen==='professores'} onClick={() => props.setChosen('professores')}>
                professores
            </OptionButton>
            <OptionButton chosen={props.chosen==='alunos'} onClick={() => props.setChosen('alunos')}>
                alunos
            </OptionButton>
            <OptionButton chosen={props.chosen==='pesquisas'} onClick={() => props.setChosen('pesquisas')}>
                pesquisas
            </OptionButton>
            <OptionButton chosen={props.chosen==='Minhas Preferências'} onClick={() => props.setChosen('Minhas Preferências')}>
                Atualizar Preferências
            </OptionButton>
        </OptionsDiv>
    );
}

const OptionsDiv = styled.div`
    width: 70%;
    border-radius: 20px;
    height:50px;
    display:flex;
    align-items: center;
    justify-content: space-around;
`;

const OptionButton = styled.button`
    width: 100px;
    height: 100%;
    border-radius: 20px;
    background: ${props => (props.chosen ? '#509e88' : 'none')};
    border: none;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
    transition: box-shadow 0.3s ease-in-out, background 0.3s ease-in-out;

    &:hover {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        background: #509e88;
    }
`;