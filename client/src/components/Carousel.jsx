import Carousel from 'react-bootstrap/Carousel';
import banner from '../assets/img/banner.jpg';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className=""
          src={ banner }
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="">
            <SectionHeading title="Ignite '22" style={{color: "#fff"}}/>
            <div className="title">Save the Date</div>
            <div className="subtext">
              Get ready for the world’s premier cybersecurity event. 
              <br /><strong>December 12–15, 2022</strong>
            </div>

            <Button text="Get Updates" href="/contact"/>

          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className=""
          src={ banner }
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=""
          src={ banner }
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;