import { useState } from 'react';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;
    dispatch(updateName(username));

    setUsername('');
    navigate('/menu');
  }

  return (
    <form className="mb-3 text-sm" onSubmit={handleSubmit}>
      <p className="text-xs sm:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input my-3 w-48 text-xs sm:w-72 sm:text-base"
      />

      {username !== '' && (
        <div>
          <Button type="small">Start Ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
