import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

html, body, #root {
    height: 100%;
}

body {
    font: 14px 'Poppins', sans-serif;
    background: #ecf1f8;
}

`;
