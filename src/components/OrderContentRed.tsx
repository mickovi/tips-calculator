import { formatCurrency } from "../helpers";
import { OrderActions } from "../reducers/orderReducer";
import { OrderItem } from "../types";

type OrderContentProps = {
  order: OrderItem[];
  dispatch: React.Dispatch<OrderActions>
};

export default function OrderContent({ order, dispatch }: OrderContentProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumption</h2>
      <div className="space-y-3 mt-10">
        {order.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
          >
            <div>
              <p className="text-lg">
                {item.name} - {formatCurrency(item.price)}
              </p>
              <p className="font-black">
                Quantity: {item.quantity} -{" "}
                {formatCurrency(item.quantity * item.price)}
              </p>
            </div>
            <button
              className="bg-red-600 h-6 w-6 rounded-full text-white"
              onClick={() => dispatch({ type: "remove-item", payload: {id: item.id} })}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
