import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@styles/Home.module.css';
import styled from 'styled-components';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Main from '@/pages/Main/index';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Wrapper role="wrapper">
        <Main />
      </Wrapper>
      <Footer />
    </>
  );
};

const Wrapper = styled.div`
  height: 200vh;
  text-align: center;
  margin: 0 auto;
`;

export default Home;
