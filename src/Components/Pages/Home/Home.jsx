import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
const Home = () => {


    useGSAP(() => {

        gsap.from('#nav-logo', {
            y: -30,
            opacity: 0,
            duration: 0.5
        })

        gsap.from('#nav-items ul li', {
            y: -60,
            delay: 0.5,
            stagger: 0.5
        })

    })



    return (
        <div>

            <div id="nav" className="flex justify-between items-center container m-auto mt-4">

                <div id="nav-logo" className="text-4xl font-extrabold">Logo</div>

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