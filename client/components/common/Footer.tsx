import theme from '@/styles/theme';
import { FunctionComponent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import styled from 'styled-components';

const Footer: FunctionComponent = () => {
  return <FooterContainer>This is Footer</FooterContainer>;
};

const FooterContainer = styled.div`
  background-color: ${theme.color.lightGray};
  width: 100%;
  height: 100px;
`;

export default Footer;
