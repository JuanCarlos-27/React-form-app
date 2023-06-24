import CheckIcon from './Icons';

export default function Step ({ stepLabel }) {
  return (
    <div className='step-wrapper'>
      <h3 className='step-label'>{stepLabel}</h3>
      <div className='step'>
        <CheckIcon width={30} height={30} />
      </div>
    </div>
  );
}
