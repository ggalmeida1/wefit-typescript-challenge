import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root {
  --default-black-text: #333333;
  --default-white-text: #FFFFFF;
  --default-gray-text: #999999;
  --purple-100: #2F2E41;
  --primary-button-color: #009EDD;
  --secondary-button-color: #039B00;

  --mobile: 375px;
  --tablet: 768px;
  --commonScreen: 1440px;

  --mobileContent: 343px;
  --tabletContent: 648px;
  --commonScreenContent: 960px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-size: 16px;
  line-height: 1.2;
  color: --default-black-text;
}

h1,
h2,
h3 {
  margin-bottom: 0.8rem;
}

p {
  margin-bottom: 0.5rem;
  padding: 0.3rem 0;
}

a {
  margin-bottom: 0.5rem;
  padding: 0.3rem 0;
  text-decoration: none;
}
`;