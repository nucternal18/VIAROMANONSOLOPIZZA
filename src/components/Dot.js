import React from 'react'
import styled from 'styled-components';


const Dot = ({ active }) => (
  <DotContainer active={active} />
)

const Dots = ({ slides, activeSlide }) => (
  <DotsContainer>
    {slides.map((slide, i) => (
      <Dot key={slide} active={activeSlide === i} />
    ))}
  </DotsContainer>
)

const DotContainer = styled.span`
    padding: 10px;
      margin-right: 5px;
      cursor: pointer;
      border-radius: 50%;
      background: ${({active}) => active ? 'black' : 'white'};
`;

const DotsContainer = styled.div`
    position: absolute;
      bottom: 25px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
`;

export default Dots