import React, { useEffect, useRef, useState } from 'react';
import DropProfil from '../Home/DropProfil';
import { Link } from 'react-router-dom';
const Header = () => {
  const [isActive, setisActive] = useState(false);
  const blockRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click is outside the block
      if (
        blockRef.current &&
        !blockRef.current.contains(event.target as Node)
      ) {
        setisActive(false);
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener('click', handleClickOutside);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full bg-white h-[100px] flex items-center justify-between px-[66px] ShadowHeader relative">
      {isActive && <DropProfil />}
      <div className="flex items-center gap-20">
        <div className="text-[24px] font-extrabold whitespace-nowrap">
          ACE ACADEMY
        </div>
        <div className="flex items-center relative ">
          <div className="icon-Input">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none">
              <path
                d="M8.08333 15.1667C11.9953 15.1667 15.1667 11.9953 15.1667 8.08333C15.1667 4.17132 11.9953 1 8.08333 1C4.17132 1 1 4.17132 1 8.08333C1 11.9953 4.17132 15.1667 8.08333 15.1667Z"
                stroke="#525966"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.0918 13.0918L17.9997 17.9997"
                stroke="#525966"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <input
            type="email"
            placeholder="Search courses, skills, teachers"
            className="primary-input !rounded-full  placeholder:text-[#525966] !w-[405px]"
          />
        </div>
      </div>

      <div className="flex items-center gap-8">
        <ul className="flex items-center gap-4 font-bold">
          <li className="cursor-pointer">
            <Link to={'/allcourses'}>All courses</Link>
          </li>
          <li className="cursor-pointer">
            <Link to={'/'}>My courses</Link>
          </li>
        </ul>

        <div
          ref={blockRef}
          className="flex items-center gap-3 relative"
          onClick={() => {
            setisActive(!isActive);
          }}>
          <div className="relative cursor-pointer">
            <img src="/src/assets/Profile.png" alt="" />
            <div className="w-[13px] h-[13px] bg-[#F09272] absolute top-[4px] right-0 rounded-full"></div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none">
            <path
              d="M19 8L12 15L5 8"
              stroke="#525966"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
