import { useContext } from 'react';
import Step from './Step';
import { FormContext } from '../context/form';

export default function ProgressBar () {
  const { formStatus } = useContext(FormContext);
  return (
    <section className='progress-bar'>
      {formStatus.map((item) => (
        <Step
          key={item.stepName}
          stepLabel={item.stepName}
          isCurrentStep={item.isCurrentStep}
          isBlockedStep={item.isBlocked}
        />
      ))}
    </section>
  );
}
