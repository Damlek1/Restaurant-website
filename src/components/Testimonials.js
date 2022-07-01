import React from 'react'
import styled from 'styled-components'
import Avatar1 from '../assets/Avatar1.jpeg'
import Avatar2 from '../assets/Avatar2.jpeg'
import { imageZoomEffect, TitleStyles } from './ReuseableStyles'

export default function Testimonials() {
  return (
    <Section id='testimonials'>
        <div className="container">
            <div className="title">
                <h1><span>What</span> Customers says</h1>
            </div>
            <div className="testimonials">
                <div className="testimonial">
                    <div className="image">
                       <img src={Avatar1} alt='Avatar' />
                    </div>
                    <p>He Printing and Typesetting the industry. <span>Lorem Ipsum</span>{" "}has been the Industry's</p>
                </div>
                <div className="testimonial">
                    <div className="image">
                       <img src={Avatar2} alt='Avatar' />
                    </div>
                    <p>He Printing and Typesetting the industry. <span>Lorem Ipsum</span>{" "}has been the Industry's</p>
                </div>
                <div className="testimonial">
                    <div className="image">
                       <img src={Avatar1} alt='Avatar' />
                    </div>
                    <p>He Printing and Typesetting the industry. <span>Lorem Ipsum</span>{" "}has been the Industry's</p>
                </div>
            </div>
        </div>
    </Section>
  )
}

const Section = styled.section`
  margin: 5vw;
  background: linear-gradient(to right, #fc4958, #e85d04, #fc4958);
  padding: 0.2rem;
  border-radius: 1.5rem;
  position: relative;
  .container{
    margin: 0.5rem;
    padding-top: 1vw;
    padding-bottom: 4vw;
    background-color: #fff;
    border-radius: 1rem;
    ${TitleStyles}
    .title{
        position: absolute;
        top: -1rem;
        left: 25%;
        padding: 0 2rem;
        background-color: #fff;
    }
    .testimonials{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 6vw;
        background-color: #fff;
        margin-top: 3vw;
        .testimonial{
            padding: 0 4vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 1rem;
            P{
                font-size: 1.1rem;
                line-height: 2rem;
                letter-spacing: 0.1rem;
            }
            ${imageZoomEffect}
            .image{
                overflow: hidden;
                width: max-content;
                max-height: 10rem;
                border-radius: 10rem;
                img{
                    height: 10rem;
                }
            }
        }
    }
  }

  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .container {
      .title {
        position: initial;
        background-color: transparent;
      }
      .testimonials {
        flex-direction: column;
      }
    }
  }
`
