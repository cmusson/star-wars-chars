import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge classes with tailwind-merge with clsx full feature */
const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
}

export default cn;