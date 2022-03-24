import React, { FormEvent, useState } from "react";

import Header from "../components/Header";

export default function Balance() {
  const [values, setvalues] = useState({
    meter: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <Header title="Check balance" />
      <div className="w-full mx-auto max-w-lg p-10 my-10 border rounded">
        <div className="pb-8">
          <h2 className="font-semibold text-3xl">Check balance</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="py-2">
            <label htmlFor="" className="text-base">
              Meter number
            </label>
            <input
              required
              value={values.meter}
              onChange={(e) => setvalues({ ...values, meter: e.target.value })}
              type="number"
              placeholder="Meter number"
              className="focus:outline-none text-base block w-full px-4 py-3 mt-2 focus:border-blue-500 rounded border-2"
            />
          </div>
          <div className="py-4">
            <button
              type="submit"
              className="py-3 rounded-lg px-10 bg-blue-600 text-white font-semibold hover:bg-blue-700 "
            >
              Check balance
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
