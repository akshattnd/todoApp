import React from "react";
const Navbar: React.FC = () => {

  return (<nav className="flex items-center  flex-wrap justify-between p-4 w-full  sticky top-0 z-50  ">
    <h1 className="text-2xl md:text-4xl font-bold  md:px-4 px-2">
      Todo App
    </h1>
  </nav>
  );
}
export default Navbar;