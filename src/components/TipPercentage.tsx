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
  setTip: React.Dispatch<React.SetStateAction<number>>;
};

export default function TipPercentage({ tip, setTip }: tipPercentageProps) {
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
              onChange={(e) => setTip(+e.target.value)}
              checked={tipOption.value === tip}
            />
            <label htmlFor={tipOption.id}>{tipOption.label}</label>
          </div>
        ))}
      </form>
    </>
  );
}
