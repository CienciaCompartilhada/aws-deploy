import styled from 'styled-components';

export default function TitleImage() {
    return (
        <Image>
            <img src="https://github.com/CienciaCompartilhada/assets/blob/main/logo.png?raw=true"/>
        </Image>
    );
}

const Image = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:70px;
    font-family:'Saira Stencil One',sans-serif;
    color:#ffffff;
    font-size: 32px;
    font-weight: 400;
`;