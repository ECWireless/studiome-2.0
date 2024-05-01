import React from 'react'
import { css } from 'styled-components';
import styled from 'styled-components/macro';

import { shadows, colors } from './theme';
import respondTo from './Breakpoints'
import { ReactComponent as CloseSvg } from '../assets/home/products/cross.svg';
import { H2, P2 } from './Typography';
import { Line } from './Lines';

export const OfficeClosedModal = ({
  onClose,
  open,
  officeClosureNoticeHeading,
  officeClosureNoticeParagraph,
}) => {
  return (
    <Modal open={open}>
      <CloseContainer onClick={onClose}>
        <Close />
      </CloseContainer>
      <H2 center>{officeClosureNoticeHeading}</H2>
      <Line color="orange" height={2} width={200} css={`margin: 20px auto;`} />
      <P2 center>{officeClosureNoticeParagraph}</P2>
    </Modal>
  );
}

const Close = styled(CloseSvg)`
  width: 2.5rem;
  height: 2.5rem;
  fill: ${colors.orange};
`;

const CloseContainer = styled.div`
  align-items: center;
  border-radius: 50%;
  display: flex;
  height: 4rem;
  justify-content: center;
  position: absolute;
  right: 2rem;
  top: 2rem;
  width: 4rem;


  &:hover {
    background: ${colors.greyLight};
    cursor: pointer;
  }
`;

const Modal = styled.div`
  background: white;
  background-shadow: ${shadows.large};
  border-radius: 25px;
  left: 50%;
  padding: 4rem;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 300px;
  z-index: 15;

  ${respondTo.xs`
    width: 400px;
  `}

  ${respondTo.sm`
    width: 500px;
  `}

  ${respondTo.md`
    width: 600px;
  `}

  ${respondTo.lg`
    width: 800px;
  `}

  ${props => props.open && css`
    transform: translate(-50%, -50%) scale(1);
  `}
`;
