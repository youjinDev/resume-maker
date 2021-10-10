import { FunctionComponent } from 'react';
import { FormRadioBtn } from '@/components/common/FormRadiobtn';
import { useState } from 'react';

// Todo : login 상태 받아오기
// 로그인 되어 있다면 step1으로 routing
// 로그인 되어있지 않다면 SignUp 페이지로 routing
const WriteResume: FunctionComponent = () => {
  return (
    <div>
      <FormRadioBtn />
      <FormRadioBtn />
    </div>
  );
};

export default WriteResume;
