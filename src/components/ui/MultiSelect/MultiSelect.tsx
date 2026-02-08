import useOutsideClick from "@/hooks/useOutsideClick";
import { FC, useRef, useState } from "react";
import ArrowDown from "../Icons/ArrowDown";

export type Option = {
  value: string;
  label: string;
};

type MultiSelectProps = {
  options: Option[];
  selectedValues?: string[];
  onChange: (selectedOptions: Option[]) => void;
  label?: string;
  labelClassName?: string;
  placeholder?: string;
  isCustomAdd?: boolean; // New prop for custom add mode
  className?: string;
  disabled?: boolean;
};

const MultiSelect: FC<MultiSelectProps> = ({
  options: initialOptions,
  selectedValues = [],
  onChange,
  label,
  labelClassName = "",
  placeholder = "Select items...",
  isCustomAdd = false,
  className = "",
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState<Option[]>(initialOptions);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useOutsideClick(containerRef as React.RefObject<HTMLElement>, () =>
    setIsOpen(false)
  );

  // Compute selectedOptions directly from selectedValues and options
  const selectedOptions = options.filter((option) =>
    selectedValues.includes(option.value)
  );

  // Toggle dropdown
  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen((prev) => !prev);
      if (!isOpen) {
        setTimeout(() => inputRef.current?.focus(), 0);
      }
    }
  };

  // Handle selecting/deselecting an option
  const handleOptionSelect = (option: Option) => {
    const isSelected = selectedValues.includes(option.value);
    const newSelected = isSelected
      ? selectedOptions.filter((item) => item.value !== option.value) // Remove if already selected
      : [...selectedOptions, option]; // Add if not selected

    onChange(newSelected);
    setInputValue("");
    inputRef.current?.focus();
  };

  // Add a new custom item
  const addNewItem = () => {
    if (!inputValue.trim()) return;

    // Check if the item already exists
    const exists = options.some(
      (opt) => opt.label.toLowerCase() === inputValue.trim().toLowerCase()
    );

    if (!exists) {
      const newOption: Option = {
        value: `custom-${inputValue.trim().toLowerCase().replace(/\s+/g, "-")}`,
        label: inputValue.trim(),
      };

      setOptions((prev) => [...prev, newOption]);
      onChange([...selectedOptions, newOption]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      if (isCustomAdd) {
        addNewItem();
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (!isOpen && e.target.value) {
      setIsOpen(true);
    }
  };

  const removeOption = (e: React.MouseEvent, option: Option) => {
    e.stopPropagation();
    const newSelected = selectedOptions.filter(
      (item) => item.value !== option.value
    );
    onChange(newSelected);
    inputRef.current?.focus();
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div>
      {label && (
        <label
          className={`text-right text-sm font-medium text-black ${labelClassName}`}
        >
          {label}
        </label>
      )}
      <div ref={containerRef} className="relative mt-3">
        <div
          className={`flex items-center justify-between p-2  border rounded-lg cursor-pointer min-h-12  ${className} ${isOpen ? "border-primary-700" : "border-neutral-100"} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={toggleDropdown}
        >
          <div className="flex flex-wrap gap-1 flex-1">
            {selectedOptions.map((option) => (
              <span
                key={option.value}
                className="flex items-center px-2 py-1 bg-white border text-primary-700 rounded-md"
              >
                {option.label}
                <button
                  type="button"
                  className="mr-2 text-gray-600 hover:text-gray-800"
                  onClick={(e) => removeOption(e, option)}
                  disabled={disabled}
                >
                  ×
                </button>
              </span>
            ))}
            <input
              ref={inputRef}
              type="text"
              className="flex-1 outline-none bg-transparent placeholder:text-neutral-500 text-xs "
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder={selectedOptions.length === 0 ? placeholder : ""}
              disabled={disabled}
            />
          </div>

          <ArrowDown
            color="#000"
            className={`h-5 w-5 transform text-gray-400 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
        {isOpen && (
          <ul className="absolute left-0 right-0 z-10 mt-2 p-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
            {filteredOptions.length === 0 ? (
              <li className="p-2 text-gray-400">
                {isCustomAdd
                  ? "Press Enter to add new item"
                  : "No options found!"}
              </li>
            ) : (
              filteredOptions.map((option) => (
                <li
                  key={option.value}
                  className="p-2 rounded-md cursor-pointer hover:bg-gray-100"
                  onClick={() => handleOptionSelect(option)}
                >
                  {option.label}
                </li>
              ))
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MultiSelect;
