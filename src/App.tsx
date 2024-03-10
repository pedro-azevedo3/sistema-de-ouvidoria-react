import Title from "./components/Title"
import Button from "./components/Button"
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #000;
  }
`;

function App() {

  return (
    <div>
      <GlobalStyle/>
      <Title/>
      <Button/>
    </div>
  )
}

export default App
