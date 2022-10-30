window.onload = (e) => {
    const firstInput = document.getElementById("name");
    firstInput.focus();

    const otherRole = document.getElementById('other-job-role');
    otherRole.style.display = 'none';

}

// Toggle other input textbox when 'Other' is selected
const title = document.getElementById('title');
title.addEventListener('change', (e) => {
    let selectedRole = title.options[title.selectedIndex].value;
    const otherRole = document.getElementById('other-job-role');
    if( selectedRole == 'other') {
        otherRole.style.display = 'inherit';
    } else {
        otherRole.style.display = 'none';
    }
})


// 3 done
// 4 done
