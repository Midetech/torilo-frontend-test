import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

const Layout = ({ children }) => {
  const [toggle, setToggle] = React.useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  console.log(toggle);
  return (
    <div className="bg-[#F7F8FA] w-full overflow-hidden">
      <Header handleToggle={handleToggle} toggle={toggle} />
      <div className="flex w-full">
        <Sidebar toggle={toggle} handleToggle={handleToggle} />
        <main className="bg-transparent h-screen w-full overflow-scroll md:ml-[13rem] lg:ml-0">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
