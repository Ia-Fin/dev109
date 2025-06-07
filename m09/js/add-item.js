// Hides the message placeholder so it doesn't show on first load.
document.getElementById('message').style.display = 'none'; 

// The Add Item function.
function addItem() {
	// Inititalize references to the input field, list, and message display.
	var input = document.getElementById('itemInput');
	var list = document.getElementById('todo');
	var message = document.getElementById('message');
	
	// Removes any leading or trailing whitespaces from the user's input and stores it.
	var newItem = input.value.trim();
	
    // Check if user entered anything, and throw an error if not.
	try {
		if (!newItem) {
			throw new Error("You must enter a value.");
		}
		
        // Create a new <li> element and set its text to the user’s input
		var newEl = document.createElement('li');
		var newText = document.createTextNode(newItem);
		newEl.appendChild(newText);
		list.appendChild(newEl);
		
		// EXTRA CREDIT: Clears the input field after adding the item.
		input.value = '';
		
		// Logs the error to the browser console if one is thrown.
      	} catch (e) {
		console.log(e);
		
		// Shows the message on error, hides it on success.
		} finally {
		if (!newItem) {
			message.textContent = 'Please enter a grocery item.';
			message.style.display = 'block';
			} else {
			message.textContent = '';
			message.style.display = 'none';
		}
	} 
}
