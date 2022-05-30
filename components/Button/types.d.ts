import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  buttonView: 'primary' | 'ghost';

  arrow?: 'down' | 'right' | 'none';
}
