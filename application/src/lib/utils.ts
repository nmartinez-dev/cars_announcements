import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatNumber = (num: number, isPrice: boolean = false): string => {
  const number = num.toLocaleString('es-ES');

  if (isPrice) return `${number} €`;

  return number;
};
