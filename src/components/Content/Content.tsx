import IData from '../../models/IData';
import './content.css';

interface IContentProps {
  data: IData | null;
  loading: boolean;
  error: Error | null;
  title: string;
}

const Content = ({ data, loading, error, title }: IContentProps) => {
  return (
    <div className="content">
      <h3 className="content__title">{title}:</h3>

      {loading && (
        <div className="content__text content__text_pending">
          Still loading... Wait a moment! Please, don't go away!
        </div>
      )}

      {error && (
        <div className="content__text content__text_error">
          Sorry, you've got the Error: {error.message}
        </div>
      )}

      {data && (
        <div className="content__text content__text_success">
          Success! You've got the response: {JSON.stringify(data)}
        </div>
      )}
    </div>
  );
};

export default Content;
