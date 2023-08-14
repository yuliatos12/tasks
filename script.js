const containerEl = document.querySelector('.container');
containerEl.addEventListener('click', handleClick);
function handleClick(event) {
const tilesEl = containerEl.querySelectorAll('.tile');
const clickedTile = event.target.closest('.tile');  
const clickedTileIndex = [...clickedTile.parentNode.children].indexOf(clickedTile);
// console.log(clickedTileIndex);
const nodes = Array.prototype.slice.call(containerEl.children);
const empty = document.getElementsByClassName('empty')[0];
const isEmptyIndex = nodes.indexOf(empty);
console.log(isEmptyIndex);


if(isEmptyIndex - clickedTileIndex == 1) {
  containerEl.insertBefore(tilesEl[clickedTileIndex + 1], tilesEl[clickedTileIndex]);

} else if (clickedTileIndex - isEmptyIndex == 1) {
  containerEl.insertBefore(tilesEl[clickedTileIndex], tilesEl[clickedTileIndex - 1]);

} else if (isEmptyIndex - clickedTileIndex == 4) {
  containerEl.insertBefore(tilesEl[clickedTileIndex + 4], tilesEl[clickedTileIndex]);

} else if (clickedTileIndex - isEmptyIndex == 4) {
  containerEl.insertBefore(tilesEl[clickedTileIndex], tilesEl[clickedTileIndex - 4]);
}










// if (isEmpty) {
//     containerEl.insertBefore(tilesEl[clickedTileIndex + 1], tilesEl[clickedTileIndex]);
//   }

// // const isEmptyBackwards = tilesEl[clickedTileIndex - 1].classList.contains('empty');
// const isEmptyBackwards = clickedTileIndex - 1 < tilesEl.length ? tilesEl[clickedTileIndex - 1].classList.contains('empty') : false;
// // console.log(isEmptyBackwards);

//   if (isEmptyBackwards) {
//     containerEl.insertBefore(tilesEl[clickedTileIndex], tilesEl[clickedTileIndex - 1]);
//   }
// const isEmptyBelow = clickedTileIndex + 4 < tilesEl.length ? tilesEl[clickedTileIndex + 4].classList.contains('empty') : false;

//   if (isEmptyBelow) {
//     containerEl.insertBefore(tilesEl[clickedTileIndex + 4], tilesEl[clickedTileIndex]);
//   }

// const isEmptyAbove = clickedTileIndex - 4 < tilesEl.length ? tilesEl[clickedTileIndex - 4].classList.contains('empty') : false;

//   if(isEmptyAbove) {
//     containerEl.insertBefore(tilesEl[clickedTileIndex], tilesEl[clickedTileIndex - 4]);
//   }
 }














 


















    




