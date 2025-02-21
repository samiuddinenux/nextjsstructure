export const capitalizeString = (str: string): string => (!str ? '' : str.charAt(0).toUpperCase() + str.slice(1));
export const truncateString = (str: string, length: number): string => (!str || str.length <= length ? str : str.slice(0, length) + '...');