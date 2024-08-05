import { useState } from 'react';
import { Form, useActionData, useNavigation } from 'react-router-dom';

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
    <div className='mx-4'>
      <h2>Ready to order? Let's go!</h2>

      <Form method="POST">
        <div>
          <label>First Name</label>
          <input className='input' type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input className='input' type="tel" name="phone" required />
          </div>
          <p>{error?.phone}</p>
        </div>

        <div>
          <label>Address</label>
          <div>
            <input
              className="input"
              type="text"
              name="address"
              required
            />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-yellow-300 focus:outline-none focus:ring focus:ring-yellow-200 focus:ring-offset-2"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>
        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        </div>

        <div>
          <button
            disabled={isSubmitting}
            className="m-2 rounded-full bg-yellow-300 px-3 py-2 font-semibold tracking-wide transition-colors duration-300 hover:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-1 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'sending data' : 'Order now'}
          </button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
