import styled from "styled-components";
import LogoutButton from "./LogoutButton";
import HomeOptions from "./MenuOptions";
import { useNavigate } from "react-router-dom";
export default function Menu(props){
    const navigate = useNavigate();
    return(
    <MenuDiv>
        <MenuLogoContainer onClick={() => navigate("/home")}>
            <MenuLogo src="https://github.com/CienciaCompartilhada/assets/blob/main/logo.png?raw=true"/>
        </MenuLogoContainer>
        <HomeOptions setChosen={props.setChosen} chosen={props.chosen}/>
        <LogoutButton/>
    </MenuDiv>
    );
}

//#8DD4E0;

const MenuDiv = styled.div`
    width:100vw;
    height: 70px;
    background-color: #63BBA2;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const MenuLogoContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuLogo = styled.img`
    height: 100%;
    cursor: pointer;
    border-radius: 50%;
    object-fit: cover;
    transition: box-shadow 0.3s ease-in-out;

    &:hover {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
`;