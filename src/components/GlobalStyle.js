import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
div{
    margin-left:20px;
}
h2{
    margin-left:20px;
}
ul,li{
    padding-left:0;
}
button{
    cursor: pointer;
    border-radius: 5px;
    outline: none;
     font-size: 18px;
     border: 1px solid #e6dfdf;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
`;
