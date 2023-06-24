import { Field, Form, Formik } from 'formik';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

export default function CardForm ({ label, fields }) {
  return (
    <Formik>
      <Form className='card-form'>
        <h1>{label}</h1>
        <div className='form-group'>
          {fields.map((field) => (
            <Field
              key={field.name}
              type={field.type}
              placeholder={field.placeholder}
              name={field.name}
            />
          ))}
        </div>

        <div className='form-buttons-group'>
          <button>
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
