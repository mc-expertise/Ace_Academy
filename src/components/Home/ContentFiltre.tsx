import React, { useState } from 'react';
import Switch from 'react-custom-checkbox/switch';
import 'react-dropdown/style.css';
import { menuItems } from '../../components/Constants/DropDownList';
import MenuItems from '../../components/Shared/MenuItems';

interface ContentFiltreProps {}
const ContentFiltre: React.FC<ContentFiltreProps> = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = (checked: boolean): string => {
    setIsChecked(checked);
    return ''; // You can return any string here, as it seems the type definition expects it.
  };

  const checkedTrackStyle: React.CSSProperties = {
    opacity: 1,
    transition: 'all 0.25s ease-in-out',
    marginBottom: 0,
  };

  const checkedIndicatorStyle: React.CSSProperties = {
    background: '#fff',
    transform: 'translateX(11px)',
  };

  const checkedIconStyle: React.CSSProperties = {
    opacity: 1,
    transition: 'all 0.25s ease-in-out',
  };

  const indicatorStyle: React.CSSProperties = {
    alignItems: 'center',
    background: '#fff',
    borderRadius: 24,
    bottom: 1,
    display: 'flex',
    height: 10,
    justifyContent: 'center',
    left: 2,
    outline: 'solid 2px transparent',
    position: 'absolute',
    transition: '0.25s',
    width: 10,
  };

  const trackStyle: React.CSSProperties = {
    background: isChecked ? '#F09272' : '#525966',
    border: '1px solid #e6e6e6',
    borderRadius: 15,
    cursor: 'pointer',
    display: 'flex',
    height: 14,
    position: 'relative',
    width: 26,
  };
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
        <div className="flex items-center gap-4 h-fit">
          <Switch
            label="Available from home"
            containerClassName="customLabelSwitch"
            indicatorStyle={indicatorStyle}
            trackStyle={trackStyle}
            checkedIconStyle={checkedIconStyle}
            checkedIndicatorStyle={checkedIndicatorStyle}
            checkedTrackStyle={checkedTrackStyle}
            onChange={handleSwitchChange}
          />
        </div>
      </div>
      <div className="flex items-start justify-between text-[12px]">
        <p className="opacity-[0.5]">167 courses available</p>
        <p className="flex items-center gap-2 text-[#8a8a8a]">
          Sort by:
          <span className="flex items-center gap-1 text-[#1F1F1F] font-bold">
            Relevance
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

export default ContentFiltre;
