import { fullAbsolute, fullSize } from '@constants/mixsins';
import { ColorField } from 'src/commonTypes/styleTypes';
import { colors } from 'src/constants/colors';
import { BORDER_RADIUS } from 'src/constants/staticStyles';
import styled, { keyframes } from 'styled-components';
import { StyleButtonProps } from './types';

const animation = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  100% {
    transform: translate(-50%, -50%) scale(25);
  }
`;

export const StButton = styled.button<StyleButtonProps>`
  user-select: none;
  cursor: pointer;
  background-color: ${({ color }) => colors[color]};
  border: none;
  border-radius: ${BORDER_RADIUS};
  outline: none;
  padding: 10px;
  color: white;
  position: relative;
`;

export const StCircleContainer = styled.span`
  ${fullAbsolute};
  ${fullSize}
  overflow: hidden;
`;

export const StCircleAnimation = styled.span<ColorField>`
  display: block;
  position: absolute;
  border-radius: 50%;
  background-color: #fff;
  opacity: .2;
  pointer-events: none;
  width: 50px;
  height: 50px;
  transform: translate(-50%, -50%);
  animation: ${animation} 2s forwards;
`;
