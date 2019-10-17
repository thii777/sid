import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: Montserrat, sans-serif;
  }

  body, input, button {
      font-size: 14px Roboto, sans-serif;
  }

  #root {
      margin: 0 auto;
      padding: 0;
      margin: 0;
  }

  button {
      cursor: pointer;
  }
`;
