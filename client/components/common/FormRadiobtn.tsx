import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form, FormikHelpers } from 'formik';

interface Values {
  resumeForm: 'Eng' | 'Kor';
  resumeTemplate: number;
}

// label value이랑 img src 배열로 주면
// map 해서 라디오 그룹 만들어주는 컴포넌트

const FormRadioBtn = () => {
  return (
    <>
      <h1>FormRadio Test</h1>
      {Children}
      <Formik
        initialValues={{
          resumeForm: 'Kor',
          resumeTemplate: 0,
        }}
        onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
          console.log(values);
        }}
      ></Formik>
    </>
  );
};
