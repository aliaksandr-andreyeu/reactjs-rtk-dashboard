export const getClassName = (...args) => Array.from(args).filter(Boolean).join(' ');

export const stopPropagation = (event) => event.stopPropagation();
