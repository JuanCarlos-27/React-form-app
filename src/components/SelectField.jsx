import { Field } from 'formik';
import useCountries from '../hooks/useCountries';

export default function SelectField ({ name }) {
  const { countries } = useCountries();

  return (
    <Field name={name} as='select'>
      <option value=''>Seleccione un valor</option>
      {countries.map((country) => (
        <option key={country?.es_name} value={country?.es_name}>
          {country?.es_name}
        </option>
      ))}
    </Field>
  );
}
