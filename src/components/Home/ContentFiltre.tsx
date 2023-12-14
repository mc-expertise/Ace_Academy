import React, { useState } from 'react';
import Switch from 'react-custom-checkbox/switch';
import 'react-dropdown/style.css';
import { menuItems } from '../../components/Constants/DropDownList';
import MenuItems from '../../components/Shared/MenuItems';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

interface ContentFiltreProps {}
const ContentFiltre: React.FC<ContentFiltreProps> = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [personName, setPersonName] = React.useState<string[]>([]);
  const marks = [
    {
      value: 0,
      label: '$10',
    },
    {
      value: 20,
      label: '$20',
    },
    {
      value: 37,
      label: '$30',
    },
    {
      value: 300,
      label: '$300',
    },
  ];
  function valuetext(value: number) {
    return `$ ${value}`;
  }

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 150,
      },
    },
  };

  const CustomArrow = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="7"
      viewBox="0 0 10 7"
      fill="none">
      <path
        d="M9 1.5L5 5.5L1 1.5"
        stroke="#525966"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const names: string[] = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

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
          <li>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-checkbox-label">
                Make your selection.
              </InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
                sx={{
                  '& .MuiCheckbox-root': {
                    height: '43px', // Set the height of the checkboxes
                  },
                  '& .MuiListItem-root': {
                    padding: 0, // Remove padding
                    '&:hover': {
                      backgroundColor: '#ccc', // Change background color on hover to grey
                      '& .MuiListItemText-primary': {
                        fontFamily: 'Manrope, sans-serif', // Change font family for the text on hover
                        fontSize: '14px',
                      },
                    },
                  },
                  '& .MuiListItemText-primary': {
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '14px',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none', // Remove the border
                  },
                  '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':
                    {
                      border: 'none', // Remove the border on hover
                    },
                  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                    {
                      border: 'none', // Remove the border when focused
                    },
                  '& .MuiSelect-outlined': {
                    backgroundColor: '#fff',
                    transition: '0.3s',
                    '&:hover': {
                      background: '#ECECEC',
                    },
                  },
                  '& .Mui-checked': {
                    color: 'green', // Change the color of the checked checkbox
                  },
                }}>
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={personName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
              <IconButton
                style={{
                  position: 'absolute',
                  right: '8px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}
                onClick={() => {
                  // Handle custom icon click event
                }}>
                <CustomArrow />
              </IconButton>
            </FormControl>
          </li>
          <li>
            <Box sx={{ width: 180 }}>
              <Slider
                aria-label="Always visible"
                defaultValue={80}
                getAriaValueText={valuetext}
                step={30}
                // marks={marks}
                valueLabelDisplay="on"
                max={300}
              />
            </Box>
          </li>
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
