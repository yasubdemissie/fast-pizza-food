import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type }) {
  const className = `m-2 rounded-full bg-yellow-300 px-3 py-2 font-semibold
   tracking-wide transition-colors duration-300 hover:bg-yellow-400 text-stone-800
    focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-1
     disabled:cursor-not-allowed sm:px-8 sm:py-3 ${type === 'small' ? 'text-xs' : 'sm:text-xl'} capitalize transition-all duration-9000`;

  if (to !== undefined)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}

export default Button;
