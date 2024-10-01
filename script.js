const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let lastChecked = null;       

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', handleCheckboxChange);
});

function handleCheckboxChange(e) {
  
    const checkedCheckboxes = Array.from(checkboxes).filter(cb => cb.checked);

    if (checkedCheckboxes.length > 2 ) {
        lastChecked.checked = false;
    }
    lastChecked = e.target;
}