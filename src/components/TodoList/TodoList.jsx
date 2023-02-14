import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import s from  './TodoList.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSave } from "@fortawesome/free-solid-svg-icons";
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' 
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { FaLockOpen } from 'react-icons/fa';
import { HiLockClosed } from 'react-icons/hi';
import { FaSave } from 'react-icons/fa';


function TodoList ({ todo , setTodo}) {


    const [edit, setEdit] = useState(null)
    const [value,setValue] = useState("")


  
function deleteTodo(id) {
   let newTodo = [...todo].filter(item => item.id!=id)
   setTodo(newTodo)
}

function statusTodo(id) {
    let newTodo = [...todo].filter(item => {
        if(item.id === id){
            item.status = !item.status 
        }
        return item
    })
    setTodo(newTodo)
    console.log(todo);
}


function editTodo (id,title ) {
    setEdit(id)
    setValue(title)
}

function saveTodo(id) {
    let newTodo = [...todo].map(item =>{

        if(item.id === id){
            item.title = value
        }
        return item

    })
    setTodo(newTodo)
    setEdit(null)

}

    return (
        <div>{
        todo.map( item => (
           <div key={item.id} className={s.listItems}>
            {
                edit === item.id ?
             
                <div>
                    <input value={value} onChange ={(e) => setValue(e.target.value) }/>
                  
                </div>
                :
                <div className={!item.status ? s.close : ''}>{item.title}</div>
            }

            {
                edit === item.id ?
                <div>
                  <Button onClick={() => saveTodo(item.id)}> <FaSave/> </Button>
                </div> :
                <div>
             <Button onClick={()=>deleteTodo(item.id)}><MdDelete/></Button>
             <Button className={s.btn} onClick={()=>editTodo(item.id, item.title)}><FaEdit /></Button>
             <Button className={s.btn} onClick={()=>statusTodo(item.id)}>
                {
                         item.status  ?  <HiLockClosed/> :  <FaLockOpen/>
                }
             </Button>
                 
                </div>
            }
            
           
           </div>
        ))
        }</div>
    )
}


export default TodoList