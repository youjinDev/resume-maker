import React, { Children } from 'react';
// import ReactDOM from 'react-dom';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import Image from 'next/image';
import styled from 'styled-components';
import step1_data from '@/pages/Resume/Step1';

interface IValues {
  value: string;
  img?: StaticImageData;
}

interface IProps {
  data: Array<IValues>;
  handleData: (data: any) => void;
}

// label value이랑 img src 배열 props로 주면
// map해서 라디오 그룹 만들어주는 컴포넌트
export const FormRadioBtn = ({ data, handleData }: IProps) => {
  return (
    <>
      <Formik
        initialValues={{
          picked: data[0].value,
        }}
        onSubmit={(values) => {
          handleData(values.picked);
        }}
      >
        {({ values }) => (
          <FormContainer>
            <div className="container" role="group" aria-labelledby="my-radio-group">
              {data.map(({ value, img }: IValues, i: number) => (
                <Wrapper key={i}>
                  {img && <Image src={img} alt="." width={200} height={200} />}
                  <label>
                    <Field className="field" type="radio" name="picked" value={value} />
                    {value}
                  </label>
                </Wrapper>
              ))}
            </div>
            <div>Picked: {values.picked}</div>
            <button type="submit">Submit</button>
          </FormContainer>
        )}
      </Formik>
    </>
  );
};

const FormContainer = styled(Form)`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .field {
    margin-right: 4px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
