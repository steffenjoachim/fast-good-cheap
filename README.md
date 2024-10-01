# Fast Cheap Good - Checkbox Toggle

This script limits the number of checkboxes that can be selected at any given time in a web form. If more than two checkboxes are selected, the earliest selected checkbox will be automatically unchecked, ensuring that only two checkboxes remain checked.

## Features
- **Limits checkbox selection**: Ensures that only two checkboxes can be checked at a time.
- **Automatic uncheck**: When a third checkbox is selected, the earliest selected checkbox will be automatically unchecked.

## How It Works
- The script uses `document.querySelectorAll()` to select all input elements of type `checkbox`.
- It listens for the `change` event on each checkbox using `addEventListener()`.
- Every time a checkbox is checked or unchecked, the `handleCheckboxChange` function is executed.
- The function tracks the last checked checkbox using the `lastChecked` variable.
- If more than two checkboxes are selected, the script unchecks the first checkbox that was selected, maintaining the limit of two checkboxes.