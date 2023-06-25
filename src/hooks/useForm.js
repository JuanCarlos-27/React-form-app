import { useContext } from 'react';
import { FormContext } from '../context/form';

export default function useForm () {
  const { formState, dispatch } = useContext(FormContext);

  // TODO: crear metodo para traer la info
  //
  //

  const allFieldsChecked = () => {
    return formState.every(item => item.isChecked);
  };

  return { formState, dispatch, allFieldsChecked };
}
