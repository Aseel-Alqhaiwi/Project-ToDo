let count = 1; // External counter starts from 1

function MyFunction() {
    const list = document.createElement('li');
    list.className = "list-style"; 

    const input = document.createElement("input");
    input.type = "checkbox";
    input.className = "checkbox-style-" + count; 

    const p = document.createElement("p");
    p.className = "p-style-" + count;

    // Get the task name
    const textValue = document.getElementById('text').value;
    
    // Ensure task name is not empty
    if (textValue.trim() === "") {
        alert("Please enter a task name!");
        return;
    }

    const textNode = document.createTextNode(textValue);

    // Get the task start date
    const dateValue = document.getElementById('date').value;
    
    // Ensure a date is selected
    if (dateValue === "") {
        alert("Please select a start date!");
        return;
    }

    const dateNode = document.createTextNode(" (Start: " + dateValue + ")");

    // Add both task name and date to the paragraph element
    p.appendChild(textNode);
    p.appendChild(dateNode);

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.onclick = function () {
        container.removeChild(list);
    };

    // Add checkbox event to toggle line-through
    input.addEventListener('change', function() {
        if (input.checked) {
            p.style.textDecoration = "line-through";
        } else {
            p.style.textDecoration = "none";
        }
    });

    // Append elements to the list item
    list.appendChild(input);
    list.appendChild(p);
    list.appendChild(deleteButton); // Append the delete button to the list item

    // Append the list item to the container
    const container = document.getElementById('container');
    container.appendChild(list);

    // Clear the input fields after adding the task
    document.getElementById('text').value = '';
    document.getElementById('date').value = '';

    // Increment the counter
    count++;
}
