document.addEventListener("DOMContentLoaded", function () {
    const list = document.getElementById("reminderList");
    const newReminder = document.getElementById("newReminder");

    // Create reminder function (Template Card)
    function createReminder(id, message) {
        // Error handling
        if (message.length > 45) {
            alert("We only support 45 characters");
            return null;
        }

        const li = document.createElement("li");
        li.id = id;
        li.className = "reminder";

        const div = document.createElement("div");
        div.className = "text";
        div.innerText = message;

        // Actions container
        const actionContainer = document.createElement("div");
        actionContainer.className = "actions";

        // Have the check and delete buttons
        const checkBtn = document.createElement("button");
        checkBtn.className = "btn-check";
        checkBtn.innerText = "Checked";

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "btn-delete";
        deleteBtn.innerText = "Delete";

        // Event handler functions
        checkBtn.addEventListener("click", function () {
            div.style.textDecoration = "line-through";
        });

        deleteBtn.addEventListener("click", function () {
            list.removeChild(li);
        });

        // Append the buttons for actions
        actionContainer.appendChild(checkBtn);
        actionContainer.appendChild(deleteBtn);

        // Append all the elements in li
        li.appendChild(div);
        li.appendChild(actionContainer);

        return li;
    }

    newReminder.addEventListener("click", function () {
        let message = prompt("Please enter a Reminder");
        if (message) {
            let id = `reminder-${Math.floor(Math.random() * 10000)}`;
            let reminder = createReminder(id, message);
            if (reminder) {
                list.appendChild(reminder);
            }
        }
    });
});
