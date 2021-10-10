import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form, FormikHelpers } from 'formik';

interface Values {
  resumeForm: 'Kor' | 'Eng';
}

// label value이랑 img src 배열로 주면
// map 해서 라디오 그룹 만들어주는 컴포넌트

export const FormRadioBtn = () => {
  return (
    <>
      <div>
        <Formik
          initialValues={{
            picked: 'Kor',
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ values }) => (
            <Form>
              <div id="my-radio-group">Picked</div>
              <div role="group" aria-labelledby="my-radio-group">
                <label>
                  <Field type="radio" name="picked" value="Kor" />
                  국문
                </label>
                <label>
                  <Field type="radio" name="picked" value="Eng" />
                  영문
                </label>
                <div>Picked: {values.picked}</div>
              </div>
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
