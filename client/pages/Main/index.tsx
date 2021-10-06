import { FunctionComponent } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import context from 'react-bootstrap/esm/AccordionContext';
import Container from '@/components/common/Container';

export default function Main({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  // console.log(props.data);
  console.log(data);
  return <div>Main page</div>;
}

export const getStaticProps: GetStaticProps = async () => {
  // console.log(ctx);

  const data = 'test';
  return {
    props: {
      data,
    },
  };
};
