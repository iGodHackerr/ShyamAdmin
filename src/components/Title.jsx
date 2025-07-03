import React from 'react';

const Title = ({ text1, text2 }) => {
  return (
    <div className="text-2xl font-bold mb-6">
      <span>{text1} </span>
      <span className="text-blue-500">{text2}</span>
    </div>
  );
};

export default Title;