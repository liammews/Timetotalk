import * as React from "react"
import Layout from "../components/layout"
import Signup from "../components/signup"
import Logo from "../components/logo"


// markup
const IndexPage = () => {
  return (
    <Layout>   
      <main className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-col items-center w-full z-50">

        <Logo  />
        <h1 className="text-white text-3xl font-bold text-center mb-2 tracking-wide">Suicide is the single biggest killer of <br /> men aged under 45 in the UK.</h1>
        <h2 className="text-white text-md font-normal max-w-xl text-center mb-8">Timetotalk is a weekly email reminder to check in with yourself, and a friend.<br />This 5 minute task could save a life.</h2>
        <Signup  />

        </div>
      </main>

    </Layout>

  )
}

export default IndexPage
