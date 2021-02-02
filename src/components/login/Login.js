import React, {useEffect} from 'react';
import { Form } from 'react-bootstrap'
import Swal from 'sweetalert2'
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Api from '../../Api';

import './index.css';

const Login = () => {

    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const [isRead, setIsread] = React.useState(false)


    useEffect(() => {
       
        setTimeout(() => {
            setIsread(true)
        },3000)

    }, [])

    const Login = () => {

        if (!email || !password) {
            erroAlert('Os campos de email e senha são obrigatórios!');
            return
        } else {

            Api.post('/login', { email: email, password: password }).then(res => {
                if (res.data) {
                    let data = res.data.original;
                    sessionStorage.setItem('name', data.user.name);
                    sessionStorage.setItem('avatar', data.user.avatar);
                    sessionStorage.setItem('email', data.user.email);
                    sessionStorage.setItem('sameinterest_token', data.access_token);
                }
            }).catch(error => {
                const status = error.response?.status;
                console.log(error)
                if (status == 401) {
                    erroAlert('Usuário inválido');
                } else if (status == 422) {
                    erroAlert('Dados inválidos, por favor verifique o email ou senha informado!')
                } else {
                    erroAlert('Ops, tivermos um erro, por favor tente novamente');
                }
            })

        }

    }

    const erroAlert = (message) => {
        Swal.fire({
            title: 'Ops!',
            text: message,
            icon: 'error',
            confirmButtonText: 'Ok'
        })
    }

    return (
        <>
            {

                !isRead ?

                    <div id="spiner-div">
                        <Loader
                            type="BallTriangle"
                            color="#00BFFF"
                            height={100}
                            width={100}
                        />
                    </div>

                    :
                    <div className='container'>
                        <form>
                            <p>Bem vindo(a)</p>
                            <Form.Group controlId='formGroupEmail'>
                                <Form.Label>E-mail</Form.Label><br />
                                <Form.Control
                                    type='Email'
                                    placeholder='Insira seu e-mail'
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId='formGroupPassword'>
                                <Form.Label>Password</Form.Label><br />
                                <Form.Control
                                    type='password'
                                    placeholder='Insira sua senha'
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                            <a href='#' className='button' onClick={() => Login()}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                 ENTRAR
                             </a><br />
                            <a href='#' classNmae='forgot forgot'>Esqueceu sua Senha?</a>
                        </form>
                        <div className='drops'>
                            <div className='drop drop-1'></div>
                            <div className='drop drop-2'></div>
                            <div className='drop drop-3'></div>
                            <div className='drop drop-4'></div>
                            <div className='drop drop-5'></div>
                        </div>
                    </div>

            }

        </>

    )

}


export default Login;