import mountainsFront from '../assets/mountains_front.png';
import mountainsBehind from '../assets/mountains_behind.png';
import moon from '../assets/moon2.png';
import stars from '../assets/stars.png';

const Background = () => {
    return (
        <section>
            <img src={moon} id="moon"/>
            <img src={mountainsBehind} id="mountainsBehind"/>
            <img src={mountainsFront} id="mountainsFront"/>
            <h2 id="backgroundText">Developed by Bata</h2>
            <a href='#' className='button'>Explore</a>
            <img src={stars} id="stars"/>
        </section>
    )
}

export default Background;