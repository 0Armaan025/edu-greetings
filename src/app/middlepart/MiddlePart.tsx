import React from "react";

type Props = {};

const MiddlePart = (props: Props) => {
  return (
    <div className="middlePartDiv flex flex-col justify-center items-center bg-gray-900 min-h-screen text-white">
      <div className="smallDiv mb-6">
        <h2 className="text-lg shadow-lg cursor-pointer transition-transform mt-4 transform hover:scale-105 hover:bg-gray-500 rounded-md w-80 p-3 bg-gray-400 text-white text-center">
          It's time to greet your educators!
        </h2>
      </div>
      <h3
        className="text-4xl w-[33rem] text-center leading-snug"
        style={{ fontFamily: "Poppins" }}
      >
        Create cards for your favorite teachers with snaps!
      </h3>
      <h4
        className="mt-4 text-gray-400 text-md text-center"
        style={{ fontFamily: "Poppins" }}
      >
        Teacher's day is a special occasion for all of us to celebrate.
      </h4>
      <div className="mt-4 flex flex-row justify-center items-center">
        <input
          type="button"
          value="About"
          className="mr-4 border-[1.5px] hover:bg-white transition-all hover:text-black border-gray-200 text-sm cursor-pointer px-4 py-2 rounded-md text-white"
        />
        <input
          type="button"
          value="Create"
          className="mr-4 border-[1.5px] bg-white hover:bg-gray-700 transition-all hover:text-white border-gray-200 text-sm cursor-pointer px-4 py-2 rounded-md text-black"
        />
      </div>
      <br />
      <hr className="w-[100%] border-1 border-gray-600 mb-8" />

      {/* Feature Section */}
      <div className="featureSection flex flex-col lg:flex-row justify-center items-center text-center lg:text-left p-6 bg-gray-800 rounded-md shadow-lg">
        <div className="lg:w-1/2 p-4">
          <h3
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "Poppins" }}
          >
            Instantly Create Personalized Cards
          </h3>
          <p
            className="text-gray-300 text-lg mb-6"
            style={{ fontFamily: "Poppins" }}
          >
            Choose a template, customize it to fit your teacher's style, and
            create a card in just a few clicks. Whether you want to thank your
            math teacher or appreciate your art instructor, we've got you
            covered!
          </p>
          <input
            type="button"
            value="Get Started"
            className="mt-4 bg-green-500 hover:bg-green-600 transition-all text-white text-md cursor-pointer px-6 py-3 rounded-md"
          />
        </div>
        <div className="lg:w-1/2 p-4 ml-32  ">
          <img
            src="https://tse4.mm.bing.net/th?id=OIG1.KomrBw90bqiPLIZWfGta&w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn"
            alt="Card Creation"
            className="rounded-md shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default MiddlePart;
