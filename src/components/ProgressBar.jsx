import Step from './Step';
import useForm from '../hooks/useForm';

export default function ProgressBar () {
  const { formState } = useForm();
  return (
    <section className='progress-bar'>
      {formState.map((item) => (
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
