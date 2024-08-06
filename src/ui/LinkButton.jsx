import { Link, useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";

function LinkButton({ to, children }) {
  const navigate = useNavigate();

  const className = 'text-blue-500 hover:text-blue-700 hover:underline';

  if (to === '-1')
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
}

LinkButton.PropTypes = {
  to: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.string),
};

export default LinkButton;
