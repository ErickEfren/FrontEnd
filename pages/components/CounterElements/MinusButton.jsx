import React from 'react'

export default function MinusButton({ onClick }) {
    return (
      <button
        className="flex justify-center items-center px-5 bg-yellow-400 rounded-full h-[50px] w-[50px] max-md:px-5"
        onClick={onClick}
      >
        -
      </button>
    );
  }