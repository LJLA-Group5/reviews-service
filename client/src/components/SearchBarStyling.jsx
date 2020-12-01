import styled from 'styled-components';

const SearchBarContainer = styled.div`
    margin-bottom: 36px;
    margin-top: 2px;
  `;

const MagnifyIcon = styled.div`
    display: flex;
    align-items: center;
    max-width: 50%;
    white-space: nowrap;
    margin-right: 8px;
  `;

const Svg = styled.svg`
    display: block;
    fill: none;
    height: 16px;
    width: 16px;
    stroke: rgba(22, 22, 22, 0.924);
    stroke-width: 2;
    overflow: visible;
  `;

const SearchBarItself = styled.div`
    position: relative;
    cursor: text;
    display: flex;
    height: unset;
    width: 95%;
    margin 0px;
    border: solid 1px;
    color: rgba(34, 34, 34, 0.39);
    background-color: rgb(247, 247, 247);
    align-items: center;
    padding: 11px 11px 11px 16px;
    border-radius: 100px;
    &:focus-within {
    box-shadow: rgb(32, 32, 32) 0px 0px 0px 1px inset;
      color: rgba(34, 34, 34, 0.787);
    }
  &:focus-within ${Svg} {
      stroke-width: 4;
    }
  `;

const ReviewsSearchInput = styled.form`
    position: relative;
    flex: 1 1 0%;
    padding: 0px;
    cursor: default;
  `;

const SearchInputHouse = styled.div`
    display: flex;
  `;

const SearchField = styled.input`
  width: 100%;
  border: none;
  outline: none;
  margin: 0px 0px 0px 0px;
  min-height: 1px;
  color: rgb(34, 34, 34);
  background-color: transparent;
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  appearance: none;
  flex: 1 1 0%;
  padding 0px;
  text-overflow: ellipsis;
  }
  `;

export {
  SearchBarContainer,
  MagnifyIcon,
  Svg,
  SearchBarItself,
  ReviewsSearchInput,
  SearchInputHouse,
  SearchField,
};
