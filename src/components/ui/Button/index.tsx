import React from "react";
import { cn } from "@/utils";
import Spinner from "../Spinner";
import { ButtonProps } from "@/types";

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  disabled,
  color = "secondary",
  variant = "contained",
  size = "sm",
  loading = false,
  ...rest
}: ButtonProps) => {
  const styleMap: Record<string, Record<string, string>> = {
    primary: {
      contained: "bg-gradient-to-l from-primary-800 to-primary-500 text-white",
      outlined: "bg-transparent",
    },
    secondary: {
      contained: "bg-secondary-500 text-white",
      outlined: "border-secondary border-sm text-secondary",
    },
  };

  const sizeMap: Record<string, string> = {
    sm: "text-sm rounded-sm",
    lg: "text-gray-200 font-semibold rounded-xl",
  };

  const buttonStyle = styleMap[color][variant];
  const sizeStyle = sizeMap[size];

  return (
    <button
      dir="rtl"
      className={cn(
        `${buttonStyle} ${sizeStyle}  font-bold cursor-pointer bg-primary-700 flex items-center justify-center disabled:cursor-not-allowed disabled:bg-neutral-400`,
        className
      )}
      {...rest}
      disabled={disabled || loading} 
    >
      {loading ? (
        <div className="flex items-center justify-center gap-1.5">
          <p className="text-white font-bold">صبر کنید...</p>
          <Spinner color="white" size="small" />
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
