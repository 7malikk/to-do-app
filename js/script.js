let inputValue;
let task = [];
let taskSection = document.getElementById('mainTaskSection');

function getValue() {
    inputValue = document.getElementById('inputValue').value;
    if (inputValue == '') {
        alert('Add a text');
    } else {
        console.log(inputValue);

        document.getElementById('inputValue').value = '';
        let html = '';
        task.push(`${inputValue}`);
        console.log(task);
        task.forEach(displayResult);

        function displayResult(text, index) {
            html +=
                `<li id=${index}>` +
                '<strong>' +
                text +
                '</strong>' +
                `<button class="ms-1 btn btn-outline-success btn-sm"  onClick="deleteBtn(${index})"> Delete </button>
                 <button class="ms-1 btn btn-outline-success btn-sm"  onClick="deleteBtn(${index})">Done</button>` +
                '</li>' +
                '<br>';

            return;
        }
        taskSection.innerHTML = html;
    }

    return;
}

function deleteBtn(index) {
    let newHtml = '';
    task.splice(index, 1);
    console.log(task);
    task.forEach(displayResult);

    function displayResult(text, index) {
        newHtml +=
            `<li id=${index}>` +
            '<strong>' +
            text +
            '</strong>' +
            `<button class="ms-2 btn btn-outline-success btn-sm"  onClick="deleteBtn(${index})"> Delete </button> 
            <button  class="ms-2 btn btn-outline-success btn-sm" onClick="deleteBtn(${index})">Done</button>` +
            '</li>' +
            '<br>';

        return;
    }
    taskSection.innerHTML = newHtml;
    return;
}

function clearList() {
    document.getElementById('mainTaskSection').innerHTML = '';
}