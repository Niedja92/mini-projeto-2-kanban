import styled from "styled-components";

export const ContainerLogin = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const FormLogin = styled.form`
    font-family: 'Poppins', sans-serif;
    background-color: #3A72F8;
    border-radius: 20px;
    flex-direction: column;
    align-items: center;
    color: #FFF;
    display: flex;
    width: 25%;
    height: 40rem;

    h1 {
        margin-top: 2rem;
    }

    label {
        font-weight: 300;
    }

    input {
        width: 18rem;
        background: #FFF;
        border-radius: 25px;
        padding: 0.7rem;
        border: none;
        outline: 0;
        margin-top: 5px;
    }
`
export const LabelInput = styled.div`
    margin-top: 1.5rem;
`
export const ButtonForm = styled.button`
    margin-top: 4rem;
    border-radius: 20px;
    background: #0A2668;
    color: #FFF;
    width: 9rem;
    padding: 0.7rem;
    font-weight: 700;
    border: none;
    cursor: pointer;
`
export const LinkRegister = styled.nav`
    color: #FFF;
    font-weight: 300;
    margin-top: 2rem;
`

export const Container = styled.div`
    font-family: 'Poppins', sans-serif;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
`
export const Column = styled.div`
    border: 1px solid #EAEAEA;
    padding: 0.5rem;
    min-height: 100vh;
    background-color: #EAEAEA;
    border-radius: 7px;

    h1 {
        color: #3A72F8;
    }
`
export const Box = styled.div`
    border: 1px solid #ddd;
    background-color: #fff;
    padding: 0.5rem;
    margin-bottom: 1rem;
`
export const NewTask = styled.div`
    border-radius: 10px;
    background: #FFF;
    box-shadow: 2px 4px 3px 0px rgba(0, 0, 0, 0.28);
`
