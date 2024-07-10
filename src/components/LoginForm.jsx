/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect, useState } from 'react';
import { Form } from '../styles/Signup.styles.js';
import { LoginFormContainer, Block_23, Block_23_container, Block_23_grids, HomeLink, Form23, Form_input, Submit_Button } from './../styles/LoginForm.styles';
import { Link, useNavigate  } from 'react-router-dom';
import Logo from './../assets/images/logo_v2.jpg'
import { Login } from '../Apis/Member.api.js';
import Home from '../Pages/Home/Home.jsx';
import { isTokenExpired, getToken } from '../services/token.service.js';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',        
      });    
    const navigate = useNavigate();

    useEffect(() => { 
        var token = getToken();
        if (token && !isTokenExpired(token)) {
            navigate('/Member/Home');
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
        ...prevState,
        [name]: value
        }));
    };

    const submit = (e) => {
        e.preventDefault();                
        console.log('*** form being submitted ***');
        Login(formData.email, formData.password)
            .then((response) => {
                console.log('*** login response ***', response);
                //if successful we move to login page
                navigate('/Member/Home');
            });
      };

    return (
      <LoginFormContainer>
        <Block_23>
            <Block_23_container>                
                    <HomeLink href='/'>
                        <img src={Logo} width="auto" height="75px" />
                    </HomeLink>                    
                    <Block_23_grids>
                        <Form23>
                            <h1>Welcome Back!</h1>
                            <Form onSubmit={submit}>
                                <Form_input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required />
                                <Form_input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required />                            
                                <Submit_Button type='Submit'>Login</Submit_Button>
                            </Form>
                        </Form23>                        
                    </Block_23_grids>
            </Block_23_container>
        </Block_23>       
      </LoginFormContainer>
    );
  };
  
  export default LoginForm;