import Step from './Step';

export default function ProgressBar () {
  return (
    <section className='progress-bar'>
      <Step stepLabel='Paso 1' />
      <Step stepLabel='Paso 2' />
      <Step stepLabel='Paso 3' />
      <Step stepLabel='Paso 4' />
      <Step stepLabel='Paso 5' />
    </section>
  );
}
