import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, task, item }) {
  const className = `${`mt-2 mb-1 rounded-full bg-yellow-300 sm:font-semibold ${type === "change" ? "px-[8px] sm:px-[16px] sm:py-0" : "" } 
   sm:tracking-wide transition-colors duration-300 hover:bg-yellow-400 text-stone-800
    focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-1
     disabled:cursor-not-allowed sm:px-8 sm:py-3 
     ${type === 'small' ? 'text-[8px] sm:text-base py-0.5 px-2' : 'sm:text-xl px-3 py-1'} 
     capitalize transition-all duration-9000`}`;

  if (to !== undefined)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  if (task) {
    return (
      <button onClick={() => task(item)} disabled={disabled} className={className}>
        {children}
      </button>
    );
  }
  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}

export default Button;
