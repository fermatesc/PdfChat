import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToAscii(inpuntString: string) {
  //remove non ascii chars
  const asciiString = inpuntString.replace(/[^\x00-\x7F]+/g, "");
  return asciiString;
}
