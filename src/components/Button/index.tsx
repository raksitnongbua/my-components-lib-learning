import React from 'react';
import { Props } from './index.types';
const Button: React.FC<Props> = ({ label }) => {
  return <div>{label}</div>;
};

export default Button;
