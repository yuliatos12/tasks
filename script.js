const containerEl = document.querySelector('.container');
containerEl.addEventListener('click', handleClick);
function handleClick(event) {
const tilesEl = containerEl.querySelectorAll('.tile');
const clickedTile = event.target.closest('.tile');  
const clickedTileIndex = [...clickedTile.parentNode.children].indexOf(clickedTile);
// console.log(clickedTileIndex);


//const isEmpty = tilesEl[clickedTileIndex + 1].classList.contains('empty');

const isEmptyIndex = clickedTileIndex + 1;

if(isEmptyIndex - clickedTileIndex == 1) {
  containerEl.insertBefore(tilesEl[clickedTileIndex + 1], tilesEl[clickedTileIndex]);
}

const isEmptyIndexBackwards = clickedTileIndex - 1;
if(isEmptyIndexBackwards - clickedTileIndex == 1) {
  containerEl.insertBefore(tilesEl[clickedTileIndex], tilesEl[clickedTileIndex - 1]);
}

// const isEmptyIndexBelow = clickedTileIndex + 4;

// const isEmpty = clickedTileIndex + 1 < tilesEl.length ? tilesEl[clickedTileIndex + 1].classList.contains('empty') : false;
// console.log(isEmpty);

// const isEmptyIndex = clickedTileIndex + 1;
// console.log(isEmptyIndex);












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














 


















    




