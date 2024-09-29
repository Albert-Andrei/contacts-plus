export function getNameInitials(name: string): string {
  const nameParts = name?.split(" ");

  // Extract the first letter of firstName and lastName, if available.
  const firstInitial = nameParts?.[0]?.charAt(0).toUpperCase() ?? "";
  const lastInitial = nameParts?.[1]?.charAt(0).toUpperCase() ?? "";

  // Combine the initials and return them. If both are missing, this will return an empty string.
  return `${firstInitial}${lastInitial}`;
}
