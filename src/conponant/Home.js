import home1 from '../image/hero-right.png';
import home2 from '../image/hero-right-2.png';
import home3 from '../image/hero-right-3.png';
import im1 from '../image/wtsh.jpg';
import im2 from '../image/tsh.png';
import im4 from '../image/jact.jpg';
import Limit from './Limit';
import srv1 from '../image/HIW1img.webp';
import srv2 from '../image/HIW2img.webp';
import srv3 from '../image/HIW3img.webp';
import srv4 from '../image/HIW4img.webp';
import phot from '../image/rightLargeImg.webp';
import exm1 from '../image/explore1.webp';
import sc1 from '../image/sc1.jpg';
import exm2 from '../image/explore2.webp';
import sc2 from '../image/sc2.jpg';
import exm3 from '../image/explore3.webp';
import sc3 from '../image/sc3.jpg';
import exm4 from '../image/explore9.webp';
import sc4 from '../image/sc4.jpg';
import exm5 from '../image/explore5.webp';
import sc5 from '../image/sc5.jpg';
import exm6 from '../image/explore6.webp';
import sc6 from '../image/sc6.jpg';
import graph from '../image/Choosing clothes-bro.png';
import opin1 from '../image/1 (2).jpg';
import opin2 from '../image/hero.jpg';
import opin3 from '../image/testimonial-1.jpg';
function Home ()
{
  
  return(
     <>
<section className="Home-1 mb-5">
<div id="carouselExampleCaptions" className="carousel slide home-caru">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={home1} className="d-block wow slideInRight" data-wow-duration="2s" alt="..."/>
      <div className="carousel-caption wow slideInLeft" data-wow-duration="2s">
      <p className='mb-4 text-dark'>🔥 In this season, find the best </p>
       <h2 className='mb-4 text-dark'>Exclusive collection for<br/> everyone</h2>
       <button className='btn btn-dark p-3'>Explore Now <i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
    </div>
    <div className="carousel-item">
      <img src={home2} className="d-block wow slideIn wow slideInRight" data-wow-duration="2s" alt="..."/>
      <div className="carousel-caption wow slideInLeft" data-wow-duration="2s">
      <p className='mb-4 text-dark'>🔥 In this season, find the best </p>
       <h2 className='mb-4 text-dark'>Exclusive collection for<br/> everyone</h2>
       <button className='btn btn-dark p-3'>Explore Now <i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
    </div>
    <div className="carousel-item">
      <img src={home3} className="d-block wow slideInRight" data-wow-duration="2s" alt="..."/>
      <div className="carousel-caption wow slideInLeft" data-wow-duration="2s">
      <p className='mb-4 text-dark'>🔥 In this season, find the best </p>
       <h2 className='mb-4 text-dark'>Exclusive collection for<br/> everyone</h2>
       <button className='btn btn-dark p-3'>Explore Now <i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev carus-but-1" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next carus-but-2 " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</section> 
<section className='mb-5'>
<div className='container'>
<div className='row'>
<div className='col-lg-4 mb-3'>
<div className='item'>
<img src={im1} alt='f-card' className='img-fluid'></img>
</div>  
</div>  
<div className='col-lg-4 mb-3'>
<div className='item'>
<img src={im2} alt='f-card' className='img-fluid'></img>
</div>  
</div> 
<div className='col-lg-4 mb-3'>
<div className='item'>
<img src={im4} alt='f-card' className='img-fluid'></img>
</div>  
</div> 
</div>
</div>  
</section>
 <Limit/>

<section className='py-5'>
<div className='container pb-5'>
<hr/>
<div className='row'>
<div className='col-lg-3 mb-3'>
<div className='serv-item'>
<img src={srv1} alt='service' className='img-fluid w-50'></img>  
<p className='py-2 pc-1'>Step 1</p>
<h5 className='pb-3'>Filter & Discover</h5>
<p className='p-srv'>Smart filtering and suggestions make it easy to find</p>
</div>
</div>  
<div className='col-lg-3 mb-3'>
<div className='serv-item'>
<img src={srv2} alt='service' className='img-fluid w-50'></img>  
<p className='py-2 pc-2'>Step 2</p>
<h5 className='pb-3'>Add to bag</h5>
<p className='p-srv'>Easily select the correct items and add them to the cart</p>
</div>
</div> 
<div className='col-lg-3 mb-3'>
<div className='serv-item'>
<img src={srv3} alt='service' className='img-fluid w-50'></img>  
<p className='py-2 pc-3'>Step 3</p>
<h5 className='pb-3'>Fast shipping</h5>
<p className='p-srv'>The carrier will confirm and ship quickly to you</p>
</div>
</div> 
<div className='col-lg-3 mb-3'>
<div className='serv-item'>
<img src={srv4} alt='service' className='img-fluid w-50'></img>  
<p className='py-2 pc-1'>Step 4</p>
<h5 className='pb-3'>Filter & Discover</h5>
<p className='p-srv'>Smart filtering and suggestions make it easy to find</p>
</div>
</div> 
</div>
</div>  
</section>
<section className='py-5 cast'>
<div className='container'>
<hr/>
<div className='row pt-5'>
<div className='col-lg-5 mb-4 divid-tow'>
<div className=''>
<h2 className='pb-3'>A-shope</h2>
<h2 className='fon-bag pb-3'>Earn free money
with Ciseco</h2>
<p className='py-3 p-d-c'>With Ciseco you will get freeship & savings combo...</p>
<button className='btn btn-dark mx-3 but py-3'>Savings combo</button>
<button className='btn btn-light mx-3 but py-3'>Discover more</button>
</div>  
</div> 
<div className='col-lg-7 mb-4 pr-5'>
<div className=''>
<img src={phot} alt='image'></img>
</div>  
</div>
</div>
</div>  
</section>

<section className='py-5 filter mb-5'>
<div className='container'>
<div className='cotant text-center'>
<h2 className='mb-5  pt-5 bg'>Start exploring.</h2>  
<div className='butns py-3'>
<button className='bt m-2'><i class="fa-solid fa-venus mx-2"></i>Woman</button>  
<button className='bt m-2 actv'><i class="fa-solid fa-mars mx-2"></i>Man</button> 
<button className='bt m-2'><i class="fa-solid fa-hands-holding-child mx-2"></i>Kids</button> 
<button className='bt m-2'><i class="fa-solid fa-dumbbell mx-2"></i>Sports</button> 
<button className='bt m-2'><i class="fa-solid fa-crown mx-2"></i>Beauty</button> 
<button className='bt m-2'><i class="fa-regular fa-gem mx-2"></i>Jewelry</button> 
</div>
</div>
<div className='row mt-5'>
<div className='col-lg-4 mb-3'>
<div className='bg-white item-sec-5 p-3'>
<div className='it-two pb-4'>
<img src={exm1} alt='image' className='img-fluid'/>
<p>150 Products</p>
</div> 
<p className='p-sec-5'>Manufacturar</p>
<h4 className='pb-4'>Backpack</h4>
<button className='btn crd-but'>See Collection<i class="fa-solid fa-arrow-right-long mx-2"></i></button>
<img src={sc1} alt='image' className='img-flud cr-img'/>
</div>
</div>  
<div className='col-lg-4 mb-3'>
<div className='bg-white item-sec-5 p-3'>
<div className='it-two pb-4'>
<img src={exm2} alt='image' className='img-fluid'/>
<p>120 Products</p>
</div> 
<p className='p-sec-5'>Manufacturar</p>
<h4 className='pb-4'>Shose</h4>
<button className='btn crd-but'>See Collection<i class="fa-solid fa-arrow-right-long mx-2"></i></button>
<img src={sc2} alt='image' className='img-flud cr-img'/>
</div>
</div> 
<div className='col-lg-4 mb-3'>
<div className='bg-white item-sec-5 p-3'>
<div className='it-two pb-4'>
<img src={exm3} alt='image' className='img-fluid'/>
<p>100 Products</p>
</div> 
<p className='p-sec-5'>Manufacturar</p>
<h4 className='pb-4'>Recycled Blanket</h4>
<button className='btn crd-but'>See Collection<i class="fa-solid fa-arrow-right-long mx-2"></i></button>
<img src={sc3} alt='image' className='img-flud cr-img'/>
</div>
</div> 
<div className='col-lg-4 mb-3'>
<div className='bg-white item-sec-5 p-3'>
<div className='it-two pb-4'>
<img src={exm4} alt='image' className='img-fluid'/>
<p>345 Products</p>
</div> 
<p className='p-sec-5'>Manufacturar</p>
<h4 className='pb-4'>Cycling Shorts</h4>
<button className='btn crd-but'>See Collection<i class="fa-solid fa-arrow-right-long mx-2"></i></button>
<img src={sc4} alt='image' className='img-flud cr-img'/>
</div>
</div> 
<div className='col-lg-4 mb-3'>
<div className='bg-white item-sec-5 p-3'>
<div className='it-two pb-4'>
<img src={exm5} alt='image' className='img-fluid'/>
<p>200 Products</p>
</div> 
<p className='p-sec-5'>Manufacturar</p>
<h4 className='pb-4'>Cycling Jersey</h4>
<button className='btn crd-but'>See Collection<i class="fa-solid fa-arrow-right-long mx-2"></i></button>
<img src={sc5} alt='image' className='img-flud cr-img'/>
</div>
</div> 
<div className='col-lg-4 mb-3'>
<div className='bg-white item-sec-5 p-3'>
<div className='it-two pb-4'>
<img src={exm6} alt='image' className='img-fluid'/>
<p>90 Products</p>
</div> 
<p className='p-sec-5'>Manufacturar</p>
<h4 className='pb-4'>Car Coat</h4>
<button className='btn crd-but'>See Collection<i class="fa-solid fa-arrow-right-long mx-2"></i></button>
<img src={sc6} alt='image' className='img-flud cr-img scr-spc'/>
</div>
</div> 
</div>
</div>  
</section>
<section className='my-5'>
<div className='container py-5 spc-conta'>
<div className='row'>
<div className='col-lg-6 mb-3 px-5'>
<div className=''>
<h2 className='pb-3 h-sec-6'>Don't miss out on special offers</h2>
<p className='p-sc-6 pb-4'>Register to receive news about the latest, savings combos, discount codes...</p>
<ul className='list-ul pb-3'>
<li><span className='sp1'>01</span> Savings combos</li>  
<li><span className='sp2'>02</span>Freeship</li>
<li><span className='sp3'>03</span>Premium magazines</li>
</ul>
<input type='text' placeholder='Enter your email' required className='form-control inp-sec-6 '/>
<button type='submit' className='btn btn-dark my-4 but-sc-6-in'><i class="fa-solid fa-arrow-right"></i></button>
</div>  
</div>
<div className='col-lg-6 mb-3'>
<div>
<img src={graph} alt='image' className='img-fluid'></img>
</div>  
</div>
</div>
</div>  
</section>

<section className='my-5 px-5 opinoin'>
<hr/>
<div className='container '>
<h2 className='text-center title-opin'>A-Shop</h2>
<div className='row mt-5'>
<div className='col-lg-4'>
<div className=''>
<div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={opin1} className="img-fluid rounded-start w-100" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">James</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text opin">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        </p>
      </div>
    </div>
  </div>
</div> 
 
</div>
</div>  
<div className='col-lg-4'>
<div className=''>
<div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={opin2} className="img-fluid rounded-start w-100 Circule" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Smith</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text opin">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        </p>
      </div>
    </div>
  </div>
</div> 
 
</div>
</div> 
<div className='col-lg-4'>
<div className=''>
<div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={opin3} className="img-fluid rounded-start w-100 Circule" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Jessica</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text opin">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        </p>
      </div>
    </div>
  </div>
</div> 
 
</div>
</div> 
</div>
</div>  
</section>
     </>     
  )        
}
export default Home;