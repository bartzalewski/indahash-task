import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './theme/globalStyle';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ChoosePage from './layouts/ChoosePage/ChoosePage';
import SliderPage from './layouts/SliderPage/SliderPage';

library.add(faTimes, faEnvelope);

const Container = styled.div``;

function App() {
  const [showSlider, setShowSlider] = useState<boolean>(false);
  const [initialNumber, setInitialNumber] = useState<number>(0);

  return (
    <Container>
      <GlobalStyle />
      {showSlider ? (
        <SliderPage
          setShowSlider={setShowSlider}
          initialNumber={initialNumber}
        />
      ) : (
        <ChoosePage
          setShowSlider={setShowSlider}
          setInitialNumber={setInitialNumber}
          initialNumber={initialNumber}
        />
      )}
    </Container>
  );
}

export default App;
