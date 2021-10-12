import { FunctionComponent } from 'react';
import { FormRadioBtn } from '@/components/common/FormRadiobtn';
import { useState } from 'react';
import Kor from '@/public/KOR.png';
import Eng from '@/public/ENG.png';

const languageTypeData = [
  { value: '국문', img: Kor },
  { value: '영문', img: Eng },
];

const ResumeTemplateData = [
  { value: '기본형', img: Kor },
  { value: '강조형', img: Eng },
  { value: '커스텀', img: Eng },
];

// Todo : login 상태 받아오기
// 로그인 되어 있다면 step1으로 routing
// 로그인 되어있지 않다면 SignUp 페이지로 routing

// TODO : 여기에서 step1 data 관리하기
const WriteResume: FunctionComponent = () => {
  const [step1Data, setStep1Data] = useState({
    languageTypeData: '국문',
    resumeTemplatedata: '기본형',
  });

  function handleLanguageData(data: '국문' | '영문') {
    setStep1Data({ ...step1Data, languageTypeData: data });
  }

  function handleTemplateData(data: '기본형' | '강조형' | '커스텀') {
    setStep1Data({ ...step1Data, resumeTemplatedata: data });
  }

  return (
    <>
      <FormRadioBtn data={languageTypeData} handleData={handleLanguageData} />
      <FormRadioBtn data={ResumeTemplateData} handleData={handleTemplateData} />
    </>
  );
};

export default WriteResume;
