import useJsonFetch from '../../hooks/useJsonFetch';
import Content from '../Content/Content';

const Component = ({ path, title }: { path: string; title: string }) => {
  const dataProps = useJsonFetch(path);

  return <Content {...dataProps} title={title} />;
};

export default Component;
