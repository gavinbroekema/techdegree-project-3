/**
 * Handle events that shoud be present onload
 * @param {e} 
 */
window.onload = (e) => {
    const firstInput = document.getElementById("name");
    firstInput.focus();

    const otherRole = document.getElementById('other-job-role');
    otherRole.style.display = 'none';

    // disable shirt selection box
    const shirtColors = document.getElementById('color');
    shirtColors.disabled = true;

    const payment = document.getElementById('payment');
    const credit = payment.querySelector('option[value="credit-card"');
    credit.selected = 'selected';

    document.getElementById('paypal').style.display = 'none';
    document.getElementById('bitcoin').style.display = 'none';


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

/**
 * Listen for changes to activity shirt theme selection
 * Make some shirts available for one theme and the others not
 * @param {e} 
 */
const shirtDesigns = document.getElementById('design');
shirtDesigns.addEventListener('change', (e) => {
    let selectedDesign = shirtDesigns.options[shirtDesigns.selectedIndex].value;
    const color = document.getElementById('color');
    const colorElements = color.getElementsByTagName('option');
    let defaultSelection = color.firstElementChild;
    if(selectedDesign == 'js puns') {
        color.disabled = false;
        defaultSelection.selected = true;
        defaultSelection.textContent = 'Select a Color';
        for(let i = 0; i < colorElements.length; i++) {
            let element = colorElements[i];
            if(element.value == 'cornflowerblue' || element.value == 'darkslategrey' || element.value == 'gold') {
                element.style.display = '';
            } else {
                element.style.display = 'none';
            }
        }
    } else if (selectedDesign == 'heart js') {
        color.disabled = false;
        defaultSelection.selected = true;
        defaultSelection.textContent = 'Select a Color';
        for(let i = 0; i < colorElements.length; i++) {
            let element = colorElements[i];
            if(element.value == 'tomato' || element.value == 'steelblue' || element.value == 'dimgrey') {
                element.style.display = '';
            } else {
                element.style.display = 'none';
            }
            
        }
    }
})

/**
 * Listen for changes to activity selection
 * Dynamically update the total price
 * @param {e} 
 */
const activities = document.getElementById('activities');
activities.addEventListener('change', e => {
    let sum = 0; 
    const box = document.getElementById('activities-box'); 
    const labels = box.getElementsByTagName('label');
    for(let i = 0; i < labels.length; i++) { 
        let checked = labels[i].firstElementChild.checked;
        if(checked) {
            sum += parseInt(labels[i].firstElementChild.dataset.cost);
        }
    }
    document.getElementById('activities-cost').textContent = 'Total: $' + sum;
})

/**
 * Listen for changes to payment method and update payment 
 * info options accordingly
 * @param {e} 
 */
const payment = document.getElementById('payment');
payment.addEventListener('change', e => {
    const paymentList = document.getElementById('payment').getElementsByTagName('option');
    for(let i = 0; i < paymentList.length; i++) {
        if(paymentList[i].value == 'credit-card' && paymentList[i].selected) {
            document.getElementById('credit-card').style.display = 'inherit';
            document.getElementById('paypal').style.display = 'none';
            document.getElementById('bitcoin').style.display = 'none';
        } else if (paymentList[i].value == 'paypal' && paymentList[i].selected) {
            document.getElementById('credit-card').style.display = 'none';
            document.getElementById('paypal').style.display = 'inherit';
            document.getElementById('bitcoin').style.display = 'none';
        } else if (paymentList[i].value == 'bitcoin' && paymentList[i].selected) {
            document.getElementById('credit-card').style.display = 'none';
            document.getElementById('paypal').style.display = 'none';
            document.getElementById('bitcoin').style.display = 'inherit';
        }
        
    }
}) 




/**
 * Validate if there is a name value in the form
 * Display a visual error if not
 * @param {e} 
 */
function validateName(e) {
    const name = document.getElementById('name');
    if (name.value === '' || name.value === null) {
        console.log('Name field improperly filled.')
        name.parentElement.className = 'not-valid';
        document.querySelector('#name-hint').style.display = 'block';
        e.preventDefault();
    } else {
        name.parentElement.className = 'valid';
        document.querySelector('#name-hint').style.display = 'none';

    }
}

/**
 * Validate if there is a email value in the form
 * Display a visual error if not
 * @param {e} 
 */
function validateEmail(e) {
    const email = document.getElementById('email');
    const emailRegex = /^\w+@\w+(.com|.org|.net|.edu)$/;
    if (!emailRegex.test(email.value) || email.value == '' || email.value == null) {
        console.log('Email field improperly filled.');
        
        email.parentElement.className = 'not-valid';
        document.querySelector('#name-hint').style.display = 'block';

        e.preventDefault();
    } else {
        email.parentElement.className = 'valid';
        document.querySelector('#name-hint').style.display = 'none';
    }
}

function validateActivitySelected(e) {
    const activityField = document.getElementById('activities');
    const activityHint = document.querySelector('#activities-hint');
    const activityInputList = document.getElementById('activities-box').getElementsByTagName('input');
    let checkedBox = false;
    // iterate through checkboxes to check if one is checked
    for(let i = 0; i < activityInputList.length; i++) {
        if(activityInputList[i].checked === true) {
            checkedBox = true;
        } 
    }
    if (checkedBox) {
        activityField.classList.remove('not-valid')
        activityField.classList.add('valid');
        activityHint.style.display = 'none';
    } else {
        console.log('Please select an activity.')
        activityField.classList.remove('valid');
        activityField.classList.add('not-valid');
        activityHint.style.display = 'block';
        e.preventDefault();
    }
}

function validateCreditCard(e) {
    // check if credit card option selected
    const creditCardOption = document.querySelector('option[value="credit-card"]');
    const ccNum = document.getElementById('cc-num').value;
    const zip = document.getElementById('zip').value;
    const cvv = document.getElementById('cvv').value;
    const year = document.getElementById('exp-year');
    const date = document.getElementById('exp-month');
    const ccRegEx = /^\d{13,16}$/;
    const zipRegEx = /^\d{5}$/;
    const cvvRegEx = /^\d{3}$/;    
    if(creditCardOption.selected) {
        if(year.options[year.selectedIndex].value === 'Select Year') {
            console.log('Invalid year');
            year.parentElement.className = 'not-valid';
            e.preventDefault();
        } else {
            year.parentElement.className = 'valid';
        }
        if(date.options[date.selectedIndex].value === 'Select Date') {
            console.log('Invalid date');
            date.parentElement.className = 'not-valid';
            e.preventDefault();
        } else {
            date.parentElement.className = 'valid';
        }
        if(!ccRegEx.test(ccNum)) {
            console.log('Invalid credit card number');
            document.getElementById('cc-num').parentElement.className = 'not-valid';
            document.querySelector('#cc-hint').style.display = 'block';
            e.preventDefault();
        } else {
            document.getElementById('cc-num').parentElement.className = 'valid';
            document.querySelector('#cc-hint').style.display = 'none';
        }
        if(!zipRegEx.test(zip)) {
            document.getElementById('zip').parentElement.className = 'not-valid';
            document.querySelector('#zip-hint').style.display = 'block';

            console.log('Invalid zip code');
            e.preventDefault();
        } else {
            document.getElementById('zip').parentElement.className = 'valid';
            document.querySelector('#zip-hint').style.display = 'none';
        }
        if(!cvvRegEx.test(cvv)) {
            document.getElementById('cvv').parentElement.className = 'not-valid';
            document.querySelector('#cvv-hint').style.display = 'block';
            console.log('Invalid cvv');
            e.preventDefault();
        } else {
            document.getElementById('cvv').parentElement.className = 'valid';
            document.querySelector('#cvv-hint').style.display = 'none';

        }
    }
}

const form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', e => {
    validateName(e);
    validateEmail(e);
    validateActivitySelected(e);
    validateCreditCard(e);
})

// Listen for focus and blur events on each of the checkbox inputs
// Is there a more elegant way of doing this ? 
// Parent element can not be focused without a tab index
const checkbox = document.querySelectorAll('input[type="checkbox"');
for(let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('focus', e => {
        checkbox[i].parentElement.className = 'focus';          
    })
    checkbox[i].addEventListener('blur', e => {
        checkbox[i].parentElement.className = 'blur';          
    })
}

// 3 done
// 4 done
// 5 done
// 6 done
// 7 done
// 8 done 
// 9 done

// Later *EXCEEDS* *REFACTOR - CC function
    // Validate form
    // there are any input parent elements with the .hint class
    // the form is invalid