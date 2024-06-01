import PropTypes from 'prop-types'

const Button = ({ id, value, onClick, className }) => {
	return (
		<button
			id={id}
			className={`p-4 rounded ${className}`}
			onClick={() => onClick(value)}
		>
			{value}
		</button>
	);
};

Button.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
