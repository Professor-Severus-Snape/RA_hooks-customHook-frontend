import Component from './components/Component/Component';

const App = () => {
  return (
    <>
      <Component title="error" path="/error" />
      <Component title="load" path="/loading" />
      <Component title="data" path="/data" />
    </>
  );
};

export default App;
