import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
  }
`

const AppContainer = styled.div`
  a {
    text-decoration: none;
  }
  h1 {
    color: red;
  }
`

export default ({children}) => (
  <AppContainer>
    <GlobalStyle/>
    {children}
  </AppContainer>
)
