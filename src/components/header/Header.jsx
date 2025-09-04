import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import CCETLogo from '../../assets/header/CCET-Logo.png';
import IndianEmblem from '../../assets/header/Indian-Emblem.png';

import AboutUsMenu from './AboutUsMenu';
import AcademicsMenu from './AcademicsMenu';
import StudentsSectionMenu from './StudentsSectionMenu';
import NoticesMenu from './NoticesMenu';
import AdmissionsMenu from './AdmissionsMenu';

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');
  const [expandedMenu, setExpandedMenu] = useState(null);
  const mobileNavRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileNavRef.current && !mobileNavRef.current.contains(e.target)) setMenuOpen(false);
    };
    if (menuOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  const menuItems = [
    { label: 'Home' },
    { label: 'About Us', menu: <AboutUsMenu /> },
    { label: 'Academics', menu: <AcademicsMenu /> },
    { label: 'Students Section', menu: <StudentsSectionMenu /> },
    { label: 'Admissions', menu: <AdmissionsMenu /> },
    { label: 'Placements' },
    { label: 'Notices', menu: <NoticesMenu /> },
  ];

  return (
    <div className="w-full bg-white md:bg-gradient-to-r md:from-blue-900 md:to-slate-900 relative z-50">
      <div className="md:hidden w-full bg-gradient-to-r from-blue-900 to-slate-900 shadow">
        <div className="px-4 py-3 flex items-center justify-between">
          <img src={CCETLogo} alt="CCET Logo" className="h-10" />
          <div className="flex-1 text-center px-2">
            <h1 className="text-white text-2xl font-serif">Chandigarh College of Engineering and Technology</h1>
            <p className="text-[20px] text-gray-300 font-serif">(PU | Chandigarh)</p>
          </div>
          <img src={IndianEmblem} alt="Indian Emblem" className="h-10" />
        </div>
        <div className="flex justify-end pr-4 pb-3">
          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-1 bg-yellow-400 hover:bg-yellow-500 text-red-700 px-2.5 py-1 rounded-full text-xs font-medium"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            Menu
          </button>
        </div>
      </div>

      <div className="hidden lg:flex flex-col items-center px-2 py-3 max-w-[1436px] mx-auto">
        <div className="flex w-full items-center justify-center gap-2">
          {/* Left Logo */}
          <div className="mx-14 min-w-[96px]">
            <img src={CCETLogo} alt="Logo" className="h-24 object-contain" />
          </div>

          <div className="flex flex-col items-center flex-shrink px-2 w-full max-w-[900px]">
            <h1 className="text-white text-4xl font-serif text-center">Chandigarh College of Engineering and Technology</h1>
            <h2 className="text-white text-lg font-serif text-center mt-1 mb-2">
              (Government Institute Under Chandigarh UT Administration, Affiliated to Panjab University, Chandigarh)
            </h2>
            <div className="border-t-2 border-white w-full mx-auto max-w-4xl mt-2 mb-2" />
          </div>

          <div className="flex items-center gap-10 ml-20">
            <img
              className="h-24 w-auto object-contain"
              src={IndianEmblem}
              alt="Indian Emblem"
            />
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/ccetofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 transition-colors"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/ccet_degree/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 transition-colors"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/ccet-degree-a82593264/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 transition-colors"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=helpdesk@ccet.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-500"
              >
                <FaEnvelope size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="w-full flex justify-center gap-3 -mt-0 -mb-2 relative z-50">
          {menuItems.map(({ label, menu }) => (
            <div
              key={label}
              className="relative group"
              onMouseEnter={() => setActiveNav(label)}
              onMouseLeave={() => setActiveNav('')}
            >
              <div
                className={`px-3 py-1 rounded-md font-serif text-xl transition-all duration-200 cursor-pointer
                ${activeNav === label
                    ? 'bg-yellow-400 text-red-700 shadow-md'
                    : 'text-white hover:bg-yellow-400 hover:text-red-700 hover:shadow-md'
                  }`}
              >
                {label}
              </div>
              {menu && activeNav === label && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                  {menu}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex">
          <div ref={mobileNavRef} className="ml-auto w-80 bg-white h-full shadow-lg overflow-y-auto">
            <div className="p-4 bg-blue-900 text-white flex justify-between items-center border-b">
              <span>Navigation</span>
              <button onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {menuItems.map(({ label, sections }) => (
              <div key={label} className="border-b">
                <div
                  className={`px-4 py-3 flex justify-between items-center cursor-pointer font-medium transition-colors
                    ${activeNav === label ? 'bg-yellow-400 text-red-700' : 'text-gray-800 hover:bg-gray-100'}`}
                  onClick={() => sections ? toggleSubmenu(label) : (setActiveNav(label), setMenuOpen(false))}
                >
                  <span>{label}</span>
                  {sections && (
                    <svg className={`w-5 h-5 transition-transform ${expandedMenu === label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </div>
                {sections && expandedMenu === label && (
                  <div className="bg-gray-50 pl-6 pr-4 py-2">
                    {sections.map((sec, idx) => (
                      <div key={idx} className="mb-3">
                        <div className="font-semibold text-red-700 text-sm border-b mb-2 pb-1">{sec.title}</div>
                        <ul className="text-sm space-y-1">
                          {sec.links.map((link, j) => (
                            <li
                              key={j}
                              className="px-2 py-1 rounded hover:bg-[#FB923C] hover:text-white transition-colors cursor-pointer"
                              onClick={() => link === 'FAQs' ? (navigate('/faq'), setMenuOpen(false)) : null}
                            >
                              {link}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="flex gap-5 p-4 justify-center border-t border-gray-200 mt-4">
              <a href="https://www.facebook.com/ccetofficial/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-yellow-500">
                <FaFacebook size={20} />
              </a>
              <a href="https://www.instagram.com/ccet_degree/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-yellow-500">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ccet-degree-a82593264/" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-yellow-500">
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=helpdesk@ccet.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-yellow-500"
              >
                <FaEnvelope size={22} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
