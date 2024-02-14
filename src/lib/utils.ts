import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const wait = async (ms: number): Promise<void> =>
  new Promise<void>((res) => setTimeout(() => res(), ms));

export const generateRandomUid = () => {
  const typedArray = new Uint8Array(5);
  const randomValues = window.crypto.getRandomValues(typedArray);
  return randomValues.join("");
};
