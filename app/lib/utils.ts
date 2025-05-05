// Add utilities that are reusable across the webpage
import {clsx, type ClassValue } from "clsx";
import {twMerge} from "tailwind-merge";

// Merge classnames dynamic and static
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}