import { Field, Form, Formik } from 'formik';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';
import SelectField from './SelectField';

export default function CardForm ({ label, fields }) {
  const extractFieldStructure = fields.map((field) => [field.name, field.value]);
  const initialValue = Object.fromEntries(extractFieldStructure);

  const onSubmit = (values, actions) => {
    console.log(values);
  };
  return (
    <Formik initialValues={initialValue} onSubmit={onSubmit}>
      <Form className='card-form'>
        <h1>{label}</h1>
        <div className='form-group'>
          {fields.map((field) => {
            return field.type !== 'select'
              ? (
                <Field
                  key={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  name={field.name}
                  required
                />
                )
              : (
                <SelectField key={field.name} name={field.name} />
                );
          })}
        </div>

        <div className='form-buttons-group'>
          <button type='button'>
            <ChevronLeftIcon />
            <span>Volver</span>
          </button>
          <button type='submit'>
            Continuar
            <ChevronRightIcon />
          </button>
        </div>
      </Form>
    </Formik>
  );
}
