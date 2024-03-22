import { type ClassValue, clsx } from 'clsx'
import { Metadata } from 'next'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export function formatUniversitySlug(name) {
  const capitalized = name.split('-').map(word => capitalizeFirstLetter(word)).join(' ');
  return capitalized.replace(/-/g, '');
}
