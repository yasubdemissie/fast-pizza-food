import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { removeItem } from './CartSlice';

function DeleteItem({id}) {

  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(removeItem(id));
  }
  return (
    <Button type="small" task={handleDelete} item={id}>
      delete
    </Button>
  );
}

export default DeleteItem;
