import React from 'react'
import MinusButton from './MinusButton'
import PlusButton from './PlusButton'

export default function Counter({ label, count, onMinus, onPlus }) {
    return (
      <div className="flex gap-5 justify-between mt-4">
        <MinusButton onClick={onMinus} />
        <div className="my-auto">{count}</div>
        <PlusButton onClick={onPlus} />
      </div>
    );
}