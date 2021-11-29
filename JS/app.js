console.log("This is JS file");

//constructor of the Book Object
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

//display constructor
function Display()
{

}

//add methods to diplay prototype
Display.prototype.add = function(book){
    let tableBody = document.getElementById("tableBody");
    let uistring = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
    tableBody.innerHTML += uistring;
}
Display.prototype.clear = function(){
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}

//eventlistner for LibraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;

    let computerScience = document.getElementById("computerScience");
    let romance = document.getElementById("romance");
    let selfHelp = document.getElementById("selfHelp");
    let classics = document.getElementById("classics");
    let fiction = document.getElementById("fiction");
    let type;
    if (computerScience.checked) {
        type = computerScience.value;
    }
    else if (romance.checked) {
        type = romance.value;
    }
    else if (selfHelp.checked) {
        type = selfHelp.value;
    }
    else if (classics.checked) {
        type = classics.value;
    }
    else if (fiction.checked) {
        type = fiction.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    display.add(book);
    display.clear();

    e.preventDefault();

}