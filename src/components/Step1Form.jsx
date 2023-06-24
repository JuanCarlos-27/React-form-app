import CardForm from './CardForm';

const fields = [
  {
    name: 'firstName',
    placeholder: 'Nombre',
    type: 'text'
  },
  {
    name: 'lastName',
    placeholder: 'Apellido',
    type: 'text'
  }
];

export function Step1Form () {
  return (
    <CardForm label='¿Cuál es tu nombre?' fields={fields} />
  );
}
