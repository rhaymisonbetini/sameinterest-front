import React from 'react';
import './index.css';
import { Container, row, col, Form } from 'react-bootstrap'

//pictures
import jogador from '../../assets/jogador.jpg'

const Register = () => {
    return (
        <div className='container'>
            <form>
                <div className='perfil'>
                    <div className='imagem-perfil'>
                        <img src={jogador}></img>
                    </div>
                </div>
                <p>Junte-se aos Jogadores</p>
                <Form.Group controlId='formGroupName'>
                    <Form.Control type='name' placeholder='Insira seu Nome' />
                </Form.Group>
                <Form.Group controlId='formGroupLastName'>
                    <Form.Control type='name' placeholder='Insira seu Sobrenome' />
                </Form.Group>
                <Form.Group controlId='formGroupEmail'>
                    <Form.Control type='name' placeholder='Insira seu Email' />
                </Form.Group>
                <Form.Group controlId='formGroupPassword'>
                    <Form.Control type='password' placeholder='Insira sua senha' />
                </Form.Group>
                <Form.Group controlId='formGroupPassword'>
                    <Form.Control type='password' placeholder='Confirme sua Senha' />
                </Form.Group>
                <a href='#' className='button'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    CADASTRAR
                </a><br />
                <h5>Já é um Jogador?&ensp;<a href='../login/Login.js' className='login'>Faça o Login</a></h5>
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


export default Register;