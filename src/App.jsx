import ProgressBar from './components/ProgressBar';
import CardForm from './components/CardForm';
import useForm from './hooks/useForm';
import FormModal from './components/FormModal';
import { useEffect, useState } from 'react';
import { Toaster } from 'sonner';
import { ACTION_TYPES } from './utils';

function App () {
  const { formState, dispatch, allFieldsChecked, getResumeInformation } = useForm();

  const [formIsReady, setFormIsReady] = useState(() => allFieldsChecked());

  useEffect(() => {
    const isAllChecked = allFieldsChecked();

    setFormIsReady(isAllChecked);
  }, [allFieldsChecked]);

  const onCancel = () => {
    setFormIsReady(false);
    dispatch({ type: ACTION_TYPES.UNCHECK_FIELDS });
  };

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

      {formIsReady && (
        <FormModal dataResume={getResumeInformation()} onCancel={onCancel} />
      )}
      <Toaster position='top-right' expand richColors />
    </>
  );
}

export default App;
