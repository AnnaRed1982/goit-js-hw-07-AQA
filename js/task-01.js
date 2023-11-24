const categoriesSelector = document.querySelector("#categories");
const categories = categoriesSelector.children;

console.log("Number of categories:", categories.length);

for (let category of categories) {
  const categorName = category.firstElementChild.textContent;
  console.log("Category:", categorName);
  const categorLength = category.lastElementChild.children;
  console.log("Elements:", categorLength.length);
}
