import React, { FC } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Circle = styled.div`
  background: #452e76;
  position: absolute;
  right: 0;
  border-radius: 100px;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 50px;
  transition: 0.2s ease-out;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transition: 0.2s ease-out;
  }

  svg {
    color: #fff;
  }
`;

interface Props {
  email: string;
}

const MailCircle: FC<Props> = ({ email }) => {
  return (
    <a href={`mailto:${email}`}>
      <Circle title="Napisz wiadomość!">
        <FontAwesomeIcon icon="envelope" />
      </Circle>
    </a>
  );
};

export default MailCircle;
