import style from './style.css';
import gsap from "gsap";

const GSAP = () => {


    gsap.to("#box", {
        x: 1000,
        duration: 5,
        rotate: 360,
        borderRadius: '50%',

        repeat: -1,
        yoyo: true,
    })




    return (
        <div>


            <div className='box' id='box'>

            </div>

        </div>
    );
};

export default GSAP;