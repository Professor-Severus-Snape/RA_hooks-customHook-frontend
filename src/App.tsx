import ErrorComponent from './components/ErrorComponent/ErrorComponent';
import PendingComponent from './components/PendingComponent/PendingComponent';
import SuccessComponent from './components/SuccessComponent/SuccessComponent';

const App = () => {
  return (
    <>
      {<ErrorComponent />}
      {<PendingComponent />}
      {<SuccessComponent />}
    </>
  );
};

export default App;
