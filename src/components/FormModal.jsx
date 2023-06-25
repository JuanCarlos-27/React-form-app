import { ACTION_TYPES } from '../utils';
import { toast } from 'sonner';
import confetti from 'canvas-confetti';
import useForm from '../hooks/useForm';

export default function FormModal ({ dataResume, onCancel }) {
  const { dispatch } = useForm();

  const onConfirm = () => {
    dispatch({ type: ACTION_TYPES.CONFIRM_FORM });
    confetti();
    toast.success('¡Formulario enviado correctamente!');
  };

  return (
    <div className='modal-wrapper'>
      <div className='modal'>
        <h2 className='modal-title'>
          ¿Estas seguro/a de enviar el formulario?
        </h2>
        <div className='modal-resume'>
          {dataResume.map((item) => {
            return (
              <div key={item.name}>
                <strong>{item.placeholder}:</strong>
                <span> {item.value}</span>
              </div>
            );
          })}
        </div>
        <div className='modal-buttons'>
          <button type='button' onClick={() => onConfirm()}>
            Si, confirmar
          </button>
          <button type='button' onClick={() => onCancel()}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
