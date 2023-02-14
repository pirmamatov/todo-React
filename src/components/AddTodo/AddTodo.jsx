import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import Col from 'react-bootstrap/Col';
import { Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import s from './AddTodo.module.css'



function AddTodo ({todo, setTodo}) {

    const [ value, setValue ] = useState("")

    function saveTodo () {
        setTodo(
            [...todo, {
                id: uuidv4(),
                title: value,
                status: true
            }]
        )
        setValue("")
    }

    return(
        <Row>
            <Col className={s.AddTodoForm}>
            <Form.Control type="text" placeholder="craete new todo.." value={value} onChange={ (e) =>  setValue(e.target.value)} />
            <Button className={s.btn} onClick={saveTodo}>
                save
            </Button></Col>
           
        </Row>
    )
}


export default AddTodo