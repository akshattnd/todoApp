import React from "react";
const Footer: React.FC = () => {
  return (
    <div className="fixed bottom-0 w-full flex items-center justify-center  p-4" >
      <p className="text-lg text-center p-1 mx-auto">
        © Portfolio Developed by{" "}
        <a
          target="_blank"
          className="text-[#1230AE] cursor-pointer"
          href="https://www.linkedin.com/in/akshat-tandon-a29190242/"
        >
          Akshat Tandon{" "}
        </a>
      </p>
    </div>);
}
export default Footer;