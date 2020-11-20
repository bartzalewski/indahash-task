import React, { FC } from 'react';
import styled from 'styled-components';
import Title from '../../components/Title/Title';
import Card from '../../components/Card/Card';
import { pageData } from '../../constants/constants';

import bg from '../../images/bg.png';
import person1 from '../../images/person-1.png';
import person2 from '../../images/person-2.png';
import person3 from '../../images/person-3.png';
import person4 from '../../images/person-4.png';
import person5 from '../../images/person-5.png';

const Container = styled.div`
  background: url(${bg});
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 50px;
`;

interface Props {
  setShowSlider: Function;
  setInitialNumber: Function;
  initialNumber: number;
}

const ChoosePage: FC<Props> = ({ setShowSlider, setInitialNumber }) => {
  const { users } = pageData;

  return (
    <Container>
      <Title />
      <div className="container">
        <Wrapper>
          <Card
            img={person1}
            name={users[0].name}
            position={users[0].position}
            location={users[0].location}
            email={users[0].email}
            setShowSlider={setShowSlider}
            setInitialNumber={setInitialNumber}
            initialNumber={users[0].initialNumber}
          />
          <Card
            img={person2}
            name={users[1].name}
            position={users[1].position}
            location={users[1].location}
            email={users[1].email}
            setShowSlider={setShowSlider}
            setInitialNumber={setInitialNumber}
            initialNumber={users[1].initialNumber}
          />
          <Card
            img={person3}
            name={users[2].name}
            position={users[2].position}
            location={users[2].location}
            email={users[2].email}
            setShowSlider={setShowSlider}
            setInitialNumber={setInitialNumber}
            initialNumber={users[2].initialNumber}
          />
          <Card
            img={person4}
            name={users[3].name}
            position={users[3].position}
            location={users[3].location}
            email={users[3].email}
            setShowSlider={setShowSlider}
            setInitialNumber={setInitialNumber}
            initialNumber={users[3].initialNumber}
          />
          <Card
            img={person5}
            name={users[4].name}
            position={users[4].position}
            location={users[4].location}
            email={users[4].email}
            setShowSlider={setShowSlider}
            setInitialNumber={setInitialNumber}
            initialNumber={users[4].initialNumber}
          />
          <Card
            img={person1}
            name={users[5].name}
            position={users[5].position}
            location={users[5].location}
            email={users[5].email}
            setShowSlider={setShowSlider}
            setInitialNumber={setInitialNumber}
            initialNumber={users[5].initialNumber}
          />
          <Card
            img={person2}
            name={users[6].name}
            position={users[6].position}
            location={users[6].location}
            email={users[6].email}
            setShowSlider={setShowSlider}
            setInitialNumber={setInitialNumber}
            initialNumber={users[6].initialNumber}
          />
          <Card
            img={person3}
            name={users[7].name}
            position={users[7].position}
            location={users[7].location}
            email={users[7].email}
            setShowSlider={setShowSlider}
            setInitialNumber={setInitialNumber}
            initialNumber={users[7].initialNumber}
          />
          <Card
            img={person4}
            name={users[8].name}
            position={users[8].position}
            location={users[8].location}
            email={users[8].email}
            setShowSlider={setShowSlider}
            setInitialNumber={setInitialNumber}
            initialNumber={users[8].initialNumber}
          />
          <Card
            img={person5}
            name={users[9].name}
            position={users[9].position}
            location={users[9].location}
            email={users[9].email}
            setShowSlider={setShowSlider}
            setInitialNumber={setInitialNumber}
            initialNumber={users[9].initialNumber}
          />
        </Wrapper>
      </div>
    </Container>
  );
};

export default ChoosePage;
