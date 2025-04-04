function InputSlider({ min, max, input, onChange, color }) {
  const percentage = ((input - min) * 100) / (max - min);
  return (
    <div className="relative w-full h-2">
      <div className="absolute w-full h-full bg-gray-200 rounded-full" />
      <div
        className="absolute h-full rounded-full"
        style={{
          width: `${percentage}%`,
          backgroundColor: color,
        }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={input}
        onChange={onChange}
        className="absolute w-full h-full opacity-0 cursor-pointer"
      />
      <div
        className="absolute w-4 h-4 rounded-full bg-white border-2 top-1/2 -translate-y-1/2 -translate-x-1/2"
        style={{
          left: `${percentage}%`,
          borderColor: color,
        }}
      />
    </div>
  );
}

export default InputSlider;
