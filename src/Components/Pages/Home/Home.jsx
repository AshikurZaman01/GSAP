import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
const Home = () => {

    const gsapRef = useRef();



    useGSAP(() => {
        gsap.from(gsapRef.current, { opacity: 0, duration: 1, y: -100, ease: "power2.out" })
    })


    return (
        <div>

            <div id="nav" className="flex justify-between items-center container m-auto mt-4">

                <div ref={gsapRef} id="nav-logo" className="text-4xl font-extrabold">Logo</div>

                <div id="nav-items" className="text-3xl font-bold text-green-600">
                    <ul className="flex gap-6">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Help</li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Home;