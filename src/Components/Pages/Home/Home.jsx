import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const Home = () => {

    var tl = gsap.timeline();

    tl.to("#page-1 #box", {
        scale: 0,
        duration: 2,
        delay: 1,
        rotate: 360,

    })

    tl.to("#page-2 #box", {
        scale: 0,
        duration: 2,
        rotate: 360,
        scrollTrigger: 'page-2'

    })

    tl.to("#page-3 #box", {
        scale: 0,
        duration: 2,
        rotate: 360,
        scrollTrigger: 'page-3'

    })

    tl.to("#page-4 #box", {
        scale: 0,
        duration: 2,
        rotate: 360,
        scrollTrigger: 'page-4'

    })

    return (
        <div>

            <div id="page-1" className="w-[100%] h-[100vh] bg-red-400 flex justify-center items-center">
                <div id="box" className="w-[200px] h-[200px] bg-yellow-400 "></div>
            </div>

            <div id="page-2" className="w-[100%] h-[100vh] bg-blue-500 flex justify-center items-center">
                <div id="box" className="w-[200px] h-[200px] bg-yellow-400 "></div>
            </div>

            <div id="page-3" className="w-[100%] h-[100vh] bg-orange-800 flex justify-center items-center ">
                <div id="box" className="w-[200px] h-[200px] bg-yellow-400 "></div>
            </div>
            <div id="page-4" className="w-[100%] h-[100vh] bg-black text-white flex justify-center items-center">
                <div id="box" className="w-[200px] h-[200px] bg-yellow-400 "></div>
            </div>

        </div>
    );
};

export default Home;