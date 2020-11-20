import React, { FC } from 'react';
import styled from 'styled-components';
import MailCircle from '../MailCircle/MailCircle';
import { pageData } from '../../constants/constants';

const Wrapper = styled.div`
  text-align: center;
  position: relative;
  transition: 0.2s ease-out;
  padding: 20px;
  border-radius: 5px;

  &:hover {
    background: #fff;
    transition: 0.2s ease-out;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  }
`;
const Image = styled.img`
  cursor: pointer;
  border-radius: 100px;
`;
const Name = styled.p`
  color: #452e76;
  font-size: 20pt;
`;
const Position = styled.p`
  color: #40c1dd;
  font-size: 14pt;
  font-weight: 300;
  margin: 0;
`;
const Location = styled.p`
  color: #888888;
  font-size: 14pt;
  font-weight: 300;
  margin: 0;
`;

interface Props {
  img: string;
  name: string;
  position: string;
  location: string;
  email: string;
  setShowSlider: Function;
  setInitialNumber: Function;
  initialNumber: number;
}

const Card: FC<Props> = ({
  img,
  name,
  position,
  location,
  email,
  setShowSlider,
  setInitialNumber,
  initialNumber,
}) => {
  const { card } = pageData;

  return (
    <Wrapper>
      <MailCircle email={email} />
      <Image
        src={img}
        alt={name}
        onClick={() => {
          setInitialNumber(initialNumber);
          setShowSlider(true);
        }}
        title={card.title}
      />
      <Name>{name}</Name>
      <Position>{position}</Position>
      <Location>{location}</Location>
    </Wrapper>
  );
};

export default Card;
