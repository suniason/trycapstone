import React, { useEffect, useState } from "react"

const BusinessLogin:React.FC = () => {
    let ui;

    // make the ui responsive
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    const setWindow = () => {
        setWindowWidth(window.innerWidth)
        console.log(window.innerWidth)
      }
    useEffect(() => {
        window.addEventListener('resize', setWindow);
        return () => {
          window.removeEventListener('resize', setWindow)
        }
      }, [])


    //   functions below

    const clicked = () => {
        alert("clicked");
    }

    // for mobile
    if (window.innerWidth<600) {
        ui = (
            <div>
                {/* title */}
                <div className="text-center text-[5rem] font-[600] tracking-[1rem]">
                    LOGIN
                </div>
                {/* oneliner */}
                <div className="text-center font-[500]">
                    Manage customer support with the help of AI
                </div>
                {/* email */}
                <div className="my-[2.5rem] font-[400]">
                    <div className="py-[.7rem]">Email</div>
                    <input type="text" className="outline outline-1 outline-[#2B99FF] rounded-[.5rem] px-[.7rem] w-[25rem] p-[.2rem]"></input>
                </div>
                {/* password */}
                <div className="my-[2.5rem] font-[400]">
                    <div className="py-[.7rem]">Password</div>
                    <input type="password" className="outline outline-1 outline-[#2B99FF] rounded-[.5rem] px-[.7rem] w-[25rem] p-[.2rem]"></input>
                </div>
                {/* forgetpass */}
                <div>
                <div className="text-[#2B99FF] text-[.85rem]">Forget Password?</div>
                </div>
                {/* button */}
                <div className="text-center my-[2rem] font-[600] ">
                <button onClick={clicked} className="w-[10rem] bg-[#D9D9D9] px-[2rem] py-[.5rem]">LOGIN</button>
                </div>
            </div>
        );
    }
    //for web
    else if(window.innerWidth>=600)
    {
        ui = (
            <div>
                {/* title */}
                <div className="text-center text-[5rem] font-[600] tracking-[1rem]">
                    LOGIN
                </div>
                {/* oneliner */}
                <div className="text-center font-[500]">
                    Manage customer support with the help of AI
                </div>
                {/* email */}
                <div className="my-[2.5rem] font-[400]">
                    <div className="py-[.7rem]">Email</div>
                    <input type="text" className="outline outline-1 outline-[#2B99FF] rounded-[.5rem] px-[.7rem] w-[25rem] p-[.2rem]"></input>
                </div>
                {/* password */}
                <div className="my-[2.5rem] font-[400]">
                    <div className="py-[.7rem]">Password</div>
                    <input type="password" className="outline outline-1 outline-[#2B99FF] rounded-[.5rem] px-[.7rem] w-[25rem] p-[.2rem]"></input>
                </div>
                {/* forgetpass */}
                <div>
                <div className="text-[#2B99FF] text-[.85rem]">Forget Password?</div>
                </div>
                {/* button */}
                <div className="text-center my-[2rem] font-[600] ">
                <button onClick={clicked} className="w-[10rem] bg-[#D9D9D9] px-[2rem] py-[.5rem] rounded-[.3rem]">LOGIN</button>
                </div>
            </div>
        );
    }
    return(
        <div className="flex justify-center items-center min-h-[100vh] font-poppins">
            {ui}
        </div>
    )
}

export default BusinessLogin