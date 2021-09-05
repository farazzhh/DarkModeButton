import React from "react";

const Header = () => {
  return (
    <header className="dark:bg-gray-600 bg-blue-100 w-screen pt-12 pb-48">
      <div className="container mx-auto">
        <div className="w-11/12 mx-auto flex flex-col lg:flex-row jusitify-center items-center">
          <img src="./assets/logo.png" className="w-1/2 lg:w-96 " alt="logo" />
          <div className="lg:w-1/2 mx-auto py-6 px-2 md:py-12 rounded-xl shadow-xl text-center flex-col justify-around items-center dark:bg-gray-200 bg-white">
            <p className="my-1 mb-5 lg:text-2xl text-xl">
              Welcome to{" "}
              <span className="capitalie lg:text-4xl font-bold text-2xl">
                FRZH
              </span>
              <small className="text-base">site</small>
            </p>
            <p className="capitalize text-sm sm:w-3/4 md:text-base w-11/12 mx-auto text-gray-500">
              My name is FARAZ and you can see my project here! in this project
              i used create-react-app and tailwind. With the Button in
              Navbar, you can switch between Day and Night Mode
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
