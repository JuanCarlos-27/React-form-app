import { Field, Form, Formik } from 'formik';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';
import SelectField from './SelectField';
import useForm from '../hooks/useForm';
import { ACTION_TYPES } from '../utils';

export default function CardForm ({ label, fields, stepName }) {
  const { dispatch } = useForm();

  const extractFieldStructure = fields.map((field) => [
    field.name,
    field.value
  ]);
  const initialValue = Object.fromEntries(extractFieldStructure);

  const onSubmit = (values) => {
    const payload = {
      stepName,
      ...values
    };
    dispatch({ type: ACTION_TYPES.NEXT_STEP, payload });
  };

  const handleClickBack = () => {
    const payload = { stepName };
    dispatch({ type: ACTION_TYPES.GO_BACK_STEP, payload });
  };

  return (
    <Formik initialValues={initialValue} onSubmit={onSubmit}>
      <Form className='card-form' autoComplete='off'>
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
          <button type='button' onClick={() => handleClickBack()}>
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
