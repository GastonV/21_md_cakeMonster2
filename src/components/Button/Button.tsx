import { FC } from 'react';
import './Button.scss';

type ButtonProps = {
  buttonName: string,
  clickHandler: () => void,
}

const Button: FC<ButtonProps> = ({ buttonName, clickHandler }) => (
  <button className="button" onClick={clickHandler}>
    {buttonName}
  </button>
);

export default Button;
