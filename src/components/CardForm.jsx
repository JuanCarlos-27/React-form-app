import PropTypes from "prop-types";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ChevronLeftIcon, ChevronRightIcon } from "./Icons";
import SelectField from "./SelectField";
import useForm from "../hooks/useForm";
import { ACTION_TYPES } from "../utils";
import {
  bithDateSchema,
  countrySchema,
  emailSchema,
  nameAndLastnameSchema,
  phoneSchema,
} from "../schemas/form.schema";
import Button from "./Button";

const SCHEMAS = {
  Nombres: nameAndLastnameSchema,
  Email: emailSchema,
  Teléfono: phoneSchema,
  País: countrySchema,
  Fecha: bithDateSchema,
};

/**
 * Componente que renderiza cada formulario
 */
export default function CardForm({ label, fields, stepName }) {
  const { dispatch } = useForm();

  // Crea un array de arrays con la estructura de los campos: [[firstName, ''], ...]
  const extractFieldStructure = fields.map((field) => [
    field.name,
    field.value,
  ]);
  // Convierte el array de arrays en un objeto: {firstName: '', ...}
  const initialValue = Object.fromEntries(extractFieldStructure);

  const onSubmit = (values) => {
    const payload = {
      stepName,
      ...values,
    };
    dispatch({ type: ACTION_TYPES.NEXT_STEP, payload });
  };

  const handleClickBack = () => {
    const payload = { stepName };
    dispatch({ type: ACTION_TYPES.GO_BACK_STEP, payload });
  };

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={onSubmit}
      validationSchema={SCHEMAS[stepName]}
    >
      <Form className="card-form" autoComplete="off" noValidate>
        <h1>{label}</h1>
        <div className="form-group">
          {fields.map((field) => {
            return (
              <div key={field.name} className="input-group">
                {field.type === "select" && (
                  <SelectField key={field.name} name={field.name} />
                )}
                {field.type !== "select" && (
                  <Field
                    key={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    name={field.name}
                    required
                  />
                )}
                <ErrorMessage
                  name={field.name}
                  component="span"
                  className="validation-error"
                />
              </div>
            );
          })}
        </div>

        <div className="form-buttons-group">
          <Button onClick={handleClickBack}>
            <ChevronLeftIcon />
            <span>Volver</span>
          </Button>
          <Button type={"submit"}>
            Continuar
            <ChevronRightIcon />
          </Button>
        </div>
      </Form>
    </Formik>
  );
}

CardForm.propTypes = {
  /** Titulo de la tarjeta*/
  label: PropTypes.string,
  /** Campos del formulario */
  fields: PropTypes.array,
  /** Nombre e identificador del paso */
  stepName: PropTypes.string,
};
