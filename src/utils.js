export const ACTION_TYPES = {
  UNLOCK_STEP: 'UNLOCK_STEP',
  NEXT_STEP: 'NEXT_STEP',
  GO_BACK_STEP: 'GO_BACK_STEP',
  GO_THROUGH_STEPS: 'GO_THROUGH_STEPS',
  CONFIRM_FORM: 'CONFIRM_FORM',
  UNCHECK_FIELDS: 'UNCHECK_FIELDS'
};

export const INITIAL_STATE_FORM = [
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
