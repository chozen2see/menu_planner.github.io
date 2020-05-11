function nameByAlpha(a, b) {
  // Use toUpperCase() to ignore character casing
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  console.log(nameA);
  console.log(nameB);
  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  console.log(comparison);
  return comparison;
}
