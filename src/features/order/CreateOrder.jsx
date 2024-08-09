import { useState } from 'react';
import { Form, useActionData, useNavigation } from 'react-router-dom';
import Button from '../../ui/Button';

// https://uibakery.io/regex-library/phone-number

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const navigation = useNavigation();
  const error = useActionData();

  const isSubmitting = navigation.state === 'submitting';
  const cart = fakeCart;

  return (
    <div className="mx-4">
      <h2 className='font-semibold mb-5 italic'>Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="text-xs my-3 sm:flex grow items-center  sm:text-lg">
          <label className='sm:basis-40'>First Name</label>
          <input className="input w-full sm:w-auto" type="text" name="customer" required />
        </div>

        <div className="text-xs my-3 sm:flex items-center  sm:text-lg">
          <label className='sm:basis-40'>Phone number</label>
          <div>
            <input className="input w-full" type="tel" name="phone" required />
            <p className='bg-red-100 rounded-lg p-2 text-xs my-1 text-red-500'>{error?.phone}</p>
          </div>
        </div>

        <div className="text-xs my-3 sm:flex items-center  sm:text-lg">
          <label className='sm:basis-40'>Address</label>
          <div>
            <input className="input w-full" type="text" name="address" required />
          </div>
        </div>

        <div className='flex gap-5 my-6'>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-yellow-300 focus:outline-none focus:ring focus:ring-yellow-200 focus:ring-offset-2"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className='text-xs' htmlFor="priority">Want to yo give your order priority?</label>
        </div>
        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        </div>

        <div>
          <Button disabled={isSubmitting}>
            {isSubmitting ? 'sending data' : 'Order now'}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
