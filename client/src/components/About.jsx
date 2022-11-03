import bg from '../assets/img/speaker.jpg';


function About() {

  return (
    <div className="container pageContainer">
      <div className='row'>
        <div className='col'>
          <div class="card" style={{width: "18rem"}}>
            <img src={bg} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            
            <div class="card-body">
              <a href="/" class="card-link">Card link</a>
              <a href="/" class="card-link">Another link</a>
            </div>
          </div>
        </div>

        <div className='col'>
          <div class="card" style={{width: "18rem"}}>
            <img src={bg} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            
            <div class="card-body">
              <a href="/" class="card-link">Card link</a>
              <a href="/" class="card-link">Another link</a>
            </div>
          </div>
        </div>

        <div className='col'>
          <div class="card" style={{width: "18rem"}}>
            <img src={bg} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            
            <div class="card-body">
              <a href="/" class="card-link">Card link</a>
              <a href="/" class="card-link">Another link</a>
            </div>
          </div>
        </div>
      </div>
      

      
    </div>
  );
}

export default About;
