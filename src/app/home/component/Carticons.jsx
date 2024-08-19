import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const CartIcon = ({ gbColor }) => (
  <button className="px-2 py-1 rounded-lg bg-blue-300 hover:bg-blue-200">
    <ShoppingCartIcon className={`custom-layout w-6  ${gbColor}`} />
  </button>
);

export default CartIcon;
