import Step1 from './Step1';
// import Step2 from './Step2';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export default function ResumeWriting({ data }: any) {
  const [step, setStep] = useState(1);
  return (
    <>
      {step === 1 && <Step1 setStep={setStep} />}
      {step === 2 && <h1>step2 페이지</h1>}
    </>
  );
}
