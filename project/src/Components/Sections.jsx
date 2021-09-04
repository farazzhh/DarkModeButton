import React from "react";

const Sections = ({ darkMode, side, src }) => {
  return (
    <section className="dark:bg-gray-600 bg-gray-100 w-screen flex items-center pb-36 lg:pb-60">
      <div className="container  mx-auto">
        <div className="min-h-96 shadow-lg rounded-xl overflow-hidden  dark:bg-gray-200 bg-white">
          <div
            className={`grid md:grid-cols-3 grid-rows-1 items-center h-full w-full justify-center ${
              side ? `` : ``
            }   `}
          >
            <div className="md:col-span-2 h-full">
              <img
                src={src}
                alt="section image"
                className=" object-cover w-full h-full"
              />
            </div>

            <div className=" w-11/12 mx-auto h-48  md:h-full text-center flex flex-col justify-center items-center dark:bg-gray-200 bg-white">
              <h1 className="md:my-8 my-2 font-bold md:text-2xl text-xl capitalize">
                Section header
              </h1>
              <p className="mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                laborum blanditiis libero et cumque nostrum porro,
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sections;
