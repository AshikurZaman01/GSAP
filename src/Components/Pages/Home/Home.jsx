import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
const Home = () => {


    useGSAP(() => {
        gsap.from('.box', {
            y: 30,
            opacity: 0,
            duration: 1,
            rotate: 720,

        })
    }, { scope: ".contan1" })






    return (
        <div className="container mx-auto flex gap-10 justify-center items-center h-screen">

            <div className="contan1 border border-black p-20">
                <div className="circle w-[200px] h-[200px] bg-yellow-300 rounded-full"></div>
                <div className="box w-[200px] h-[200px] bg-red-400"></div>
            </div>

            <div className="contan2">
                <div className="circle w-[200px] h-[200px] bg-yellow-300 rounded-full"></div>
                <div className="box w-[200px] h-[200px] bg-red-400"></div>
            </div>

        </div>
    );
};

export default Home;