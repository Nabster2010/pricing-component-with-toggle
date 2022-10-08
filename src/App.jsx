import { useState } from "react";
import "./App.css";

const plans = {
  basic: { monthly: 29.99, annually: 199.99 },
  professional: {
    monthly: 24.99,
    annually: 249.99,
  },
  master: {
    monthly: 39.99,
    annually: 399.99,
  },
};

function App() {
  const [monthly, setMonthly] = useState(false);

  return (
    <main className="wrapper  py-16  flex flex-col justify-center items-center">
      <div>
        <header className="space-y-8">
          <h1 className="text-3xl text-center text-DarkGrayishBlue ">
            Our Pricing
          </h1>
          <div className="flex justify-center items-center gap-4 font-light text-LightGrayishBlue">
            <span>Annually</span>
            <label
              className="relative w-[48px] h-[26px] inline-block"
              htmlFor="switch"
            >
              <input
                role="button"
                checked={monthly}
                value={monthly}
                onChange={() => setMonthly(!monthly)}
                className="opacity-0 w-0 h-0 peer"
                type="checkbox"
                id="switch"
              />
              <span className="absolute peer-checked:bg-gradient-to-r from-gradientFrom to-gradientTo  inset-0 rounded-3xl bg-gradientFrom after:content-[''] after:top-[3px] after:left-[3px] after:absolute after:w-[20px] after:h-[20px] after:bg-white transition after:transition after:rounded-full peer-checked:after:translate-x-[22px] "></span>
            </label>
            <span>Monthly</span>
          </div>
        </header>
        <section className=" flex flex-col md:flex-row gap-6 md:gap-0 justify-center items-center mt-12 ">
          <div className="min-w-[320px] bg-white shadow-left rounded-lg  flex flex-col justify-center items-center text-DarkGrayishBlue text-center p-8">
            <h3>Basic</h3>
            <div className="flex  flex-col divide-y ">
              <h1 className="py-6 w-52 text-6xl">
                <small className="align-middle pr-2 text-3xl">$</small>
                {plans?.basic[monthly ? "monthly" : "annually"]?.toString()}
              </h1>
              <h3 className="py-3">500 GB Storage</h3>
              <h3 className="py-3">2 Users Allowed</h3>
              <h3 className="py-3">Send up to 3 GB</h3>
              <span className="pt-3 pb-4"></span>
            </div>
            <button className="bg-gradient-to-r hover:bg-none from-gradientFrom to-gradientTo  border border-white  hover:border-DarkGrayishBlue hover:text-gradientTo   transition-all  py-3 block w-full text-white uppercase tracking-wider rounded-md ">
              Learn More
            </button>
          </div>
          <div className="min-w-[320px] bg-gradient-to-b from-gradientFrom to-gradientTo text-white rounded-lg  flex flex-col justify-center items-center text-center px-8 py-12">
            <h3>Professional</h3>
            <div className="flex  flex-col divide-y ">
              <h1 className="py-6 w-52 text-6xl">
                <small className="align-middle pr-2 text-3xl">$</small>
                {plans?.professional[
                  monthly ? "monthly" : "annually"
                ]?.toString()}
              </h1>
              <h3 className="py-3">1 TB Storage</h3>
              <h3 className="py-3"> 5 Users Allowed</h3>
              <h3 className="py-3">Send up to 10 GB</h3>
              <span className="pt-3 pb-4"></span>
            </div>
            <button className=" bg-white text-gradientTo border border-transparent hover:bg-transparent hover:text-white hover:border-white transition-all  py-3 block w-full  uppercase tracking-wider rounded-md ">
              Learn More
            </button>
          </div>
          <div className="min-w-[320px] bg-white shadow-right rounded-lg  flex flex-col justify-center items-center text-DarkGrayishBlue text-center p-8">
            <h3>Master</h3>
            <div className="flex  flex-col divide-y ">
              <h1 className="py-6 w-52 text-6xl">
                <small className="align-middle pr-2 text-3xl">$</small>
                {plans?.master[monthly ? "monthly" : "annually"]?.toString()}
              </h1>
              <h3 className="py-3">2 TB Storage</h3>
              <h3 className="py-3">10 Users Allowed</h3>
              <h3 className="py-3">Send up to 20 GB</h3>
              <span className="pt-3 pb-4"></span>
            </div>
            <button className="bg-gradient-to-r  border border-white  hover:border-DarkGrayishBlue hover:text-gradientTo hover:from-white hover:to-white from-gradientFrom to-gradientTo transition-all  py-3 block w-full text-white uppercase tracking-wider rounded-md ">
              Learn More
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
