import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
};

export default function OrderTotal({ order, tip, placeOrder }: OrderTotalProps) {
  const subtotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );
  const tipAmount = useMemo(() => subtotalAmount * tip, [subtotalAmount, tip]);
  const totalAmount = useMemo(
    () => subtotalAmount + tipAmount,
    [subtotalAmount, tipAmount]
  );
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Total and Tip</h2>
        <p>
          Subtotal: {""}
          <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
        </p>
        <p>
          Tips: {""}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total: {""}
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>
      <button
        className={"rounded-lg w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-30"}
        disabled={totalAmount === 0}
        onClick={placeOrder}
      >
        Save Order
      </button>
    </>
  );
}
