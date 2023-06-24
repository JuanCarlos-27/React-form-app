import { CheckIcon, LockIcon } from './Icons';

export default function Step ({ stepLabel, isCurrentStep, isBlockedStep }) {
  return (
    <div
      className={`step-wrapper ${isBlockedStep ? 'step-wrapper-blocked' : ''}`}
    >
      <h3 className='step-label'>{stepLabel}</h3>
      <div className={`step ${isCurrentStep ? 'current-step' : ''} `}>
        {!isBlockedStep && <CheckIcon width={30} height={30} />}
        {isBlockedStep && <LockIcon width={30} height={30} />}
      </div>
    </div>
  );
}
