import React from "react";

import s from "./Header.module.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import {Row, Col} from 'react-bootstrap '

function Header (){
    return(
        <Container>
        <Row>
          <Col>   <div className = {s.root}>Todo List</div></Col>
        </Row>
      </Container>
        
        
    )
}

export default Header