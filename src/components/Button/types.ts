import { ReactNode } from 'react';
import { ButtonVariantType, Color } from 'src/commonTypes/styleTypes';

export interface ButtonProps {
  color?: Color;
  content?: string;
  variant?: ButtonVariantType;
  children?: string | ReactNode;
  isLoading?: boolean;
  onClick: (e?: React.MouseEvent) => void;
}

export interface AnimationCircleProps {
  posX: number;
  posY: number;
  color: Color;
}

export interface StyleButtonProps {
  color: Color;
  isLoading?: boolean;
  variant: ButtonVariantType;
}
