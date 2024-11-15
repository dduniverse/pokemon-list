export const sortData = (data, sortType) => {
  if (!data) return [];
  const dataCopy = [...data]; // 복사본 생성
  if (sortType === "Lowest Number") {
    return dataCopy.sort((a, b) => a.id - b.id);
  } else if (sortType === "Highest Number") {
    return dataCopy.sort((a, b) => b.id - a.id);
  } else if (sortType === "A-Z") {
    return dataCopy.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortType === "Z-A") {
    return dataCopy.sort((a, b) => b.name.localeCompare(a.name));
  }
  return dataCopy;
};