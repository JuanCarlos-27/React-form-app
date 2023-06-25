export default function FormModal () {
  return (
    <div className='modal-wrapper'>
      <div className='modal'>
        <h2 className='title'>¿Esta seguro/a de enviar el formulario?</h2>
        <div className='resume'>
          <p>Nombre</p>
          <p>Nombre</p>
          <p>Nombre</p>
          <p>Nombre</p>
          <p>Nombre</p>
        </div>
        <div className='modal-buttons'>
          <button type='button'>Si, confirmar</button>
          <button type='button'>Cancelar</button>
        </div>
      </div>
    </div>
  );
}
