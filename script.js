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







    




