import React, { useState, useRef, useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";

interface DropdownMenuProps {
  options: { value: string; label: string }[];
  placeholder: string;
  onSelect: (value: string) => void;
  className?: string
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  options,
  placeholder,
  onSelect,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleSelect = (value: string, label: string) => {
    setSelectedOption(label)
    setIsOpen(false)
    onSelect(value)
  }

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div
        className="flex items-center justify-between w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl cursor-pointer transition-colors hover:border-purple-500/50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-sm ${selectedOption ? 'text-white' : 'text-white/60'}`}>
          {selectedOption || placeholder}
        </span>
        <BsChevronDown className={`w-4 h-4 text-white/60 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </div>
      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-[#1c1c1c] border border-white/10 rounded-xl shadow-lg overflow-hidden">
          {options.map((option) => (
            <div
              key={option.value}
              className="xp-4 py-2 cursor-pointer text-sm text-white/60 hover:bg-white/5 transition-colors"
              onClick={() => handleSelect(option.value, option.label)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default DropdownMenu;
