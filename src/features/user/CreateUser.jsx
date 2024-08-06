import { useState } from 'react';
import Button from '../../ui/Button';

function CreateUser() {
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="mb-3 text-sm" onSubmit={handleSubmit}>
      <p className="text-sm">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input my-4 mt-5 w-72"
      />

      {username !== '' && (
        <div>
          <Button>Start Ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
