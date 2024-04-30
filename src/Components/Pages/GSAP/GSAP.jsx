import style from './style.css';
import gsap from "gsap";

const GSAP = () => {


    gsap.to('h1', {
        fontSize: '100px',
        color: 'blue',
        duration: 5
    })

    gsap.from('h1', {
        fontSize: '50px',
        color: 'red',
        delay: 5
    })


    return (
        <div>


            <div className='box' id='box'>
                <h1>Hello Im piyal</h1>
                <h1>Im Web Developer</h1>
                <h1>Photograpper</h1>
            </div>

        </div>
    );
};

export default GSAP;