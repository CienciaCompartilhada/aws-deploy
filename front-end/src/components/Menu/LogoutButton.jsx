import React from 'react';
import styled from "styled-components";
import { IoLogOutOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

function LogoutButton() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("tokenCienciaCompartilhada");
    navigate("/")
  };

  return (
    <CustomButton onClick={handleLogout} style={{ background: 'none', border: 'none', padding: 0 }}>
      <IoLogOutOutline size={34} color="#000000" />
    </CustomButton>
  );
}

export default LogoutButton;

const CustomButton = styled.button`
  cursor: pointer;
`;
