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

//clear function
Display.prototype.clear = function(){
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}

//validate function
Display.prototype.validate = function(book){
    if(book.name.length<2 || book.author.length<2)
    {
        return false;
    }
    else
    {
        return true;
    }
}


//show fucntion
Display.prototype.show = function(type, msg){
    let message = document.getElementById("message");
    message.innerHTML = `
                            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>Message: </strong> ${msg}
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        `;

    setTimeout(function(){
        message.innerHTML = "";
    }, 7000);
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

    if(display.validate(book))
    {
    display.add(book);
    display.clear();
    display.show('success', 'Your book has been added successfully.')
    }
    else
    {
        //showing error
        display.show('danger', 'Sorry, this is not the right format of adding a book.')
    }

    e.preventDefault();

}