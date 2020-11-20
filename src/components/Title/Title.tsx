import React from 'react';
import styled from 'styled-components';
import { pageData } from '../../constants/constants';

const H1 = styled.h1`
  font-size: 60pt;
  font-weight: 600;
  color: #452e76;
  margin: 0;
  padding: 40px 0 80px;
  text-align: center;
`;

export default function Title() {
  const { title } = pageData;

  return <H1>{title.title}</H1>;
}
