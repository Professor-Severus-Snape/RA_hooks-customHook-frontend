import useJsonFetch from '../../hooks/useJsonFetch';
import ContentComponent from '../ContentComponent/ContentComponent';

const ErrorComponent = () => {
  const dataProps = useJsonFetch('/error');

  return <ContentComponent {...dataProps} title="Component with error:" />;
};

export default ErrorComponent;
