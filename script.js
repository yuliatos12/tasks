const containerEl = document.querySelector('.container');
containerEl.addEventListener('click', handleClick);

function handleClick(event) {
const tilesEl = containerEl.querySelectorAll('.tile');
const clickedTile = event.target.closest('.tile');  
const clickedTileIndex = [...clickedTile.parentNode.children].indexOf(clickedTile);
const nodes = Array.prototype.slice.call(containerEl.children);
const empty = document.getElementsByClassName('empty')[0];
const isEmptyIndex = nodes.indexOf(empty);
console.log(isEmptyIndex);

// const isEven = clickedTileIndex % 4 === 0;



if(isEmptyIndex - clickedTileIndex == 1 && (clickedTileIndex % 4  !== 3)) {
  containerEl.insertBefore(tilesEl[isEmptyIndex], tilesEl[clickedTileIndex]);

} else if (clickedTileIndex - isEmptyIndex == 1 && (isEmptyIndex % 4  !== 3)) {
  containerEl.insertBefore(tilesEl[clickedTileIndex], tilesEl[isEmptyIndex]);

}  else if (isEmptyIndex - clickedTileIndex == 4) {
    containerEl.insertBefore(tilesEl[clickedTileIndex], tilesEl[isEmptyIndex]);
    containerEl.insertBefore(tilesEl[isEmptyIndex], tilesEl[clickedTileIndex + 1]);

} else if (clickedTileIndex - isEmptyIndex == 4) {
containerEl.insertBefore(tilesEl[clickedTileIndex], tilesEl[isEmptyIndex]);
    containerEl.insertBefore(tilesEl[isEmptyIndex], tilesEl[clickedTileIndex + 1]);
}


}














 


















    




