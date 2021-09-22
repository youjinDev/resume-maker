import theme from '../../styles/theme';
import styled from 'styled-components';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import resume from '../../public/resume.png';
import Image from 'next/image';

const Header: FunctionComponent = () => {
  return (
    <>
      <HeaderContainer>
        <Link href="/Main">
          <Image className="logo" src={resume} alt="Main Logo" width={50} height={50} />
        </Link>
        <ul>
          <li>
            <Link href="/SignUp">Sign Up</Link>
          </li>
          <li>
            <Link href="/WriteResume">Write</Link>
          </li>
        </ul>
      </HeaderContainer>
    </>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  height: 5rem;
  position: sticky;
  top: 0;
  background-color: ${theme.color.blue};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 32px;

  .logo {
    cursor: pointer;
  }

  ul {
    width: 120px;
    display: flex;
    justify-content: space-around;
    color: ${theme.color.white};
  }
`;

export default Header;
