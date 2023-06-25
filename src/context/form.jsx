import { createContext, useReducer } from 'react';
import { ACTION_TYPES } from '../utils';

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
    stepName: 'Contraseña',
    cardTitle: 'Ingresa tu contraseña',
    isCurrentStep: false,
    isBlocked: true,
    isChecked: false,
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
  if (action.type === ACTION_TYPES.NEXT_STEP) {
    // Obtiene el nombre del paso
    const stepName = action.payload.stepName;

    const formFields = state.find((item) => item.stepName === stepName).fields;

    const newFields = formFields.map((field) => {
      return { ...field, value: action.payload[field.name] };
    });

    let nextStepToUnlock;
    const newState = state.map((item, index) => {
      if (item.stepName === stepName) {
        // Se guarda el nombre del paso siguiente
        nextStepToUnlock = state[index + 1]?.stepName;
        return {
          ...item,
          isCurrentStep: false,
          isBlocked: false,
          isChecked: true,
          fields: newFields
        };
      }
      if (item.stepName === nextStepToUnlock) {
        return {
          ...item,
          isCurrentStep: true,
          isBlocked: false,
          isChecked: false
        };
      }
      return item;
    });
    return newState;
  }

  if (action.type === ACTION_TYPES.GO_THROUGH_STEPS) {
    const stepName = action.payload.stepName;
    const newState = state.map((item) => {
      return item.stepName === stepName
        ? { ...item, isCurrentStep: true }
        : { ...item, isCurrentStep: false };
    });
    return newState;
  }

  if (action.type === ACTION_TYPES.GO_BACK_STEP) {
    const stepName = action.payload.stepName;
    console.log(stepName);
    const indexStep = state.findIndex(item => item.stepName === stepName);

    const indexOfPrevStep = indexStep !== -1 && indexStep !== 0 ? indexStep - 1 : 0;

    console.log({ indexStep, indexOfPrevStep });
    const newState = state.map((item, index) => {
      return index === indexOfPrevStep
        ? { ...item, isCurrentStep: true }
        : { ...item, isCurrentStep: false };
    });

    return newState;
  }
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
