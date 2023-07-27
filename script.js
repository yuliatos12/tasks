const containerEl = document.querySelector('.container');
const tilesEl = containerEl.querySelectorAll('.tile');



containerEl.addEventListener('click', handleClick);


function handleClick(event) {

    const clickedTile = event.target.closest('.tile');
    
    console.log(clickedTile);

//     const firstTile = tilesEl[0];
// const secondTile = tilesEl[1];
// const thirdTile = tilesEl[2];
const fourthTile = tilesEl[3];
   

switch (fourthTile) {
    case clickedTile.nextElementSibling:
        containerEl.insertBefore(fourthTile, clickedTile);
        break; 
     case clickedTile.nextElementSibling:
        containerEl.insertBefore(fourthTile, clickedTile);
        break;
     case clickedTile.nextElementSibling:
        containerEl.insertBefore(fourthTile, clickedTile);
        break;      
}
}

const containerTwoEl = document.querySelector('.container-two');
const tilesTwoEl = containerTwoEl.querySelectorAll('.tiles');

containerTwoEl.addEventListener('click', handleTwoClick);

function handleTwoClick(event) {

const clickedTiles = event.target.closest('.tiles');
    

const one = tilesTwoEl[0];
const two = tilesTwoEl[1];
const three = tilesTwoEl[2];
const four = tilesTwoEl[3];
const five = tilesTwoEl[4];
const six = tilesTwoEl[5];
const seven = tilesTwoEl[6];
const eight = tilesTwoEl[7];
   


}










    




