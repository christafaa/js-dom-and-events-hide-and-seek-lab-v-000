function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n) {
  const nums = document.querySelectorAll('ul.ranked-list');

  for (let i = 0; i < nums.length; i++) {
    nums[i].innerHTML = (parseInt(nums[i]) + 1).toString();
  }
}

function deepestChild() {
  return document.querySelector('div#grand-node div div div div')
}
