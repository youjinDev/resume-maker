import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import App from 'next/app';

// 여기가 page 렌더링 진입점인듯?
// 모든 페이지에서 공통으로 필요한 기능은 여기에서 구현
// ex) 페이지가 전환되어도 메뉴 UI를 그대로 유지하고 싶을 때
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
          integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
