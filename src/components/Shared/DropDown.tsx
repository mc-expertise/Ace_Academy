import React from 'react';
import MenuItems from './MenuItems';
import { MenuItemType } from '../Constants/DropDownList';

interface DropdownInter {
  submenus: MenuItemType[];
  depthLevel: number;
  dropdown: boolean;
}

const Dropdown = ({ submenus, dropdown, depthLevel }: DropdownInter) => {
  const updatedDepthLevel = depthLevel + 1;
  const dropdownClass = updatedDepthLevel > 1 ? 'dropdown-submenu' : '';

  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? 'show ' : ''}`}>
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthLevel={updatedDepthLevel} />
      ))}
    </ul>
  );
};

export default Dropdown;
