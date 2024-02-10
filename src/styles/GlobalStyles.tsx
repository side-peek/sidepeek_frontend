import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
*{
  box-sizing: border-box;
}

html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
a, dl, dt, dd, ol, ul, li, form, label, table,button{
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}

html{
  width: 100%;
  height: 100%;
}

body{
  width: 100%;
  height: 100%;
  line-height: 1;
}

#root {
  width: 100%;
  height: 100%;
}


ol, ul{
  list-style: none;
}

button {
  background: transparent;
  cursor: pointer;
}

input, textarea {
  border : none;
  outline: none;
}

a{
  text-decoration: none;
  color: inherit;
}
`

export default GlobalStyles
