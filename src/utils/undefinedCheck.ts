export default function checkUndefined(value: any): typeof value | undefined {
  return value !== undefined ? value : undefined;  
} 