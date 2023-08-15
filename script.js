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



if(isEmptyIndex - clickedTileIndex == 1 ) {
  containerEl.insertBefore(tilesEl[isEmptyIndex], tilesEl[clickedTileIndex]);

} else if (clickedTileIndex - isEmptyIndex == 1 ) {
  containerEl.insertBefore(tilesEl[clickedTileIndex], tilesEl[isEmptyIndex]);

}  else if ((isEmptyIndex - clickedTileIndex == 4 || clickedTileIndex - isEmptyIndex == 4) && !(clickedTileIndex - isEmptyIndex == 1 || isEmptyIndex - clickedTileIndex == 1)) {
    containerEl.insertBefore(tilesEl[clickedTileIndex], tilesEl[isEmptyIndex]);
    containerEl.insertBefore(tilesEl[isEmptyIndex], tilesEl[clickedTileIndex + 1]);
 
}
}














 


















    




