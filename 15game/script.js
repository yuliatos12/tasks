const containerEl = document.querySelector(".container");
containerEl.addEventListener("click", handleClick);
const btnEl = document.querySelector(".btn");
btnEl.addEventListener("click", handleSuffle);

function handleSuffle() {
  const tilesEl = containerEl.querySelectorAll(".tile");
  const tilesArray = Array.from(tilesEl);
  for (let i = tilesArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tilesArray[i], tilesArray[j]] = [tilesArray[j], tilesArray[i]];
  }
  tilesArray.forEach((tile) => containerEl.appendChild(tile));

  const finishMessage = containerEl.nextElementSibling;
  finishMessage.remove();
}

function handleClick(event) {
  const tilesEl = containerEl.querySelectorAll(".tile");
  const clickedTile = event.target.closest(".tile");
  const clickedTileIndex = [...clickedTile.parentNode.children].indexOf(
    clickedTile
  );
  const nodes = Array.prototype.slice.call(containerEl.children);
  const empty = document.getElementsByClassName("empty")[0];
  const isEmptyIndex = nodes.indexOf(empty);
  console.log(isEmptyIndex);

  if (isEmptyIndex - clickedTileIndex == 1 && clickedTileIndex % 4 !== 3) {
    containerEl.insertBefore(tilesEl[isEmptyIndex], tilesEl[clickedTileIndex]);
  } else if (clickedTileIndex - isEmptyIndex == 1 && isEmptyIndex % 4 !== 3) {
    containerEl.insertBefore(tilesEl[clickedTileIndex], tilesEl[isEmptyIndex]);
  } else if (isEmptyIndex - clickedTileIndex == 4) {
    containerEl.insertBefore(tilesEl[clickedTileIndex], tilesEl[isEmptyIndex]);
    containerEl.insertBefore(
      tilesEl[isEmptyIndex],
      tilesEl[clickedTileIndex + 1]
    );
  } else if (clickedTileIndex - isEmptyIndex == 4) {
    containerEl.insertBefore(tilesEl[clickedTileIndex], tilesEl[isEmptyIndex]);
    containerEl.insertBefore(
      tilesEl[isEmptyIndex],
      tilesEl[clickedTileIndex + 1]
    );
  }

  if (winningCheck()) {
    const finishMessage = document.createElement("p");
    finishMessage.textContent = "Congratulations!🎊✨🎈";
    containerEl.after(finishMessage);
    return;
  }
  if (handleClick) {
    const finishMessage = containerEl.nextElementSibling;
    finishMessage.remove();
  }
}

let initialArray = Array.from(containerEl.querySelectorAll(".tile"));
function winningCheck() {
  const currentArray = Array.from(containerEl.querySelectorAll(".tile"));

  for (let i = 0; i < initialArray.length; i++) {
    if (initialArray[i] !== currentArray[i]) {
      return false;
    }
  }
  return true;
}
