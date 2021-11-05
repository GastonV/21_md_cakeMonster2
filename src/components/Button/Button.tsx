import './Button.scss';
import { FC } from 'react';

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
