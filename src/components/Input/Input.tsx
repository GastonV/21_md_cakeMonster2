import { ChangeEvent, FC } from 'react';
import './input.scss';

type InputProps = {
  inputText: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

const Input: FC<InputProps> = ({ inputText, onChange }) => (
  <>
    <input
      className="form-control"
      placeholder="Item...."
      type="text"
      value={inputText}
      onChange={onChange}
    />
  </>
);
export default Input;
