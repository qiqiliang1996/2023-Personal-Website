import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

export default function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, maiores. Ea aliquam laudantium voluptate in
                cupiditate. Vitae quibusdam quas aliquid?
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, maiores. Ea aliquam laudantium voluptate in
                cupiditate. Vitae quibusdam quas aliquid?
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, maiores. Ea aliquam laudantium voluptate in
                cupiditate. Vitae quibusdam quas aliquid?
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, maiores. Ea aliquam laudantium voluptate in
                cupiditate. Vitae quibusdam quas aliquid?
              </p>
            </li>
          </ul>
        </article>
        {/* //END OF CARD */}
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, maiores. Ea aliquam laudantium voluptate in
                cupiditate. Vitae quibusdam quas aliquid?
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, maiores. Ea aliquam laudantium voluptate in
                cupiditate. Vitae quibusdam quas aliquid?
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, maiores. Ea aliquam laudantium voluptate in
                cupiditate. Vitae quibusdam quas aliquid?
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, maiores. Ea aliquam laudantium voluptate in
                cupiditate. Vitae quibusdam quas aliquid?
              </p>
            </li>
          </ul>
        </article>
        {/* //END OF CARD */}
        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, maiores. Ea aliquam laudantium voluptate in
                cupiditate. Vitae quibusdam quas aliquid?
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, maiores. Ea aliquam laudantium voluptate in
                cupiditate. Vitae quibusdam quas aliquid?
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, maiores. Ea aliquam laudantium voluptate in
                cupiditate. Vitae quibusdam quas aliquid?
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, maiores. Ea aliquam laudantium voluptate in
                cupiditate. Vitae quibusdam quas aliquid?
              </p>
            </li>
          </ul>
        </article>
        {/* //END OF CARD */}
      </div>
    </section>
  );
}
