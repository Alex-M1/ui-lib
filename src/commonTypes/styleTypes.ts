import { colors } from '@constants/colors';

export type Color = keyof typeof colors;

export interface ColorField {
  color: Color;
}

// buttons
export type ButtonVariantType = keyof typeof BUTTON_VARIANT;
export interface ButtonVariant {
  variant: ButtonVariantType;
}

export enum BUTTON_VARIANT {
  text = 'text',
  standart = 'contained',
  outlined = 'outlined'
}
// end buttons
