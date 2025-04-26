import React from 'react'

const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>Connect with me</p>
          <p>|</p>
          <p>Socials</p>
        </div>

        <div className="flex gap-3">
          <div className="flex gap-3 hover:scale-[1.15] transition-all duration-200">
            <a className='social-icon' href='https://github.com/PradeepPs04' target='_blank'>
                <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
            </a>
          </div>

          <div className="social-icon hover:scale-[1.15] transition-all duration-200">
            <a className='social-icon' href='https://www.linkedin.com/in/pradeep-singh-b300362b3' target='_blank'>
                <img src="/assets/linkedin.png" alt="linkedin" className="w-1/2 h-1/2 bg-white rounded-md" />
            </a>
          </div>

          <div className="social-icon hover:scale-[1.15] transition-all duration-200">
            <a className='social-icon' href='https://www.instagram.com/ps_prad_eep/' target='_blank'>
                <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2"/>
            </a>
          </div>
          
        </div>
  
        <p className="text-white-500">© 2025 Pradeep Singh. All rights reserved.</p>

      </footer>
    );
  };
  
  export default Footer;
