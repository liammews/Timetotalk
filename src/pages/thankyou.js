import * as React from "react"
import Layout from "../components/layout"
import Logo from "../components/logo"


// markup
const Thankyou = () => {
  return (
    <Layout>   
      <main className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-col items-center w-full z-50">

        <Logo  />
        <h1 className="text-white text-3xl font-bold text-center mb-2 tracking-wide">Thank you for signing up.</h1>
        <h2 className="text-white text-md font-normal max-w-xl text-center mb-8">You should have recieved our confirmation email,<br /> if you haven't please check your spam.</h2>

        </div>
      </main>

    </Layout>

  )
}

export default Thankyou
