import React from "react";
import { FaTwitter } from "react-icons/fa"

const Signup = () => {
  return (

                <footer className="flex flex-row justify-between w-full pb-8 items-end">

                    <div>
                        <p className="text-gray-200 text-sm">A project by <a href="https://liammews.com" className="font-bold hover:text-blue-300 transition duration-500 ease-in-out">Liam Mews</a></p>
                    </div>

                    <div className="flex flex-col items-end">
                        <div><a href="https://twitter.com/timetotalk_"><p className="text-white text-xl mb-2 hover:text-blue-300 transition duration-500 ease-in-out"><FaTwitter /></p></a></div>
                        <div><p className="text-gray-200 text-sm">© Timetotalk - 2021</p></div>
                    </div>

                </footer>

  );
};

export default Signup;