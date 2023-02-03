import React from 'react';
import { useForm } from "react-hook-form"
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`

const IlustrationContainer = styled.div`
    background: linear-gradient(90deg, #574AE8, #3EA1DB);
    padding: 50px;
    width: 50%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        color: #FFF;
        font-size: 5vw;
    }

    @media (max-width: 800px) {
        display: none;
    }
`

const FormContainer = styled.section`
    background-color: #FFF;

    width: 50%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 800px) {
        width: 100%;
    }
`

const Title = styled.div`
    width: 400px;
    padding: 0 20px;
    h1 {
        text-align: left;
    }
`

const Form = styled.form`
    font-size: 1.3rem;
    padding: 20px;

    width: 400px;

    border-radius: 10px;

    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    outline: 0;
    border:1px solid #E8E8E8;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 15px;
`

const Button = styled.button`
    background-color: #3EA1DB;
    color: #FFF;
    padding: 10px;

    width: 100%;

    border: 0;
    border-radius: 5px;

    &:hover {
        cursor: pointer;
        background: blueviolet;
    }
`


function Login({login, isloading, error }) {

    function test(event) {
        alert("submeteru")
    }

    const { register, handleSubmit, formState: { errors } } = useForm()

    return (
        <Container>
            <IlustrationContainer>
                <p>Compartilhe seu conhecimento com o Mundo!</p>
            </IlustrationContainer>
            <FormContainer>
                <Title>
                    <p>Seja bem vinda de volta Larissa!</p>
                    <h1>Faça Login na sua conta</h1>
                </Title>
                <Form onSubmit={handleSubmit(event => login(event))}>                    
                    <label htmlFor="email">Email</label>
                    <Input type="email" name="email" id="email" required placeholder='nome@email.com'
                    {...register('email', {required: true})}/>
                    <label htmlFor="password">Senha</label>
                    <Input type="password" name="password" id="password" required placeholder='Senha'
                    {...register('password', {required: true})}/>
                    <Button type="submit" >{isloading ? 'Carregando' : 'Entrar'}</Button>
                    <p>{error}</p>
                </Form>
            </FormContainer>
        </Container>
    );
}

export default Login;