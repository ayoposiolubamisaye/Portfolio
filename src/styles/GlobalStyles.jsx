import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap');

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        font-family: 'Inter', sans-serif;
        background-color: #0a0a0a;
        color: #ffffff;
        line-height: 1.6;
        overflow-x: hidden;
        min-height: 100vh;
      }

      .app {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }

      main {
        flex: 1;
        width: 100%;
      }

      h1, h2, h3, h4, h5, h6 {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        line-height: 1.2;
        margin-bottom: 1rem;
      }

      a {
        color: #10b981;
        text-decoration: none;
        transition: color 0.3s ease-in-out;

        &:hover {
          color: #064e3b;
        }
      }

      button {
        cursor: pointer;
        border: none;
        background: none;
        font-family: inherit;
      }

      img {
        max-width: 100%;
        height: auto;
      }

      section {
        padding: 4rem 2rem;
        max-width: 1200px;
        margin: 0 auto;
        width: 100%;
      }

      @media (max-width: 768px) {
        section {
          padding: 3rem 1rem;
        }
      }
    `}
  />
);

export default GlobalStyles; 