import { useContext } from 'react';
import { FormContext } from '../context/form';

export default function useForm () {
  const { formState, dispatch } = useContext(FormContext);

  return { formState, dispatch };
}
