import React, { useState } from 'react';
import { randomId } from '@helpers/idGenerate';
import AnimationCircle from './AnimationCircle';
import { StButton, StCircleContainer } from './styled';
import { ButtonProps } from './types';
import MyImageSvg from '../../assets/icons/save.svg';

const Icon = () => (
  <svg className="ico" color="black" fill="blue" width={24} height={24}>
    <use href={MyImageSvg} width={10} height={10} />
  </svg>
);

const Button: React.FC<ButtonProps> = ({
  content,
  onClick,
  children,
  color = 'primary',
  variant = 'standart',
  isLoading,
}) => {
  const [circle, setCircle] = useState<Array<JSX.Element>>([]);
  // console.log(MyImageSvg);
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
      <AnimationCircle variant={variant} color={color} posX={posX} posY={posY} key={randomId()} />,
    ]);
  };

  const handleClick = (e?: React.MouseEvent) => onClick(e);

  return (
    <StButton
      color={color}
      variant={variant}
      onClick={handleClick}
      onMouseUp={handleMouseUp}
      isLoading={isLoading}
      onMouseDown={handleMouseDown}
    >
      <Icon />
      <StCircleContainer>
        {circle}
      </StCircleContainer>
      {children || content}
    </StButton>
  );
};

export default Button;
