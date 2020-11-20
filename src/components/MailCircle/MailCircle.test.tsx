import React from 'react';
import ReactDOM from 'react-dom';
import MailCircle from './MailCircle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MailCircle email="contact@team.com" />, div);
});
