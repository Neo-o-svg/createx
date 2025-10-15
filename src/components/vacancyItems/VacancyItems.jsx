import React from "react";
import VacancyItem from "./VacancyItem";

const vacancy_data = [
  {
    city: "New York",
    time: "Full Time",
    title: "Heavy Equipment Operator",
  },
  {
    city: "San Francisco",
    time: "Full Time",
    title: "Financial Compliance Analyst",
  },
  {
    city: "New Jersey",
    time: "Full Time",
    title: "Project Manager - Buildings",
  },
  {
    city: "New York",
    time: "Part Time",
    title: "Environment Specialist",
  },
  {
    city: "New York",
    time: "Full Time",
    title: "Accountant",
  },
];

export default function VacancyItems() {
  return (
    <div className="vacancy-items">
      <div className="container">
        {vacancy_data.map((item, ind) => {
          return (
            <VacancyItem
              key={ind}
              city={item.city}
              time={item.time}
              title={item.title}
            />
          );
        })}
      </div>
    </div>
  );
}
