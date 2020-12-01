import React, { useEffect, useCallback, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes, css } from 'styled-components';
import ModalRatings from './ModalRatings';
import ModalReviewsList from './ModalReviewsList';

const TotalContainer = styled.div`
  overflow: hidden;
`;

const ModalOverlay = styled.div`
  z-index: 2000;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
`;

const wrapperFade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const wrapperFadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const ModalWrapper = styled.div`
  font-family: 'Montserrat', sans-serif;
  z-index: 2000;
  position: fixed;
  top: 0;;
  bottom: 0;
  right: 0;
  width: 100%;
  padding-top: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: rgb(34, 34, 34, 0.6) !important;
  transition: all 0.4s ease-out;
  animation-name: ${(props) => (props.showing ? wrapperFadeOut : wrapperFade)};
  animation-duration: ${(props) => (props.showing ? '800ms' : '400ms')};
  animation-iteration-count: 1;
  animation-fill-mode: both;
  z-index: 100;
  padding: 0px;
`;

const modalIn = keyframes`
  from {
    bottom: -150vh;
  }
  to {
    bottom: 40px;
  }
`;

const modalOut = keyframes`
  from {
    bottom: 40px;
  }
  to {
    bottom: -150vh;
  }
`;

const ModalItself = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1032px;
  max-height: 90vh;
  border-radius: 12px;
  background: rgb(255, 255, 255);
  position: absolute;
  box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 28px !important;
  transition: all 0.4s ease-out;
  animation-name: ${(props) => (props.showing ? modalOut : modalIn)};
  /* animation-direction: alternate; */
  animation-duration: ${(props) => (props.showing ? '1000ms' : '400ms')};
  animation-iteration-count: 1;
  animation-play-state:
  animation-fill-mode: both;
  z-index: 100;
  padding: 0px;
`;

const ModalHeader = styled.div`
  flex: 0 0 72px;
  position: sticky;
  text-align: left;
  top: 0px;
  z-index: -1;
`;

const CloseButtonContainer = styled.div`
top: 16px;
position: absolute;
display: flex;
border-radius: 50%;
left: 26px;
`;

const ModalCloseButton = styled.button`
appearance: none;
font-size: 26px;
display: inline-block;
border-radius: 50%;
border: none;
outline: none;
width: 32px;
height: 32px;
margin-left: -3px;
margin-top: -1px;
color: rgb(34, 34, 34);
cursor: pointer;
position: relative;
background: transparent;
align-items: flex-start;
transition: 250ms ease-out;
&:hover {
  background-color: rgba(230, 230, 230, 0.39);
}
`;

const MediaContainer = styled.div`
  flex: 1 1 auto;
  overflow-y: auto;
  position: sticky;
  top: 0;
  padding: 0 24px 24px 24px;
`;

const MediaAdjustor = styled.div`
  top: -24px !important;
display: grid;
grid-template-columns: 1.2fr 2fr;

`;

const ModalRatingsContainer = styled.div`
  position: inherit;
  top:800;
`;

const ModalReviewsContainer = styled.div`
  display: flex;
  justify: flex-end;
`;

const Modal = ({ data, isShowing, hide }) => {
  const [localShow, setLocalShow] = useState(false);
  const reset = () => {
    setLocalShow(!localShow);
    setTimeout(hide, 500);
  };
  const escKey = useCallback((e) => {
    if (isShowing) {
      if (e.keyCode === 27) {
        reset();
      }
    }
  }, []);

  const node = useRef();

  const handleClickOutside = (e) => {
    if (isShowing) {
      if (node.current.contains(e.target)) {
        return;
      }
      reset();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', escKey, false);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', escKey, false);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return isShowing ? ReactDOM.createPortal(
    <>
      <TotalContainer>
        <ModalOverlay />
        <ModalWrapper aria-modal="true" aria-hidden="true" tabIndex={-1} role="dialog" showing={localShow}>
          <ModalItself
            showing={localShow}
            ref={node}
          >
            <CloseButtonContainer>
              <ModalCloseButton onClick={reset}>
                <span aria-hidden="true">&times;</span>
              </ModalCloseButton>
            </CloseButtonContainer>
            <ModalHeader />
            <MediaContainer>
              <MediaAdjustor>
                <ModalRatingsContainer>
                  <ModalRatings data={data} />
                </ModalRatingsContainer>
                <ModalReviewsContainer>
                  <ModalReviewsList data={data} />
                </ModalReviewsContainer>
              </MediaAdjustor>
            </MediaContainer>
          </ModalItself>
        </ModalWrapper>
      </TotalContainer>
    </>, document.getElementById('service3'),
  ) : null;
};

export default Modal;
