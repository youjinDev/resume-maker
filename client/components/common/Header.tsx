import theme from '@/styles/theme';
import styled from 'styled-components';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import resume from '@/public/resume.png';
import Image from 'next/image';
import { CommonButton } from '@/components/common/CummonButton';
import { useRouter } from 'next/dist/client/router';

const Header: FunctionComponent = () => {
  const router = useRouter();
  return (
    <>
      <HeaderContainer>
        <Link href="/Main">
          <Image className="logo" src={resume} alt="Main Logo" width={50} height={50} />
        </Link>
        <ul>
          <li>
            <Link href="/WriteResume">Write</Link>
          </li>
          <li>
            <CommonButton
              label="Sign Up"
              onPress={() => {
                console.log('test');
                router.push('/SignUp');
              }}
            />
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
    display: flex;
    width: 150px;
    justify-content: space-between;
    align-items: center;
    color: ${theme.color.white};
  }
`;

export default Header;
