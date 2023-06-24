import { useContext } from 'react';
import ProgressBar from './components/ProgressBar';
import { FormContext } from './context/form';
import CardForm from './components/CardForm';

function App () {
  const { formStatus } = useContext(FormContext);
  return (
    <>
      <main>
        <ProgressBar />
        {formStatus.map((item) => (
          <CardForm
            key={item.stepName}
            fields={item.fields}
            label={item.cardTitle}
          />
        ))}
      </main>
    </>
  );
}

export default App;
