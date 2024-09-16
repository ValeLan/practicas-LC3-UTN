import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const Login = () => {
    const [username, setUsername] = useState("");

    const usernameHandler = (e) =>{
        const inputValue = e.target.value;
        if (/o|O/.test(inputValue)){ //Busque esa forma de encontrar si ingresa o/O
            alert("No debe contener 'o' minuscula ni mayuscula por favor.");
        }
        else{
            setUsername(inputValue)
        }
    }

    const buttonAlert = () =>{
        if(username == ""){
            alert("Ingrese un nombre de usuario por favor.");
        }
        else{
            alert(`¡Usuario ${username} registrado correctamente!`);
        }
        
    }
    return (
        <>
            <h1>INGRESE SU NOMBRE DE USUARIO:</h1>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control
                    value={username}
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={usernameHandler}
                />
            </InputGroup>
            <Button variant="primary" onClick={buttonAlert}>Registrarse</Button>{' '}
            <h2>Su nombre de usuario es: {username}</h2>
        </>
    )
}

export default Login