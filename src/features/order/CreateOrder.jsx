import { useState } from 'react';
import { Form, useActionData, useNavigation } from 'react-router-dom';
import Button from '../../ui/Button';
import { useSelector } from 'react-redux';
import { getCart, getTotalPrice } from '../cart/CartSlice';
import { formatCurrency } from '../../utils/helpers';
import EmptyCart from "../cart/EmptyCart";

// https://uibakery.io/regex-library/phone-number

function CreateOrder() {
  // const dispatch = useDispatch();
  const [withPriority, setWithPriority] = useState(false);
  const navigation = useNavigation();
  const error = useActionData();
  const Name = useSelector((state) => state.userReducer.userName);
  const isSubmitting = navigation.state === 'submitting';
  const cart = useSelector(getCart);
  const price = useSelector(getTotalPrice);
  
  if (cart.length === 0) return <EmptyCart />;

  return (
    <div className="mx-4">
      <h2 className="mb-5 font-semibold italic">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="my-3 grow items-center text-xs sm:flex sm:text-lg">
          <label className="sm:basis-40">First Name</label>
          <input
            className="input w-full sm:w-auto"
            type="text"
            name="customer"
            defaultValue={Name}
            required
          />
        </div>

        <div className="my-3 items-center text-xs sm:flex sm:text-lg">
          <label className="sm:basis-40">Phone number</label>
          <div>
            <input className="input w-full" type="tel" name="phone" required />
            
              {error?.phone ? <p className="my-1 rounded-lg bg-red-100 p-2 text-xs text-red-500">{error?.phone }</p> : ""}
          </div>
        </div>

        <div className="my-3 items-center text-xs sm:flex sm:text-lg">
          <label className="sm:basis-40">Address</label>
          <div>
            <input
              className="input w-full"
              type="text"
              name="address"
              required
            />
          </div>
        </div>

        <div className="my-6 flex gap-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-yellow-300 focus:outline-none focus:ring focus:ring-yellow-200 focus:ring-offset-2"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="text-xs sm:text-base" htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>
        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        </div>

        <div>
          <Button disabled={isSubmitting}>
            {isSubmitting ? 'orderig pizza...' : `Order now with ${formatCurrency(withPriority ? price * 0.2 + price : price)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
