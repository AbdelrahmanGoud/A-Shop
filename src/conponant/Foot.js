import '../conponantcss/Footstyle.css';
import pyment from '../image/pyment.png';
function Foot()
{
          let date =new Date()
          let fulyear=date.getFullYear()
  return(
    <>
<footer className="fot  pt-5">
          <hr></hr>
            <div className="container ">

             <div className="row">
              <div className="col-lg-3 col-md-6">
               <h4 className="py-3  fot-logo">A-Shop</h4>
               <p className="pb-2">Fashion is a language that expresses your personality</p>
               <hr></hr>
              <div className="em-input pb-5">
              <input type="email" placeholder="Enter email" className="form-control inp-mai mb-4 " ></input>
              </div>
               <div className="fot-icon-mad">
                 <span><i class="fa-brands fa-facebook"></i></span>  
                 <span><i class="fa-brands fa-twitter"></i></span>   
                 <span><i class="fa-brands fa-linkedin"></i></span>   
                 <span><i class="fa-brands fa-instagram"></i></span>   
                 <span><i class="fa-brands fa-youtube"></i></span> 
               </div>
            </div>  
            <div className="col-lg-3 col-md-6">
            <h4 className="py-3">Address</h4>
            <ul className="adders">
                    <li><i class="fa-solid fa-location-dot"></i>22 Awesome Road New York,USA</li>
                    <hr></hr>
                    <li><i class="fa-solid fa-phone"></i>+123456789</li>
                    <hr></hr>
                    <li><i class="fa-solid fa-envelope"></i>hello@gmail.com</li>
                    <hr></hr>
            </ul>
            </div>   
            <div className="col-lg-3 col-md-6">
            <h4 className="py-3">Useful Links</h4>
            <ul className="usefu">
                    <li><i class="fa-solid fa-chevron-left"></i>Shop Copuon</li>
                    <hr></hr>
                    <li><i class="fa-solid fa-chevron-left"></i>About Us</li>
                    <hr></hr>
                    <li><i class="fa-solid fa-chevron-left"></i>Carrer</li>
                    <hr></hr>
                    <li><i class="fa-solid fa-chevron-left"></i>Supports</li>
                    <hr></hr>
            </ul>
            </div> 
            <div className="col-lg-3 col-md-6">
            <h4 className="py-3">Categories</h4>
            <ul className="mb-4 cat">
                    <li><i class="fa-solid fa-chevron-left"></i>Clothes</li>
                    <hr></hr>
                    <li><i class="fa-solid fa-chevron-left"></i>Electronics</li>
                    <hr></hr>
                    <li><i class="fa-solid fa-chevron-left"></i>Furniture</li>
                    <hr></hr>
                    <li><i class="fa-solid fa-chevron-left"></i>Shoes</li>
                    <hr></hr>
                    <li><i class="fa-solid fa-chevron-left"></i>Others</li>
                    <hr></hr>
            </ul>
            <img src={pyment} alt='image' className='img-fluid payment'></img>

            </div> 
             </div>
             <hr></hr>
             <div className="rights">
                <div className="cop-rights">
                   <p> All Rights Reserved GoudaDev © {fulyear}</p>     
                </div>
                <div className="legal">
                 <span>Terms & Conditions</span> 
                 <span>Privacy Policy</span>   
                 <span>Legal</span>   
                </div>
             </div>
          </div> 
          <h2 className="finsh-logo text-center">A-Shop</h2>       
          </footer>    
    </>      
  )        
}
export default Foot;