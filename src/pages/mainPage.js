import React from "react";
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
`;

export default function MainPage () {
  return(
    <main>
      <Title>상품 리스트</Title>
      <Title>북마크 리스트</Title>
    </main>
  );
}