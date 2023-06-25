import useForm from '../hooks/useForm';
import { ACTION_TYPES } from '../utils';
import { CheckIcon, LockIcon } from './Icons';

export default function Step ({
  stepLabel,
  isCurrentStep,
  isBlockedStep,
  isChecked
}) {
  const { dispatch } = useForm();

  const handleClickStep = () => {
    if (isBlockedStep || isCurrentStep) return;
    const payload = { stepName: stepLabel };
    dispatch({ type: ACTION_TYPES.GO_THROUGH_STEPS, payload });
  };

  return (
    <div
      className={`step-wrapper ${isBlockedStep ? 'step-wrapper-blocked' : ''}`}
      onClick={() => handleClickStep()}
    >
      <h3 className='step-label'>{stepLabel}</h3>
      <div className={`step ${isCurrentStep ? 'current-step' : ''} `}>
        {isChecked && <CheckIcon width={30} height={30} />}
        {isBlockedStep && <LockIcon width={30} height={30} />}
      </div>
    </div>
  );
}
