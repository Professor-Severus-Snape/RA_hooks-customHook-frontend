import './errorComponent.css';

interface IErrorComponentProps {
  error: Error;
}

const ErrorComponent = ({ error }: IErrorComponentProps) => {
  return (
    <div className="error">Sorry, you've got the Error: {error.message}</div>
  );
};

export default ErrorComponent;
