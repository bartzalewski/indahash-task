import React from 'react';
import ReactDOM from 'react-dom';
import ChoosePage from './ChoosePage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ChoosePage
      setInitialNumber={null}
      setShowSlider={null}
      initialNumber={0}
    />,
    div
  );
});
