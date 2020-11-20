import React, { FC } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import bgSlide from '../../images/bg-slide.png';
import Slider from '../../components/Slider/Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { pageData } from '../../constants/constants';

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
  const { users } = pageData;

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
          <Slider name={users[0].name} position={users[0].position} />
        </SwiperSlide>
        <SwiperSlide>
          <Slider name={users[1].name} position={users[1].position} />
        </SwiperSlide>
        <SwiperSlide>
          <Slider name={users[2].name} position={users[2].position} />
        </SwiperSlide>
        <SwiperSlide>
          <Slider name={users[3].name} position={users[3].position} />
        </SwiperSlide>
        <SwiperSlide>
          <Slider name={users[4].name} position={users[4].position} />
        </SwiperSlide>
        <SwiperSlide>
          <Slider name={users[5].name} position={users[5].position} />
        </SwiperSlide>
        <SwiperSlide>
          <Slider name={users[6].name} position={users[6].position} />
        </SwiperSlide>
        <SwiperSlide>
          <Slider name={users[7].name} position={users[7].position} />
        </SwiperSlide>
        <SwiperSlide>
          <Slider name={users[8].name} position={users[8].position} />
        </SwiperSlide>
        <SwiperSlide>
          <Slider name={users[9].name} position={users[9].position} />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default SliderPage;
