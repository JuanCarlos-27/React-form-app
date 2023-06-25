import { ACTION_TYPES, INITIAL_STATE_FORM } from '../utils';

export const formReducer = (state, action) => {
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
    const indexStep = state.findIndex(item => item.stepName === stepName);

    const indexOfPrevStep = indexStep !== -1 && indexStep !== 0 ? indexStep - 1 : 0;

    const newState = state.map((item, index) => {
      return index === indexOfPrevStep
        ? { ...item, isCurrentStep: true }
        : { ...item, isCurrentStep: false };
    });

    return newState;
  }

  if (action.type === ACTION_TYPES.UNCHECK_FIELDS) {
    const lastFIeldIndex = state.length - 1;

    const newState = state.map((item, index) => {
      if (index === lastFIeldIndex) {
        return { ...item, isChecked: false, isCurrentStep: true };
      }
      return item;
    });

    return newState;
  }

  if (action.type === ACTION_TYPES.CONFIRM_FORM) {
    return [...INITIAL_STATE_FORM];
  }
  return state;
};
