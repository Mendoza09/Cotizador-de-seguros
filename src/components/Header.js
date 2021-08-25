import React from 'react';  
import styled from '@emotion/styled'; //Importa el paquete de emotion styled components
import PropTypes from 'prop-types';
//Componente de estilo al header 
const ContenedorHeader = styled.header  `
    background-color: #26C6DA;
    padding:10px;
    font-weight: bold;
    color:#FFFFFF;


`;
//Componente de estilo al texto
const TextoHeader = styled.h1 `
    font-size:2rem;
    margin:0;
    font-family: 'Slabo 27px',serif;
    text-align:center;

`;
const Header = ({titulo}) => {
    return ( 
        <ContenedorHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHeader>
     );
}

Header.propTypes ={
    titulo: PropTypes.string.isRequired
}
 
export default Header ;