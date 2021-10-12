import { FunctionComponent } from 'react';

// TODO : login 상태 받아오기
// 로그인 되어 있다면 step1으로 routing
// 로그인 되어있지 않다면 SignUp 페이지로 routing

const WriteResume: FunctionComponent = () => {
  return <div>Write Resume page</div>;
};

// fetch하거나 caching 할 데이터가 없는데 이걸 굳이 써야하는지 의문 🤔
// export async function getStaticProps() {

// }

export default WriteResume;
