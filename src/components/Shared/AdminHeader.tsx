import { useEffect, useRef, useState } from 'react';
import DropProfil from '../Home/DropProfil';
const AdminHeader = () => {
  const [isActive, setisActive] = useState(false);
  const blockRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        blockRef.current &&
        !blockRef.current.contains(event.target as Node)
      ) {
        setisActive(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full !bg-white h-[100px] flex items-center justify-between px-[66px] border-b border-[rgba(0, 0, 0, 0.10)] relative">
      {isActive && <DropProfil />}
      <div className="flex items-center gap-20">
        <div className="text-[24px] font-extrabold whitespace-nowrap">
          ACE ACADEMY
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div
          ref={blockRef}
          className="flex items-center gap-3 relative"
          onClick={() => {
            setisActive(!isActive);
          }}>
          <div className="relative cursor-pointer">
            <img src="/src/assets/Profile.png" alt="" />
            <div className="w-[13px] h-[13px] bg-[#F09272] absolute top-[4px] right-0 rounded-full animate-ping"></div>
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

export default AdminHeader;
