import React, { useEffect, useRef } from 'react';
import { StCircleAnimation } from './styled';
import { AnimationCircleProps } from './types';

const AnimationCircle: React.FC<AnimationCircleProps> = ({ posX, posY, color }) => {
  const circleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (circleRef.current) {
      circleRef.current.style.left = `${posX}px`;
      circleRef.current.style.top = `${posY}px`;
    }
  }, []);

  return <StCircleAnimation color={color} ref={circleRef} />;
};

export default AnimationCircle;