import React from 'react';
import styled from 'styled-components';

const ShowAllBtn = (props) => {
  const { data , toggle } = props;
  const reviewNums = data.length;

  const StyledBtn = styled.button`
  cursor: pointer;
  background: rgb(255, 255, 255);
  display: inline-block;
  margin: 0px;
  position: relative;
  text-align: center;
  text-decoration: none;
  width: auto;
  font-size: 16px;
  line-height: 20px;
  font-weight: 550;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  outline: none;
  padding: 13px 23px;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s;
  &:hover{
    background: rgb(247, 247, 247);
  };
  &:active{
    transform: scale(0.96);
    border-color: rgb(0, 0, 0) !important;
    background: rgb(247, 247, 247);
    color: rgb(34, 34, 34) !important;
  }
  `;

  return (
    <StyledBtn type="button" onClick={toggle}>
      {`Show all ${reviewNums} reviews`}
    </StyledBtn>
  );
};

export default ShowAllBtn;
