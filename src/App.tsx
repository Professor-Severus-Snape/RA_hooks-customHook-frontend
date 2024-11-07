import getEndpoint from './libs/getEndpoint'; // получение рандомного url-а

import ErrorComponent from './components/ErrorComponent/ErrorComponent';
import PendingComponent from './components/PendingComponent/PendingComponent';
import SuccessComponent from './components/SuccessComponent/SuccessComponent';

import useJsonFetch from './hooks/useJsonFetch'; // кастомный хук для отправки GET-запросов

const endpoint = getEndpoint(); // '/data' | '/error' | '/loading'

const App = () => {
  const { data, error, isLoading } = useJsonFetch(endpoint);
  console.warn('Рендер!!!'); // NOTE: отладка !!! FIXME: почему вызывается трижды ???

  return (
    <>
      {error && <ErrorComponent error={error} />}
      {isLoading && <PendingComponent />}
      {!error && !isLoading && data && <SuccessComponent data={data} />}
    </>
  );
};

export default App;
