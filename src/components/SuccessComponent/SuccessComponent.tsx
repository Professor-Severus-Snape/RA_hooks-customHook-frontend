import useJsonFetch from '../../hooks/useJsonFetch';
import ContentComponent from '../ContentComponent/ContentComponent';

const SuccessComponent = () => {
  const dataProps = useJsonFetch('/data');

  return <ContentComponent {...dataProps} title="Succeeded Component:" />;
};

export default SuccessComponent;
