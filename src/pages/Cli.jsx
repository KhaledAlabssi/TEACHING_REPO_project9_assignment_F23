import React, { useState } from "react";
import data from "../data/cli.json";

function Cli() {
    const [homework, setHomework] = useState(data[0]);
    const abc = 'abcdefghiklmnopqrstuvwrsyz'
  return (
    <div className="h-full w-full bg-slate-500 flex flex-col md:flex-row">
      <aside className="w-full h-auto bg-white p-5 md:w-96 flex justify-center">
        <div className="join join-vertical ">
          {data.map((item) => (
            <button className="btn join-item">{item.name}</button>
          ))}
        </div>
      </aside>
      <main className="p-4 w-full ">
        <h2 className="text-2xl text-center my-6">
          Assignment: {homework.name}
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
              <div className="ml-12 my-2">
                {abc[key]}: {question}
              </div>
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
      </main>
    </div>
  );
}

export default Cli;
