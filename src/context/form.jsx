import { createContext, useReducer } from 'react';
import { formReducer } from '../reducers/formReducer';
import { INITIAL_STATE_FORM } from '../utils';

export const FormContext = createContext();

export function FormProvider ({ children }) {
  const [formState, dispatch] = useReducer(formReducer, INITIAL_STATE_FORM);

  return (
    <FormContext.Provider value={{ formState, dispatch }}>
      {children}
    </FormContext.Provider>
  );
}
