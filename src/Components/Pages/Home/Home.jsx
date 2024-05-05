import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useState } from "react";
const Home = () => {


    const [circleValue, setCircleValue] = useState(0)

    const randomValue = () => {
        setCircleValue(Math.floor(Math.random(circleValue) * 200))

    }

    const btn = () => {
        randomValue()
        console.log(circleValue)
    }

    useGSAP(() => {
        gsap.to(".circle", {
            x: circleValue,
            y: circleValue,
            duration: 1,

        })
    }, [circleValue])


    return (

        <div className="flex justify-center items-center h-screen">


            <div className="flex flex-col gap-10">

                <button onClick={btn} className="btn btn-md btn-success">Animated</button>

                <div className="circle w-[120px] h-[120px] bg-red-500 rounded-full "></div>

            </div>


        </div>
    );
};

export default Home;