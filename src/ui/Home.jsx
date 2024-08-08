import CreateUser from '../features/user/CreateUser';
function Home() {
  return (
    <div className="mt-3 text-center text-stone-800">
      <h1 className="mb-8 text-sm sm:text-xl font-semibold">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
