import PropTypes from "prop-types";

export default function Button({ type, onClick, children, background, color }) {
  const style = {
    backgroundColor: background,
    color,
  };
  return (
    <button
      type={type}
      onClick={() => onClick()}
      style={background && color ? style : {}}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node,
    background: PropTypes.string,
    color: PropTypes.string,
};

Button.defaultProps = {
  type: "button",
  onClick: () => {},
};
