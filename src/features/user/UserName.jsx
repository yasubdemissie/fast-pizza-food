import { useSelector } from 'react-redux';

function UserName() {
  const name = useSelector((state) => state.userReducer.userName);

  if (!name) return null;
  return (
    <div className="hidden text-sm font-semibold capitalize italic text-yellow-50 sm:block sm:text-xl">
      {name}
    </div>
  );
}

export default UserName;
