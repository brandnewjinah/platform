import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        width: 100%;
        height: 100%;
    }
    body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: white;
        font-size: 1.05rem;
        line-height: 1.875rem;
        font-weight: 400;
    }
    ul {
        list-style-type: none;
    }

    a {
        text-decoration: none;
        cursor: pointer;

        &:visited {
            text-decoration: none;  
        }
    }

    button {
        cursor: pointer;

        &:focus {
    outline: 3px solid #c1e0fe;
    outline: 3px solid rgba(131, 192, 253, 0.5);
    outline-offset: 1px;
  }
    }
    
    h1 {
        font-size: 1.375rem
    }

    @media (min-width: 640px) {
        h1 {
            font-size: 3.5rem;
        }
  }

`;

export default GlobalStyle;
