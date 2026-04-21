export function sortPalettes(palettes, sortBy) {
  const sorted = [...palettes];

  switch (sortBy) {
    case "popular":
      return sorted.sort((a, b) => b.likes - a.likes);
    case "new":
      return sorted.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
    case "az":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return sorted;
  }
}
