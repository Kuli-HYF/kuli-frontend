import "./Button.css";

export const Button = ({ title, action, color, kind }) => {
  return (
    <button type={kind} onClick={action} className={color}>
      {title}
    </button>
  );
};
