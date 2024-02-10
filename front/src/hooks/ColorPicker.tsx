import React, { useState } from 'react';
import { GithubPicker, ColorResult } from 'react-color';
import { Color } from '@/types/color';

const ColorPicker = () => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState<Color>({
    r: 241,
    g: 112,
    b: 19,
    a: 1,
  });

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (color: ColorResult) => {
    setColor(color.rgb as Color);
  };

  return (
    <div>
      <div className="p-1 bg-white rounded shadow cursor-pointer inline-block" onClick={handleClick}>
        <div className="w-7 h-4 rounded" style={{ background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})` }} />
      </div>
      {displayColorPicker && (
        <div className="absolute z-20">
          <div className="fixed inset-0" onClick={handleClose} />
          <GithubPicker onChange={handleChange} />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
