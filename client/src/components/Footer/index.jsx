import React from 'react';
import './style.css';

export default function Footer() {
  return (
    <footer>
    <div className="footer_content">

        <ul className="part1">
            <li id="footer_title">Contact</li>
            <li >Street: 20 Mars</li> 
            <li >City: Tunis</li> 
            <li >State Full: Tunis</li> 
            <li >Zip Code: 5170</li> 
            <li >Phone Number : +216 71556872</li>
            <li >Mobile Number : +216 29703772</li>                       
        </ul>

        <ul className="part2">
            <li id="footer_title">Menu</li>
            <li > <a href="#">Home</a> </li> 
            <li > <a href="#">Books</a> </li> 
            <li > <a href="#">About</a> </li> 
            <li > <a href="#">Models</a> </li> 
            <li > <a href="#">Our blog</a> </li> 
            <li > <a href="#">Pricing</a> </li>                     
        </ul>

        <ul className="part3">
            <li id="footer_title">Recent posts</li>
            <li >Laptop MSI Discount</li> 
            <li >Competition for 2 Galaxies</li>
            <li >A world of opportunities</li> 
                             
        </ul>

       <ul className="part4">
           
            <li id="footer_title">Newsteller</li>
            <li className="footer_form"> <input type="email" placeholder="Your email address"/> <button class="btn-footer">SIGN UP</button></li>
            <li className="footer_icons"> <a href="https://www.facebook.com/talelchebb/"> <i class="fab fa-facebook-f"></i> </a> <a href="#"> <i class="fab fa-twitter"></i></a> <a href="https://www.instagram.com/talelchebb/?hl=fr"> <i class="fab fa-instagram"></i></a> <a href="https://www.linkedin.com/in/talel-chebbi-a53496214/"> <i class="fab fa-linkedin"></i></a> <a href="#"> <i class="fab fa-youtube"></i> </a> </li>
        
       
       </ul>
    </div>
  


</footer>
  )
}
