import { OrderActions } from "../reducers/orderReducer";

const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type tipPercentageProps = {
  tip: number;
  dispatch: React.Dispatch<OrderActions>;
};

export default function TipPercentage({ tip, dispatch }: tipPercentageProps) {
  return (
    <>
      <h3 className="font-black text-2xl">Tip:</h3>
      <form>
        {tipOptions.map((tipOption) => (
          <div className="flex gap-2" key={tipOption.id}>
            <input
              id={tipOption.id}
              name="tip"
              type="radio"
              value={tipOption.value}
              onChange={(e) => dispatch({ type: "add-tip", payload: {value: +e.target.value} })}
              checked={tipOption.value === tip}
            />
            <label htmlFor={tipOption.id}>{tipOption.label}</label>
          </div>
        ))}
      </form>
    </>
  );
}
