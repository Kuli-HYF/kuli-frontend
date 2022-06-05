import "./Button.css";

export const Button = ({ title, action, color }) => {
  return (
    <button onClick={action} className={color}>
      {title}
    </button>
  );
};
