import Step from './Step';

export default function ProgressBar () {
  return (
    <section className='progress-bar'>
      <Step stepLabel='Paso 1' />
      <Step stepLabel='Paso 2' isCurrentStep />
      <Step stepLabel='Paso 3' isBlockedStep />
      <Step stepLabel='Paso 4' isBlockedStep />
      <Step stepLabel='Paso 5' isBlockedStep />
    </section>
  );
}
