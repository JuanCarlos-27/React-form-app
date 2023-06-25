export default function FormModal ({ dataResume }) {
  return (
    <div className='modal-wrapper'>
      <div className='modal'>
        <h2 className='modal-title'>¿Esta seguro/a de enviar el formulario?</h2>
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
          <button type='button'>Si, confirmar</button>
          <button type='button'>Cancelar</button>
        </div>
      </div>
    </div>
  );
}
