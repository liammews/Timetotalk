import React from "react";

const Signup = () => {
  return (

                <div className="flex flex-row justify-center w-full">
                <form name="signup" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/thankyou">

                <input type="hidden" name="form-name" value="signup" className="w-full" />

                <div class="text-gray-700 dark:text-gray-300 flex flex-row pb-1 w-96">
                    <input class="w-96 h-10 px-3 text-base text-white placeholder-gray-400 border rounded-md rounded-r-none rounded-br-none focus:shadow-outline bg-transparent" type="email" placeholder="Email address" name="email"/>
                    <button type="submit" className="bg-white hover:bg-gray-200 rounded-md rounded-l-none border rounded-bl-none px-4 py-2 text-black font-semibold text-sm transition duration-500 ease-in-out transform">
                Join
                </button>
                </div>

                </form>
                </div>

  );
};

export default Signup;