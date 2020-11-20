import React from 'react';
import ReactDOM from 'react-dom';
import SliderPage from './SliderPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SliderPage setShowSlider={null} initialNumber={0} />, div);
});
