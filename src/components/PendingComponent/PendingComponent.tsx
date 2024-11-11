import useJsonFetch from '../../hooks/useJsonFetch';
import ContentComponent from '../ContentComponent/ContentComponent';

const PendingComponent = () => {
  const props = useJsonFetch('/loading');

  return <ContentComponent {...props} title="Component with loading:" />;
};

export default PendingComponent;
