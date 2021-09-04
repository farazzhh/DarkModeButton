import React from "react";

const Sections = ({ darkMode, side, src }) => {
  return (
    <section className="dark:bg-gray-600 bg-blue-100 w-screen flex items-center pb-36 lg:pb-60">
      <div className="container  mx-auto">
        <div className="min-h-96 shadow-lg rounded-xl overflow-hidden  dark:bg-gray-200 bg-white">
          <div
            className={`lg:flex  items-center h-full w-full justify-center ${
              side ? `lg:flex-row` : `lg:flex-row-reverse`
            }`}
          >
            <div className="lg:w-1/2">
              <img
                src={src}
                alt="section image"
                className=" object-contain w-full h-full"
              />
            </div>
            <div className="text-center lg:h-auto sm:h-60 flex flex-col flex-1 justify-evenly lg:justify-center items-center dark:bg-gray-200 bg-white">
              <h1 className="lg:my-8 my-4 font-bold lg:text-4xl text-2xl capitalize">
                Section header
              </h1>
              <p className="mb-4 text-gray-500 w-11/12 lg:w-3/4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                tempore recusandae nobis quod rem voluptates corporis provident
                tempora. Commodi minima est explicabo, quibusdam earum inventore
                fugit tempora aliquid. Architecto, minima.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sections;
