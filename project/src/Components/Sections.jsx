import React from "react";

const Sections = ({ darkMode, side, src }) => {
  return (
    <section className="dark:bg-gray-600 bg-gray-100 w-screen flex items-center py-16">
      <div className="container  mx-auto">
        <div className="min-h-96 shadow-lg rounded-xl overflow-hidden  dark:bg-gray-200 bg-white">
          <div
            className={`flex flex-col items-center h-full w-full justify-center ${
              side ? `md:flex-row-reverse` : `md:flex-row`
            }   `}
          >
            <img
              src={src}
              alt="section image"
              className="md:w-1/2 w-full h-1/2 md:h-full object-cover object-center "
            />
            <div className="p-3 md:w-1/2 w-full h-1/2 md:h-full  text-center flex-col justify-around items-center dark:bg-gray-200 bg-white">
              <h1 className="md:mb-8 mb-2 font-bold md:text-2xl text-xl capitalize">
                Section header
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                laborum blanditiis libero et cumque nostrum porro, excepturi quo
                expedita culpa doloribus ab similique accusamus dolorem
                provident veniam praesentium facilis recusandae!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sections;
