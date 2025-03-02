import { useSelector } from 'react-redux';
import Button from './Button';
import CreateUser from '../features/user/CreateUser';
function Home() {
  const Name = useSelector((state) => state.userReducer.userName);

  return (
    <div className="mt-3 text-center text-stone-800">
      <h1 className="mb-8 text-sm font-semibold sm:text-xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {Name ? (
        <Button to="/menu">
          Menu
        </Button>
      ) : (
        <CreateUser />
      )}
    </div>
  );
}

export default Home;
