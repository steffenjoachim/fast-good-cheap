const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let lastChecked = null;        // To store the most recently checked checkbox
let secondLastChecked = null;  // To store the second most recently checked checkbox

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', handleCheckboxChange);
});

function handleCheckboxChange(e) {
    const checkedCheckboxes = Array.from(checkboxes).filter(cb => cb.checked);

    // If the checkbox is being checked, update the tracking variables
    if (e.target.checked) {
        // Move the current "last checked" checkbox to "secondLastChecked"
        secondLastChecked = lastChecked;
        // Set the newly clicked checkbox as the "last checked"
        lastChecked = e.target;
    }

    // If more than two checkboxes are checked, uncheck the second last one
    if (checkedCheckboxes.length > 2 && secondLastChecked) {
        secondLastChecked.checked = false;
        // Reset secondLastChecked after unchecking
        secondLastChecked = null;
    }
}
