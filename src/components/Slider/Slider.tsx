import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
`;
const Wrapper = styled.div`
  color: #fff;
  padding: 50px;
  border: 5px dashed rgba(255, 255, 255, 0.2);
  text-align: center;
  text-shadow: 1px 1px 2px #000;
`;
const Position = styled.h2`
  margin: 0;
  font-size: 40pt;
  font-weight: 300;
`;
const Name = styled.h1`
  margin: 0;
  font-size: 60pt;
`;

interface Props {
  position: string;
  name: string;
}

const Slider: FC<Props> = ({ position, name }) => (
  <Container>
    <Wrapper>
      <Position>{position}</Position>
      <Name>{name}</Name>
    </Wrapper>
  </Container>
);

export default Slider;
