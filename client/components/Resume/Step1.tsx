import { FunctionComponent } from 'react';
import { FormRadioBtn } from '@/components/common/FormRadiobtn';
import { useState } from 'react';
import Kor from '@/public/KOR.png';
import Eng from '@/public/ENG.png';
import { CommonButton } from '../common/CummonButton';

const KOR = '국문';
const ENG = '영문';

const BASIC = '기본형';
const EMPHASIS = '강조형';
const CUSTOM = '커스텀';

const languageTypeData = [
  { value: KOR, img: Kor },
  { value: ENG, img: Eng },
];

const ResumeTemplateData = [
  { value: BASIC, img: Kor },
  { value: EMPHASIS, img: Eng },
  { value: CUSTOM, img: Eng },
];

// TODO : login 상태 받아오기
// 로그인 되어 있다면 step1으로 routing
// 로그인 되어있지 않다면 SignUp 페이지로 routing

// TODO : 여기에서 step1 data 관리하기
const Step1 = ({ setStep }: any) => {
  const [step1Data, setStep1Data] = useState({
    languageTypeData: KOR,
    resumeTemplatedata: BASIC,
  });

  function handleLanguageData(data: typeof KOR | typeof ENG) {
    setStep1Data({ ...step1Data, languageTypeData: data });
  }

  function handleTemplateData(data: typeof BASIC | typeof EMPHASIS | typeof CUSTOM) {
    setStep1Data({ ...step1Data, resumeTemplatedata: data });
  }

  return (
    <>
      <FormRadioBtn data={languageTypeData} handleData={handleLanguageData} />
      <FormRadioBtn data={ResumeTemplateData} handleData={handleTemplateData} />
      <CommonButton label="다음" onPress={() => setStep((prev: number) => prev + 1)} />
    </>
  );
};

export default Step1;
