import PropTypes from 'prop-types';

const Display = ({ input }) => {
  return (
    <div id="display" className="bg-gray-200 text-right p-4 rounded-lg mb-4 text-2xl">
      {input}
    </div>
  );
};

Display.propTypes = {
  input: PropTypes.string.isRequired,
};

export default Display;