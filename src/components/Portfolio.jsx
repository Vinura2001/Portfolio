import React from "react";


import studentprogress from "../assets/portfolio/Student Progress.png";
import queuemanagement from "../assets/portfolio/queuemanagement.png";
import dreamio from "../assets/portfolio/dreamio.png";
import shoppingcart from "../assets/portfolio/shoppingcart.png";
import mindphix from "../assets/portfolio/mindphix.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: studentprogress,
      codeLink: "https://github.com/Vinura2001/Student_Progress",
    },
    {
      id: 2,
      src: queuemanagement,
      codeLink: "https://github.com/Vinura2001/Queue_Management",
    },
    {
      id: 3,
      src: dreamio,
      codeLink: "https://github.com/Vinura2001/Dreamio_site",
    },
    {
      id: 4,
      src: shoppingcart,
      codeLink: "https://github.com/Vinura2001/ShoppingCartSystem",
    },
    {
      id: 5,
      src: mindphix,
      codeLink: "https://github.com/Vinura2001/MindPhix",
    },
  ];

  return (
    <div
      name="portfolio"
      className="w-full text-white bg-gradient-to-b from-black to-gray-800 md:h-screen"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid gap-8 px-12 sm:grid-cols-2 md:grid-cols-3 sm:px-0">
          {portfolios.map(({ id, src, codeLink }) => (
            <div key={id} className="rounded-lg shadow-md shadow-gray-600">
              <img
                src={src}
                alt=""
                className="duration-200 rounded-md hover:scale-105"
              />
              <div className="flex items-center justify-center">
              
                <a href={codeLink} target="_blank" >
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
