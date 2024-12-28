import { formatCurrency } from "../helpers";
import { MenuItem, OrderItem } from "../types";

type OrderContentProps = {
  order: OrderItem[];
  removeItem: (id: MenuItem["id"]) => void;
};

export default function OrderContent({ order, removeItem }: OrderContentProps) {
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
              onClick={() => removeItem(item.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
