import React, { ReactNode } from 'react';
import { StButton } from './styled';

const Button: React.FC<Props> = ({ children, content, ...props }) => {
  const a = 1;
  return <StButton {...props}>{children || content}</StButton>;
};
export interface Props {
  children?: string | ReactNode;
  content?: string;
  isLoading?: boolean;
}

export default Button;
