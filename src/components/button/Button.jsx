import "./Button.css";

export const Button = ({ title, action }) => {
  return (
    <button onClick={action} className="btn">
      {title}
    </button>
  );
};
