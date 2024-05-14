import React from 'react';
import { CheckCard } from '@ant-design/pro-components';


const Footer = () => {
  const css = `
  .badge-pulse sl-badge:not(:last-of-type) {
    margin-right: 1rem;
  }
`;
    return (
        <>
        
            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded dark:bg-gray-100 dark:text-gray-950">
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
 
  <aside>
    <p>Copyright ©Open Library 2024 - design & develop by <a href="https://github.com/sabberrahman" target='_blank'className='underline decoration-wavy decoration-indigo-500 hover:decoration-blue-400 font-bold  p-1 '>SabberRahman</a> </p>
  </aside>
</footer>
        </>
    );
};

export default Footer;