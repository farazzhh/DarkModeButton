import React from "react";

const Sections = ({ darkMode,side }) => {
  return (
    <section className="dark:bg-gray-600 bg-gray-100 w-screen py-16">
      <div className="container mx-auto border-2 border-blue-400 rounded bg-white dark:bg-gray-400">
        <div
          className={`flex ${
            side && `flex-row-reverse`
          } items-center h-full w-full justify-center `}
        >
          <img src="./assets/logo.png" alt="section image " />
          <div className="text-center rounded-xl bg-white w-1/2 p-9 dark:bg-gray-100">
            <h1 className="mb-8 font-bold text-2xl capitalize">
              Section header
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              laborum blanditiis libero et cumque nostrum porro, excepturi quo
              expedita culpa doloribus ab similique accusamus dolorem provident
              veniam praesentium facilis recusandae!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sections;
