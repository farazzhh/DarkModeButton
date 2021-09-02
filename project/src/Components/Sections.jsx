import React from "react";

const Sections = ({ darkMode, side, src }) => {
  return (
    <section className="dark:bg-gray-600 bg-gray-100 w-screen min-h-screen flex items-center">
      <div className="container h-96 mx-auto border-2 border-blue-400 rounded-xl shadow-md overflow-hidden bg-white dark:bg-gray-400">
        <div
          className={`flex ${
            side && `flex-row-reverse`
          } items-center h-full w-full justify-center `}
        >
          <img
            src={src}
            alt="section image"
            className="w-1/2 h-full object-cover object-center "
          />
          <div className="h-full text-center flex-col justify-around bg-white w-1/2 p-9 w-1/2 p-9">
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
