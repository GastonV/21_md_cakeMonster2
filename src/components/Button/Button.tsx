import { FC } from 'react';
import './Button.scss';

type ButtonProps = {
  buttonName: string,
  clickHandler: () => void,
  cssButton: string,
}

const Button: FC<ButtonProps> = ({ buttonName, clickHandler, cssButton }) => (
  <button className={cssButton} onClick={clickHandler}>
    {buttonName}
  </button>
);

export default Button;
