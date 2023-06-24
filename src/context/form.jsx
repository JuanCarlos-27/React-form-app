import { createContext, useReducer } from 'react';

export const FormContext = createContext();

const INITIAL_STATE = [
  {
    stepName: 'Nombres',
    cardTitle: '¿Como te llamas?',
    isCurrentStep: true,
    isBlocked: false,
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
    fields: [
      {
        name: 'phoneNumber',
        placeholder: 'Teléfono',
        type: 'number',
        value: ''
      }
    ]
  }, {
    stepName: 'País',
    cardTitle: 'Selecciona tu país de nacimiento',
    isCurrentStep: false,
    isBlocked: true,
    fields: [
      {
        name: 'country',
        placeholder: 'País',
        type: 'select',
        value: ''
      }
    ]
  }, {
    stepName: 'Contraseña',
    cardTitle: 'Ingresa tu contraseña',
    isCurrentStep: false,
    isBlocked: true,
    fields: [
      {
        name: 'password',
        placeholder: 'Contraseña',
        type: 'password',
        value: ''
      },
      {
        name: 'confirmPassword',
        placeholder: 'Confirmación constraseña',
        type: 'password',
        value: ''
      }
    ]
  }
];

const formReducer = (state, action) => {
  // if (action.type === 'NEXT_STEP') {

  // }
  return state;
};

export function FormProvider ({ children }) {
  const [formState, dispatch] = useReducer(formReducer, INITIAL_STATE);

  return (
    <FormContext.Provider value={{ formState, dispatch }}>
      {children}
    </FormContext.Provider>
  );
}
