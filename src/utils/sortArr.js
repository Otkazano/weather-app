export default function sortArr(oldArr, newArr, letter) {
  oldArr.forEach(element => {
    if (element.city[0].toLowerCase() === letter.toLowerCase()) {
      newArr.push(element.city);
    }
  });

  newArr.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    }
    return 0;
  });
}
