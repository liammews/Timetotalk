import React from "react"
import { Helmet } from "react-helmet"
import Footer from "./footer"

const Layout = ({ children }) => {
    
    return (
        <>
        <Helmet>
        <script async defer data-domain="timetotalk.me" src="https://plausible.io/js/plausible.js"></script>
        <title>Timetotalk</title>
        <link rel="canonical" href="http://timetotalk.me" />
        <meta name="icon" href="../images/favicon64.png" />
        </Helmet>
        
        <div className="bg-black min-h-screen title-background flex flex-col px-8">

            <main className="flex flex-row justify-center items-center min-h-screen w-full">{children}</main>

            <Footer />

          </div>
        </>
      )
    }

export default Layout