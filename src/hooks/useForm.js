import { useContext } from 'react';
import { FormContext } from '../context/form';

export default function useForm () {
  const { formState, dispatch } = useContext(FormContext);

  const getResumeInformation = () => {
    return formState.map(item => item.fields).flat();
  };

  const allFieldsChecked = () => {
    return formState.every(item => item.isChecked);
  };

  return { formState, dispatch, allFieldsChecked, getResumeInformation };
}
