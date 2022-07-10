import { colors } from 'src/constants/colors';
import { BORDER_RADIUS } from 'src/constants/staticStyles';
import { css, keyframes } from 'styled-components';
import { StyleButtonProps } from './types';

export const animation = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  100% {
    transform: translate(-50%, -50%) scale(25);
  }
`;

export const buttonStandart = css<StyleButtonProps>`
  background-color: ${({ color }) => colors[color]};
  border: none;
  color: white;
`;

export const buttonOutlined = css<StyleButtonProps>`
  background-color: transparent;
  border: ${({ variant, color }) => {
    if (variant === 'outlined') return `1px solid ${colors[color]}`;
    return 0;
  }};
  color: ${({ color }) => colors[color]};
`;

export const buttonCommonStyle = css`
  user-select: none;
  cursor: pointer;
  border-radius: ${BORDER_RADIUS};
  outline: none;
  padding: 10px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
`;
