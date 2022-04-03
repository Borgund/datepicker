import React from "react";
import "./App.css";
import { DatePicker } from "./components/";
import { useFetch } from "usehooks-ts";
import { APIResponse } from "./types";

function App() {
  const today = new Date();
  const start = floorMinutes(today).toISOString();
  const end = floorMinutes(
    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7)
  ).toISOString();
  const url = `https://api-staging.petrus.no/api/v1/locations/12eea617-91f8-4f27-9393-8bd7e58e9b79/availability?serviceIds=%5B%2217a1577a-11ca-41ec-88b1-943a6535ad32%22%5D&startDate=${start}&endDate=${end}`;
  const { data, error } = useFetch<APIResponse>(url);

  return (
    <div className="App">
      <h1>Velg tid</h1>
      <h2>Dato</h2>
      {data && !error && (
        <DatePicker
          data={data.data}
          on_submit={(date, slot) => alert(`Selected slot: ${slot?.time}`)}
        />
      )}
    </div>
  );
}

const floorMinutes = (date: Date): Date => {
  return new Date(date.setMinutes(0, 0, 0));
};

export default App;
