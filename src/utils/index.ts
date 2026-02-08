import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const isValidatePhone = (value: string): boolean => {
  const regex = new RegExp('^09[1-3|9]\\d{8}$');
  return regex.test(value);
};

export const isNumber = (value: string): boolean => {
  const regex = /^[\u0030-\u0039\u06F0-\u06F9]*$/;
  return regex.test(value);
};

export default function toPersianPrice(price: number | string): string {
  return (+price).toLocaleString("fa-IR");
}
