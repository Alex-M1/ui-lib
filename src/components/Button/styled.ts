import { fullAbsolute, fullSize } from '@constants/mixsins';
import { ButtonVariant, ColorField } from 'src/commonTypes/styleTypes';
import { colors } from 'src/constants/colors';
import styled from 'styled-components';
import {
  animation, buttonCommonStyle, buttonOutlined, buttonStandart,
} from './mixins';
import { StyleButtonProps } from './types';

export const StButton = styled.button<StyleButtonProps>`
  ${buttonCommonStyle}
  ${({ variant }) => {
    if (variant === 'standart') return buttonStandart;
    return buttonOutlined;
  }}
`;

export const StCircleContainer = styled.span`
  ${fullAbsolute};
  ${fullSize}
  overflow: hidden;
`;

export const StCircleAnimation = styled.span<ColorField & ButtonVariant>`
  display: block;
  position: absolute;
  border-radius: 50%;
  opacity: .2;
  background-color: ${({ variant, color }) => {
    if (variant === 'standart') return '#fff';
    return colors[color];
  }};
  pointer-events: none;
  width: 50px;
  height: 50px;
  transform: translate(-50%, -50%);
  animation: ${animation} 2s forwards;
`;
