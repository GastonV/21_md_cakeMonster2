import { FC } from 'react';

type HeaderProps = {
  headingText: string,
}

export const Header:FC<HeaderProps> = ({ headingText }) => (
  <div>
    <h1>{headingText}</h1>
  </div>
);

export default Header;
