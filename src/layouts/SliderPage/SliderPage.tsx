import React, { FC } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import bgSlide from '../../images/bg-slide.png';
import Slider from '../../components/Slider/Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation]);

const Container = styled.div`
  background: url(${bgSlide});
  background-size: cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: #fff;
    position: absolute;
    font-size: 50px;
    cursor: pointer;
    z-index: 10;
  }

  .svg-close {
    right: 0;
    top: 0;
    margin: 30px;
    transition: 0.2s ease-out;

    &:hover {
      color: #f44336;
      transition: 0.2s ease-out;
    }
  }
`;

interface Props {
  setShowSlider: Function;
  initialNumber: number;
}

const SliderPage: FC<Props> = ({ setShowSlider, initialNumber }) => {
  return (
    <Container>
      <FontAwesomeIcon
        className="svg-close"
        icon="times"
        onClick={() => setShowSlider(false)}
      />
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        initialSlide={initialNumber || 0}
        navigation
      >
        <SwiperSlide>
          <Slider name="Basia Sołtysińska" position="Founder" />
        </SwiperSlide>
        <SwiperSlide>
          <Slider name="Włas Chorowiec" position="Founder" />
        </SwiperSlide>
        <SwiperSlide>
          <Slider name="Edyta Leśniewska" position="Head of Human Resources" />
        </SwiperSlide>
        <SwiperSlide>
          <Slider name="Joanna Pawluk" position="Chief Growth Officer (CGO)" />
        </SwiperSlide>
        <SwiperSlide>
          <Slider name="David Saunders" position="Business Development" />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            name="Adam Eldridge"
            position="Business Development Director US"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            name="Maha Mahda"
            position="Chief Business Development Officer (CBDO)"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            name="Elżbieta Kamińska"
            position="International Client Service Manager"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider name="Karolina Makuch" position="Creation Manager" />
        </SwiperSlide>
        <SwiperSlide>
          <Slider name="Kamil Bolek" position="Head of Communication" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default SliderPage;
