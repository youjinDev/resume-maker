import { FunctionComponent } from 'react';

const WriteResume: FunctionComponent = () => {
  return <div>Write Resume page</div>;
};

// fetch하거나 caching 할 데이터가 없는데 이걸 굳이 써야하는지 의문 🤔
export async function getStaticProps() {

}

export default WriteResume;
