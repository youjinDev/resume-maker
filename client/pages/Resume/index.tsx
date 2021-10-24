import { FunctionComponent } from 'react';
import ResumeWriting from '@/components/Resume/index';

const WriteResume = ({ data }: any) => {
  return <ResumeWriting />;
};

// TODO : login 상태 받아오기
// 로그인 되어 있다면 step1으로 routing
// 로그인 되어있지 않다면 SignUp 페이지로 routing

// export const getServerSideProps = async () => {
//   // const data = await getUserInfo();
//   const data = 'test';
//   return {
//     props: {
//       data: { fields: data },
//     },
//   };
// };

export default WriteResume;
