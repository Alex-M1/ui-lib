import React, { useState } from 'react';
import { randomId } from '@helpers/idGenerate';
import AnimationCircle from './AnimationCircle';
import { StButton, StCircleContainer } from './styled';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  content,
  onClick,
  children,
  color = 'primary',
  variant = 'standart',
  isLoading,
}) => {
  const [circle, setCircle] = useState<Array<JSX.Element>>([]);

  const handleMouseUp = () => setTimeout(() => (
    setCircle((prev) => prev.filter((_el, i) => i !== 0))
  ), 350);

  const handleMouseDown: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    const offset = event.currentTarget.getBoundingClientRect();

    const x = event.pageX - offset.left;
    const y = event.pageY - offset.top;

    createCircleIcon(x, y);
  };
  const createCircleIcon = (posX: number, posY: number) => {
    setCircle((prev) => [
      ...prev,
      <AnimationCircle color={color} posX={posX} posY={posY} key={randomId()} />,
    ]);
  };

  const handleClick = (e?: React.MouseEvent) => onClick(e);

  return (
    <StButton
      onClick={handleClick}
      onMouseUp={handleMouseUp}
      onMouseDown={handleMouseDown}
      color={color}
      isLoading={isLoading}
    >
      <StCircleContainer>
        {circle}
      </StCircleContainer>
      {children || content}
    </StButton>
  );
};

export default Button;
