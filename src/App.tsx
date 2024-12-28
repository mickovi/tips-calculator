import { useReducer } from "react";
import MenuItem from "./components/MenuItemRed";
import OrderContent from "./components/OrderContentRed";
import OrderTotal from "./components/OrderTotalRed";
import TipPercentage from "./components/TipPercentageRed";
import { menuItems } from "./data/db";
import { orderReducer, initialState } from "./reducers/orderReducer";

function App() {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Bill & Tip Calculator
        </h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} dispatch={dispatch} />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {state?.order.length ? (
            <>
              <OrderContent order={state.order} dispatch={dispatch} />
              <TipPercentage tip={state.tip} dispatch={dispatch} />
              <OrderTotal order={state.order} tip={state.tip} dispatch={dispatch} />
            </>
          ) : (
            <p className="text-center text-2xl">No orders yet</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
