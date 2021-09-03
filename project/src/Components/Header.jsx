import React from "react";

const Header = () => {
  return (
    <header className="dark:bg-gray-600 bg-gray-100 w-screen pt-12 pb-48">
      <div className="container mx-auto">
        <div className="max-w-90 flex jusitify-center items-center">
          <img src="./assets/logo.png" className="w-1/2 lg:w-96 " alt="logo" />
          <div className="py-6 px-2 md:py-12  rounded-xl shadow-xl text-center flex-col justify-around items-center dark:bg-gray-200 bg-white">
            <h1 className="capitalie lg:text-3xl text-xl mb-3 md:mb-6">
              Welcome to <strong>FRZH</strong> site
            </h1>
            <p className="capitalize lg:text-base lg:w-3/4 mx-auto text-sm">
              my name is faraz and you can see my project here! in this project
              i used create-react-app and tailwind
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
