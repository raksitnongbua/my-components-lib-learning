import React from 'react';
import { Props } from './index.types';

const Button: React.FC<Props> = ({ label }) => {
  return <button>{label}</button>;
};

export default Button;
