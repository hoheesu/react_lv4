import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
 ${reset}
 :root {
    background-color: #80bdfe;

    /* color */
    --color-main: #80bdfe;
    --color-white: #fff;
    --color-light-gray: #ddd;
    --color-black: #444;
    --color-green: #3cde75;
    --color-purple: #9b62f0;
    --color-red: #de1d3a;
 }
 *{
   box-sizing: border-box;
   transition: all 0.3s;
 }
  a{
   text-decoration: none; 
   outline: none;
}
 h2{
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--color-white);
 }
 button{
   background-color: var(--color-white);
   cursor: pointer;
 }
`;

export default GlobalStyle;
