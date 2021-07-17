let rowNumberSection = document.querySelector(".row-number-section")
let formulaBarSelectedCellArea = document.querySelector(".selected-cell-div");

let cellSection = document.querySelector(".cell-section");
let columnTagsSection = document.querySelector(".column-tag-section");

let lastCell;//used for selecting and deselecting cell

cellSection.addEventListener("scroll", function (e) { //for scrolling row and col number with the cells

  //translate property humre row and col number vale section ko bhi sath mei scroll  kregi. Ye basically humre section ko jitne b px 
  //humri grid scroll hui h utne px scroll kr dege
  rowNumberSection.style.transform = `translateY(-${e.currentTarget.scrollTop}px)`; 
  columnTagsSection.style.transform = `translateX(-${e.currentTarget.scrollLeft}px)`;
});

for(let i = 1;i<=100;i++){ //for inserting rows because inserting 100 divs in html is very difficut
    let div = document.createElement("div");
    div.innerText = i; //row number
    div.classList.add("row-number");//for styling
    rowNumberSection.append(div);
}

for(let i = 0;i<26;i++){//inserting columns

    let asciiCode = 65 + i; 

    let reqAlphabet = String.fromCharCode(asciiCode)//for coverting ascii values to character

    let div = document.createElement("div")
    div.innerText = reqAlphabet;
    div.classList.add("column-tag")//for styling
    columnTagsSection.append(div);
}


for (let i = 1; i <= 100; i++) {
  let rowDiv = document.createElement("div");
  rowDiv.classList.add("row");
                       //i = 1 [A1,B1..........Z1]
                       //i = 2 []
                       //.
                       //.
                       //i = 100 [A100.........z100]

  for (let j = 0; j < 26; j++) {       //i = 100   j = 25  asciiCode = 65+25=90  alpha = z  cellAdd = Z100
    // A to Z
    let asciiCode = 65 + j;
    let reqAlphabet = String.fromCharCode(asciiCode);
    let cellAddress = reqAlphabet + i;
    let cellDiv = document.createElement("div");

    cellDiv.classList.add("cell");

    cellDiv.setAttribute("data-address", cellAddress);

    cellDiv.addEventListener("click", function (e) { //for highilighting cell when we click on it
      if (lastCell) {
        lastCell.classList.remove("cell-selected");//pehle se jo cell select h use unselect kdo
      }

      e.currentTarget.classList.add("cell-selected");//current cell ko select krdo

      lastCell = e.currentTarget;//last cell global variable hai jo batata h ki kaunsa cell last select hua hai


      //formula bar mei current cell ka address dalne k lie 
      let currCellAddress = e.currentTarget.getAttribute("data-address")
      formulaBarSelectedCellArea.innerText = currCellAddress


    });
    rowDiv.append(cellDiv);
  }

  cellSection.append(rowDiv)

}