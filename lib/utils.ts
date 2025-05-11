import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetPath(path: string): string {
  // If the path is already a full URL, return it as is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  // If it's a relative path starting with '/', ensure it's relative to the root
  if (path.startsWith('/')) {
    return path;
  }

  // Otherwise, ensure it starts with '/'
  return `/${path}`;
}
