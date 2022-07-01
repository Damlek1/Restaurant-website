import React from 'react'
import styled from 'styled-components'
import Service1 from '../assets/Services1.png'
import Service2 from '../assets/Services2.png'
import Service3 from '../assets/Services3.png'
import {TitleStyles} from './ReuseableStyles'

export default function Services() {
  return (
    <Section id='services'>
        <div className='title'>
            <h1 className='yellow'>What we do?</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, illo tempore. Perspiciatis quam sunt dignissimos autem voluptates voluptate facilis ea?</p>
        </div>
        <div className="services">
            <div className="service">
                <img src={Service2} alt='service-img' />
                <p> He Printing and Typesetting the industry. <span>Lorem Ipsum</span>{" "} has been the Industry's</p>
                <button>Read More</button>
            </div>
            <div className="service yellow">
                <img src={Service1} alt='service-img' />
                <p> He Printing and Typesetting the industry. <span>Lorem Ipsum</span>{" "} has been the Industry's</p>
                <button>Read More</button>
            </div>
            <div className="service">
                <img src={Service3} alt='service-img' />
                <p> He Printing and Typesetting the industry. <span>Lorem Ipsum</span>{" "} has been the Industry's</p>
                <button>Read More</button>
            </div>
        </div>
    </Section>
  )
}

const Section = styled.section `
  margin: 2rem 4rem;
  ${TitleStyles}
  .services{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10vw;
    margin-top: 4rem;
    .service{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.4vw;
        padding: 0 3vw;
        img{
            height: 2.8rem;
        }
        p{
            text-align: center;
            line-height: 2rem;
            font-size: 1.1rem;
            letter-spacing: 0.1rem;
        span{
            color: #fc4958;
        }
        }
        button{
            padding: 0.6rem 3rem;
            letter-spacing: 0.2rem;
            border-radius: 2rem;
            font-size: 1.1rem;
            border: none;
            color: #fff;
            cursor: pointer;
            background-color: #fc4958;
            transition: 0.3s ease-in-out;
            &:hover {
                background-color: #f9c74f;
            }
        }
    }
    .yellow{
        button{
            background-color: #f9c74f;
            &:hover {
                background-color: #fc4958;
            }
        }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    margin: 2rem;
    .services {
      grid-template-columns: 1fr;
    }
  }
`
