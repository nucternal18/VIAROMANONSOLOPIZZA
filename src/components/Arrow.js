import React from 'react';
import styled from 'styled-components';

const Arrow = ({ direction, handleClick }) => {
  return (
    <ArrowComponent direction={direction} onClick={handleClick}>
          {direction === 'right' ? (
              <>
            
        <label
          className=' w-10 h-10 mr-2 md:mr-1 absolute cursor-pointer text-3xl font-bold text-black rounded-full bg-white  leading-tight text-center z-10 inset-y-0 right-0 my-auto'
        >
                      ›
        </label>
                  </>
      ) : (
        <label
          className=' w-10 h-10 ml-2 md:ml-1 absolute cursor-pointer  text-3xl font-bold text-black rounded-full bg-white  leading-tight text-center z-10 inset-y-0 left-0 my-auto'
        >
          ‹
        </label>
      )}
    </ArrowComponent>
  );
};

const ArrowComponent = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  ${(props) => (props.direction === 'right' ? `right: 25px` : `left: 25px`)};
  height: 50px;
  width: 50px;
  justify-content: center;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  transition: transform ease-in 0.1s;
  &:hover {
    transform: scale(1.1);
  }
  img {
    transform: translateX(
      ${(props) => (props.direction === 'left' ? '-2' : '2')}px
    );
    &:focus {
      outline: 0;
    }
  }
`;
export default Arrow;
