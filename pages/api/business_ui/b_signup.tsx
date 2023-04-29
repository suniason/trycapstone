import React, { useEffect, useState } from "react"

const BusinessSignup:React.FC = () => {
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
            </div>
        );
    }
    //for web
    else if(window.innerWidth>=600)
    {
        ui = (
            <div className="grid grid-cols-[50%_50%] w-full overflow-x-hidden">
                <div className="flex items-center m-[5rem]">
                    <div>
                        <div className="mb-[1.5rem]">
                            <div className="font-[600] text-[3.5rem] tracking-[.5rem]">
                                WELCOME 
                            </div>
                            <div className="font-[600] text-[2.25rem] tracking-[.45rem]">
                                Sign up with us
                            </div>
                            <div className="font-[600] tracking-[.1rem]">
                                Manage customer support with the help of AI
                            </div>
                        </div>
                        <div className="my-[.5rem] font-[400]">
                            <div className="py-[.5rem]">Email</div>
                            <input type="text" className="outline outline-1 outline-[#2B99FF] rounded-[.5rem] px-[.7rem] w-[20rem] p-[.2rem]"></input>
                        </div>
                        <div className="my-[.5rem] font-[400]">
                            <div className="py-[.5rem]">Password</div>
                            <input type="password" className="outline outline-1 outline-[#2B99FF] rounded-[.5rem] px-[.7rem] w-[20rem] p-[.2rem]"></input>
                        </div>
                        <div className="my-[.5rem] font-[400]">
                            <div className="py-[.5rem]">Verify Password</div>
                            <input type="password" className="outline outline-1 outline-[#2B99FF] rounded-[.5rem] px-[.7rem] w-[20rem] p-[.2rem]"></input>
                        </div>
                        <div className="my-[.5rem] font-[400]">
                            <div className="py-[.5rem]">Business Name</div>
                            <input type="text" className="outline outline-1 outline-[#2B99FF] rounded-[.5rem] px-[.7rem] w-[20rem] p-[.2rem]"></input>
                        </div>
                        <div className="grid grid-cols-[42%_42%]">
                            <div className="my-[.5rem] font-[400]">
                                <div className="py-[.5rem]">Business Size</div>
                                <input type="text" className="outline outline-1 outline-[#2B99FF] rounded-[.5rem] px-[.7rem] w-[9rem] p-[.2rem]"></input>
                            </div>
                            <div className="my-[.5rem] font-[400]">
                                <div className="py-[.5rem]">Business Type</div>
                                <input type="text" className="outline outline-1 outline-[#2B99FF] rounded-[.5rem] px-[.7rem] w-[9rem] p-[.2rem]"></input>
                            </div>
                        </div>
                        
                        <div className="mt-[3rem] font-[600]">
                            <button onClick={clicked} className="w-[10rem] bg-[#D9D9D9] px-[1.5rem] py-[.3rem] font-[600] text-[.8rem] rounded-[.3rem]">Proceed</button>
                        </div>
                    </div>
                </div>
                <div className="relative w-full">
                    <div className="absolute right-[0] bottom-0 z-[-10]">
                            <img src="/bsignupvector.png" alt="vector" className="pointer-events-none"/> 
                    </div>
                    <div className="absolute right-[5rem] bottom-[8rem] top-[8rem] z-[10]">
                            <img src="/bsignupimage.png" alt="image" className="pointer-events-none "/>
                    </div> 
                </div>
            </div>
        );
    }
    return(
        <div className="flex h-[100vh] font-poppins">
            {ui}
        </div>
    )
}

export default BusinessSignup