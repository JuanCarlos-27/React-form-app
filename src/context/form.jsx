import { createContext, useReducer } from 'react';
import { formReducer } from '../reducers/formReducer';

export const FormContext = createContext();

const INITIAL_STATE = [
  {
    stepName: 'Nombres',
    cardTitle: '¿Como te llamas?',
    isCurrentStep: true,
    isBlocked: false,
    isChecked: false,
    fields: [
      {
        name: 'firstName',
        placeholder: 'Nombre',
        type: 'text',
        value: ''
      },
      {
        name: 'lastName',
        placeholder: 'Apellido',
        type: 'text',
        value: ''
      }
    ]
  },
  {
    stepName: 'Email',
    cardTitle: 'Ingresa tu correo electronico',
    isCurrentStep: false,
    isBlocked: true,
    isChecked: false,
    fields: [
      {
        name: 'email',
        placeholder: 'Correo electrónico',
        type: 'email',
        value: ''
      }
    ]
  },
  {
    stepName: 'Teléfono',
    cardTitle: 'Ingresa tu número de contacto',
    isCurrentStep: false,
    isBlocked: true,
    isChecked: false,
    fields: [
      {
        name: 'phoneNumber',
        placeholder: 'Teléfono',
        type: 'number',
        value: ''
      }
    ]
  },
  {
    stepName: 'País',
    cardTitle: 'Selecciona tu país de nacimiento',
    isCurrentStep: false,
    isBlocked: true,
    isChecked: false,
    fields: [
      {
        name: 'country',
        placeholder: 'País',
        type: 'select',
        value: ''
      }
    ]
  },
  {
    stepName: 'Fecha',
    cardTitle: 'Seleccione su fecha de nacimiento',
    isCurrentStep: false,
    isBlocked: true,
    isChecked: false,
    fields: [
      {
        name: 'bithDate',
        placeholder: 'Fecha de nacimiento',
        type: 'date',
        value: ''
      }
    ]
  }
];

export function FormProvider ({ children }) {
  const [formState, dispatch] = useReducer(formReducer, INITIAL_STATE);

  return (
    <FormContext.Provider value={{ formState, dispatch }}>
      {children}
    </FormContext.Provider>
  );
}
