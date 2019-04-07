import React from 'react';
import PropTypes from 'prop-types';


function showNotImplemented() {
  console.log();
}

const CalcButton = (props) => {
  const { className, children, onClick,} = props;
  const extraClass = className || '';
  return (
    <button
      className={`calc-btn ${extraClass}`}
      onClick={onClick.bind(this, children,)}
    >
      {children}
    </button>
  );
};


CalcButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

CalcButton.defaultProps = {
  onClick: showNotImplemented,
};

export default CalcButton;
