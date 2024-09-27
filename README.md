# Fast Cheap Good - Checkbox Toggle

This project implements a simple feature where only two checkboxes can be selected at the same time. If a third checkbox is selected, the previously checked checkbox (the second one) will automatically be unchecked, ensuring that only two checkboxes are ever selected at once.

## Features

- **Track Last Two Checked**: The system keeps track of the last two checkboxes that were checked.
- **Automatic Unchecking**: When a third checkbox is checked, the second previously checked one will be automatically unchecked.
- **User Flexibility**: Users can continue toggling between checkboxes, and the system will ensure the two-checkbox limit is maintained, allowing them to recheck options.

## How It Works

1. **State Tracking**:
   - `lastChecked`: Keeps track of the most recently checked checkbox.
   - `secondLastChecked`: Keeps track of the checkbox that was checked before the `lastChecked`.

2. **Event Listeners**:
   - Each checkbox has an event listener to detect when it is checked or unchecked.
   - When a checkbox is checked, the `lastChecked` is updated, and the previously checked checkbox moves to `secondLastChecked`.

3. **Limiting Checked Checkboxes**:
   - If more than two checkboxes are checked at once, the system will uncheck the checkbox stored in `secondLastChecked`.