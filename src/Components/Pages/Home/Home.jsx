import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
const Home = () => {


    useGSAP(() => {
        gsap.from('#box', {
            y: -50,
            opacity: 0,
            duration: 2
        })
    })



    return (
        <div>

            <div id="box" className="w-[200px] h-[200px] bg-yellow-400 rounded-full mt-20">

            </div>

        </div>
    );
};

export default Home;