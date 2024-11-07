import './successComponent.css';

interface ISuccessComponentProps {
  data: {
    status?: string;
  };
}

const SuccessComponent = ({ data }: ISuccessComponentProps) => {
  return (
    <div className="success">
      Success! You've got the response: {JSON.stringify(data)}
    </div>
  );
};

export default SuccessComponent;
