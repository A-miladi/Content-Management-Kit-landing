import { cn } from "@/utils";
import { useState } from "react";

interface ToggleSwitchProps {
  defaultOn?: boolean;
  onToggle?: () => void;
  label?: string;
  disabled?: boolean;
  className?: string;
}

export default function ToggleSwitch({
  defaultOn = false,
  onToggle,
  label,
  disabled,
  className,
}: ToggleSwitchProps) {
  const [isOn, setIsOn] = useState(defaultOn);

  const handleToggle = () => {
    if (!disabled) setIsOn(!isOn);
    if (onToggle && !disabled) onToggle();
  };

  return (
    <div
      className={cn(
        "flex items-center gap-2 bg-neutral-100 w-full rounded-lg px-2 py-2 justify-center",
        className
      )}
      dir="ltr"
    >
      <div
        onClick={handleToggle}
        className={`relative inline-flex h-5 w-10 cursor-pointer items-center rounded-[40px] transition-colors duration-300 ease-in-out ${
          isOn ? "bg-primary-600" : "bg-neutral-300"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ease-in-out ${
            isOn ? "translate-x-[21px]" : "translate-x-[3px]"
          }`}
        />
      </div>
      {label && (
        <span
          className="text-sm font-medium text-neutral-900 truncate"
          dir="rtl"
        >
          {label}
        </span>
      )}{" "}
      {/* Render label if provided */}
    </div>
  );
}
