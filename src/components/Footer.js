import React from 'react'
import styled from 'styled-components';
import logo from '../assets/FoodYummy.png';
import { AiFillInstagram } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';
import { BsWhatsapp } from 'react-icons/bs';
import { IoCallSharp } from 'react-icons/io5';
import {MdEmail} from 'react-icons/md'
import {GoLocation} from 'react-icons/go'


export default function Footer() {
  return (
    <div className='footer'>

    <Section>
        <div className="brand container">
            <img src={logo} alt='logo' />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, iusto!</p>
            <ul>
                <li><AiFillInstagram /></li>
                <li><BsTwitter /></li>
                <li><FaFacebookF /></li>
                <li><GrLinkedinOption /></li>
            </ul>
        </div>
        <div className="about container">
            <div className="title">
                <h3>About Us</h3>
            </div>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,eligendi repellat laudantium blanditiis iure nulla, ut aliquam
            itaque unde nesciunt cum veritatis perferendis vel expedita! Nam</p>
        </div>
        <div className="contant container">
            <div className="title">
                <h3>Contact Us</h3>
            </div>
            <div>
              <p><IoCallSharp /> +2348130959111</p>
              <p><BsWhatsapp /> +2349038406838</p>
              <p><MdEmail /> ajayioluwasegun111@gmail.com</p>
              <p><GoLocation /> Badore Ajah, Lagos, Nigeria</p>
           </div>
        </div>
    </Section>
    <LowerFooter className="lower__footer">
        <h2>
          Copyright &copy; 2022 <span>Food Yummy</span>
        </h2>
    </LowerFooter>
  </div>
  )
}


const Section = styled.footer`
   margin: 0;
   background: linear-gradient(to right, #fc4958, #e85d04, #fc4958);
   color: #fff;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 10vw;
   padding: 4vw;
   p{
    font-size: 1.1rem;
    line-height: 2rem;
    letter-spacing: 0.1rem;
   }
   ul{
    display: flex;
    list-style-type: none;
    gap: 4vw;
    margin-top: 2vw;
   }
   li{
    padding: 0.8rem;
    border-radius: 2rem;
    background-color: #fff;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    svg{
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fc4958;
        font-size: 1.6rem;
        transition: 0.3s ease-in-out;
    }
    &:hover{
        background-color: #000;
        svg{
            transform: scale(1.2);
        }
    }
   }
   img{
    filter: brightness(0) invert(1);
    width: 10vw;
   }
   .container{
     display: flex;
     flex-direction: column;
     gap: 0.5rem;
     h3{
        font-size: 2rem;
     }
   }
   @media screen and (min-width: 260px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    .container {
      img {
        height: 4rem;
        width: 10rem;
      }
    }
  }
`

const LowerFooter = styled.div`
   margin: 0;
   text-align: center;
   background-color: #000;
   color: #fff;
   padding: 1rem;
   h2{
    span{
        color: #fc4958;
        text-transform: uppercase;
    }
   }
   @media screen and (min-width: 260px) and (max-width: 450px) {
    h2 {
      span {
        display: block;
      }
    }
  }

`