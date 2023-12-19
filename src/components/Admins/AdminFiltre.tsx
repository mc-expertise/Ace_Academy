import React from 'react';
// import Switch from 'react-custom-checkbox/switch';
import 'react-dropdown/style.css';
import { menuItems } from '../../components/Constants/DropDownList';
import MenuItems from '../../components/Shared/MenuItems';
import { Switch, cn } from '@nextui-org/react';

interface ContentFiltreProps {}
const AdminFiltre: React.FC<ContentFiltreProps> = () => {
  return (
    <>
      <div className="flex items-center justify-between pb-8 pt-2 ">
        <ul className="menus">
          {' '}
          {menuItems.map((menu, index) => {
            const depthLevel = 0;
            return (
              <MenuItems items={menu} key={index} depthLevel={depthLevel} />
            );
          })}{' '}
        </ul>
        <div className="flex items-center gap-2 h-fit">
          <Switch
            aria-label="Automatic updates"
            size="sm"
            color="warning"
            classNames={{
              wrapper: 'p-0 h-[14px] w-[26px] overflow-visible bg-[#525966]',
              thumb: cn(
                'w-[11px] h-[11px] shadow-lg ml-[1px]',
                'group-data-[hover=true]:border-1 group-data-[hover=true]:border-warning',
                //selected
                'group-data-[selected=true]:ml-3',
                // pressed
                'group-data-[pressed=true]:w-4',
                'group-data-[selected]:group-data-[pressed]:ml-4'
              ),
            }}
          />
          <p className="text-sm text-[#1F1F1F] font-bold">Show history</p>
        </div>
      </div>
      <div className="flex items-start justify-between text-[12px] pb-2">
        <p className="opacity-[0.5]">167 employees</p>
        <p className="flex items-center gap-2 text-[#8a8a8a]">
          Sort by:
          <span className="flex items-center gap-1 text-[#1F1F1F] font-bold">
            Date
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none">
              <path
                d="M9.91372 4.17383L6.26155 7.826L2.60938 4.17383"
                stroke="#1F1F1F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </p>
      </div>
    </>
  );
};

export default AdminFiltre;
