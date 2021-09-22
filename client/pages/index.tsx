import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import Header from '../components/common/Header';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <h1>index를 메인페이지로 만들어야하나 아님 pages안에 따로 만들어야하나 고민중임</h1>
        </Wrapper>
      </Container>
    </>
  );
};

const Wrapper = styled.div`
  width: 500px;
  height: 300vh;
  background-color: gold;
  text-align: center;
  margin: 0 auto;
`;

export default Home;
