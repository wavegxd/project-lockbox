import Link from 'next/link';
import NavStyles from './styles/NavStyle';

const Nav = () => (
  <NavStyles>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/lockboxes">
      <a>Lockboxes</a>
    </Link>
    <Link href="/transactions">
      <a>Transactions</a>
    </Link>
    <Link href="/">
      <a>Account</a>
    </Link>
  </NavStyles>
);

export default Nav;
