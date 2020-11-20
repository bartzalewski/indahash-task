import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }
  
  .container {
    width: 1600px;
  }

  .swiper-button-prev, .swiper-button-next {
    color: #fff;
  }

  @media (max-width: 1650px) {
    .container {
      width: 95%;
    }
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 48px !important;
    }

    h2 {
      font-size: 30px !important;
    }
  }
`;

export default GlobalStyle;
