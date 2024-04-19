import React, { useState } from "react";
import data from "../data/cli.json";
import { useParams } from "react-router-dom";

function Cli() {
  const { id } = useParams()
  const [homework, setHomework] = useState(id? data[Number(id)] : data[0]);
  const [coin, setCoin] = useState("Flip the coin")

  const flipCoin = () => {
    const rand = Math.round(Math.random())
    if (rand == 1) {
      setCoin("Head")
    } else {setCoin("Tail")}

  }
    const abc = 'abcdefghiklmnopqrstuvwrsyz'
  return (
    <div className="h-full w-full flex flex-col md:flex-row">
      <aside className="w-full h-auto bg-white p-5 md:w-96 flex flex-col items-center">
        <div className="join join-vertical ">
          {data.map((item, key) => (
            <button key={key} className="btn join-item" onClick={() => setHomework(data[key])}>{item.name}</button>
          ))}
        </div>
        <div className="mt-10">
          <button onClick={flipCoin} className="btn btn-primary">{coin}</button>

        </div>
      </aside>
      <main className="p-4 w-full bg-base-300">
        <h2 className="text-2xl text-center my-6 font-bold">
          {homework.type}: {homework.name}
        </h2>
        <h3 className=" text-center">
          <span className="font-bold">Objective:</span>{" "}
          {homework.objective && homework.objective}
        </h3>
        {homework.sections.map((section, sectionKey) => (
          <div className="bg-base-700 mb-6">
            <h3>
              {sectionKey + 1}. {section.section}
            </h3>
            {section.questoins.map((question, key) => (
              <p className="ml-12 my-2 customLineBreak">
                {abc[key]}: {question}
              </p>
            ))}
            {section.hint && (
              <details className="dropdown">
                <summary className="m-1 btn">Hint</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  {section.hint}
                </ul>
              </details>
            )}
            <div className="divider"></div>
          </div>
        ))}
        <h2 className="text-2xl text-center my-6 font-bold">
          End of {homework.name} Assignment
        </h2>
      </main>
    </div>
  );
}

export default Cli;
