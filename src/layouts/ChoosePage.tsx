import React, { FC } from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import Card from '../components/Card';

import bg from '../images/bg.png';
import person1 from '../images/person-1.png';
import person2 from '../images/person-2.png';
import person3 from '../images/person-3.png';
import person4 from '../images/person-4.png';
import person5 from '../images/person-5.png';

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
  setShowSlider: any;
  setInitialNumber: any;
  initialNumber: number;
}

const ChoosePage: FC<Props> = ({
  setShowSlider,
  setInitialNumber,
  initialNumber,
}) => {
  return (
    <Container>
      <Title />
      <div className="container">
        <Wrapper>
          <Card
            img={person1}
            name="Basia Sołtysińska"
            position="Founder"
            location="Warsaw"
            email="contact@team.com"
            setShowSlider={setShowSlider}
            setInitialNumber={setInitialNumber}
            initialNumber={0}
          />
          <Card
            img={person2}
            name="Włas Chorowiec"
            position="Founder"
            location="Warsaw"
            email="contact@team.com"
            setShowSlider={setShowSlider}
            setInitialNumber={setInitialNumber}
            initialNumber={1}
          />
          <Card
            img={person3}
            name="Edyta Leśniewska"
            position="Head of Human Resources"
            location="Warsaw"
            email="contact@team.com"
            setShowSlider={setShowSlider}
            setInitialNumber={setInitialNumber}
            initialNumber={2}
          />
          <Card
            img={person4}
            name="Joanna Pawluk"
            position="Chief Growth Officer (CGO)"
            location="London"
            email="contact@team.com"
            setShowSlider={setShowSlider}
            setInitialNumber={setInitialNumber}
            initialNumber={3}
          />
          <Card
            img={person5}
            name="Davis Saunders"
            position="Business Development"
            location="London"
            email="contact@team.com"
            setShowSlider={setShowSlider}
            setInitialNumber={setInitialNumber}
            initialNumber={4}
          />
          <Card
            img={person1}
            name="Adam Eldridge"
            position="Business Develpoment Director US"
            location="Los Angeles"
            email="contact@team.com"
            setShowSlider={setShowSlider}
            setInitialNumber={setInitialNumber}
            initialNumber={5}
          />
          <Card
            img={person2}
            name="Maha Mahda"
            position="Chief Business Development Officer (CBDO)"
            location="Warsaw"
            email="contact@team.com"
            setShowSlider={setShowSlider}
            setInitialNumber={setInitialNumber}
            initialNumber={6}
          />
          <Card
            img={person3}
            name="Elżbieta Kamińska"
            position="International Client Service Manager"
            location="Warsaw"
            email="contact@team.com"
            setShowSlider={setShowSlider}
            setInitialNumber={setInitialNumber}
            initialNumber={7}
          />
          <Card
            img={person4}
            name="Karolina Makuch"
            position="Creation Manager"
            location="Warsaw"
            email="contact@team.com"
            setShowSlider={setShowSlider}
            setInitialNumber={setInitialNumber}
            initialNumber={8}
          />
          <Card
            img={person5}
            name="Kamil Bolek"
            position="Head of Communication"
            location="Warsaw"
            email="contact@team.com"
            setShowSlider={setShowSlider}
            setInitialNumber={setInitialNumber}
            initialNumber={9}
          />
        </Wrapper>
      </div>
    </Container>
  );
};

export default ChoosePage;
