import ProgressBar from './components/ProgressBar';
import CardForm from './components/CardForm';
import useForm from './hooks/useForm';
import FormModal from './components/FormModal';

function App () {
  const { formState, allFieldsChecked } = useForm();

  const formIsReady = allFieldsChecked();

  return (
    <>
      <main>
        <ProgressBar />
        {formState.map((item) => {
          return (
            item.isCurrentStep && (
              <CardForm
                key={item.stepName}
                stepName={item.stepName}
                fields={item.fields}
                label={item.cardTitle}
              />
            )
          );
        })}
      </main>

      {formIsReady && <FormModal />}
    </>
  );
}

export default App;
