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
export const HeaderStyle = styled.header`
    font-family: 'Poppins', sans-serif;
    color: #fff;
    background-color: #3A72F8;
    display: flex;
    justify-content: space-between;
    padding: 10px 0px 0px 10px;
    height: 5rem;

    h3, p {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`

export const Container = styled.div`
    font-family: 'Poppins', sans-serif;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin: 3.5rem;
`
export const Column = styled.div`
    border: 1px solid #EAEAEA;
    padding: 0.5rem;
    min-height: 100vh;
    background-color: #EAEAEA;
    border-radius: 7px;

    h1 {
        color: #3A72F8;
        margin-left: 1rem;
    }
`
export const Box = styled.div`
    border-radius: 15px;
    background: #FFF;
    box-shadow: 2px 4px 3px 0px rgba(0, 0, 0, 0.28);
    padding: 0.5rem;
    margin-bottom: 1rem;
    height: 15rem;
`
export const NewTask = styled.div`
    border-radius: 15px;
    background: #FFF;
    box-shadow: 2px 4px 3px 0px rgba(0, 0, 0, 0.28);
    padding: 0.5rem;
    height: 15rem;

    input, textarea {
        border-radius: 20px;
        width: 90%;
        padding: 0.5rem;
        margin: 5px;
        font-size: 16px;
        color: #575757;
        border: 1px solid #575757;
        outline: none;
    }

    input {
        margin: 5px;
        font-size: 16px;
        color: #575757;
        font-weight: 700;
        border: 1px solid #575757;
        outline: none;
    }

    textarea {
        height: 6rem;   
        resize: none;
    }
`
