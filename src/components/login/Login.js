import React from 'react';
import './index.css';
import { Container, row, col, Form } from 'react-bootstrap'

const Login = () => {

    return (
        <div className='container'>
            <form>
                <p>Bem vindo(a)</p>
                <Form.Group controlId='formGroupEmail'>
                    <Form.Label>E-mail</Form.Label><br />
                    <Form.Control type='Email' placeholder='Insira seu e-mail' />
                </Form.Group>
                <Form.Group controlId='formGroupPassword'>
                    <Form.Label>Password</Form.Label><br />
                    <Form.Control type='password' placeholder='Insira sua senha' />
                </Form.Group>
                <a href='#' className='button'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    ENTRAR
                </a><br />
                <a href='#' className='forgot'>Esqueceu sua Senha?</a>
            </form>
            <div className='drops'>
                <div className='drop drop-1'></div>
                <div className='drop drop-2'></div>
                <div className='drop drop-3'></div>
                <div className='drop drop-4'></div>
                <div className='drop drop-5'></div>
            </div>
        </div>
    )

}


export default Login;