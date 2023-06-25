import * as Yup from 'yup';

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const phoneNumberRegex = /^\d{7,10}$/;

export const nameAndLastnameSchema = Yup.object().shape({
  firstName: Yup.string().min(3, 'El nombre debe contener mínimo 3 caracteres').required('Nombre es obligatorio'),
  lastName: Yup.string().min(3, 'El apellido debe contener mínimo 3 caracteres').required('Apellido es obligatorio')
});

export const emailSchema = Yup.object().shape({
  email: Yup.string().matches(emailRegex, 'Correo electrónico invalido').required('El correo electrónico es obligatorio')
});

export const phoneSchema = Yup.object().shape({
  phoneNumber: Yup.string().matches(phoneNumberRegex, 'El número de teléfono debe tener entre 7 y 10 dígitos')
    .required('El número telefónico es obligatorio')
});

export const countrySchema = Yup.object().shape({
  country: Yup.string().required('El paìs es obligatorio')
});

export const bithDateSchema = Yup.object().shape({
  bithDate: Yup.date()
    .max(new Date(), 'La fecha de nacimiento no puede ser en el futuro')
    .required('La fecha de nacimiento es requerida')
    .nullable()
});
