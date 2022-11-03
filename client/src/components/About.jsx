import vtf from '../assets/img/vtf.png';
import isaca from '../assets/img/isaca.png';
import csa from '../assets/img/csa.png';
import fuel from '../assets/img/fuel.png'


function About() {

  return (
    <div className="container pageContainer">
      <div className='row'>
        <div className='col'>
          <div class="card" style={{width: "17rem"}}>
            <img src={vtf} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            
            <div class="card-body">
              <a href="/" class="card-link">Learn more</a>
            </div>
          </div>
        </div>

        <div className='col'>
          <div class="card" style={{width: "17rem"}}>
            <img src={isaca} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            
            <div class="card-body">
              <a href="/" class="card-link">Learn more</a>
            </div>
          </div>
        </div>

        <div className='col'>
          <div class="card" style={{width: "17rem"}}>
            <img src={csa} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            
            <div class="card-body">
              <a href="/" class="card-link">Learn more</a>
            </div>
          </div>
        </div>

        <div className='col'>
          <div class="card" style={{width: "17rem"}}>
            <img src={fuel} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            
            <div class="card-body">
              <a href="/" class="card-link">Learn more</a>
              
            </div>
          </div>
        </div>
      </div>
      

      
    </div>
  );
}

export default About;
