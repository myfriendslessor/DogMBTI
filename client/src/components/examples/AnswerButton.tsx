import { useState } from 'react';
import AnswerButton from '../AnswerButton';

export default function AnswerButtonExample() {
  const [selected, setSelected] = useState<number | null>(null);

  const options = [
    { value: 1, label: '전혀 아니다' },
    { value: 4, label: '보통이다' },
    { value: 7, label: '매우 그렇다' }
  ];

  return (
    <div className="p-8 max-w-md space-y-3">
      {options.map(option => (
        <AnswerButton
          key={option.value}
          value={option.value}
          label={option.label}
          selected={selected === option.value}
          onClick={() => {
            setSelected(option.value);
            console.log('Selected:', option.value);
          }}
        />
      ))}
    </div>
  );
}
