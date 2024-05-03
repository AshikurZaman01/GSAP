import { gsap } from "gsap";
import style from "./style.css";

const GSAP = () => {



    gsap.from('.box', {
        y: -30,
        opacity: 0,
        duration: 1,
    })

    return (
        <div>

            <div id="#box" className="box"></div>

        </div>
    );
}

export default GSAP;
