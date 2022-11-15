window.onload = (e) => {
    const firstInput = document.getElementById("name");
    firstInput.focus();

    const otherRole = document.getElementById('other-job-role');
    otherRole.style.display = 'none';

    const shirtColors = document.getElementById('shirt-colors');
    const colorOptions = shirtColors.getElementsByTagName('option');
    for(let i = 0; i < colorOptions.length; i++) {
        // console.log(colorOptions[i]);
        // console.log(colorOptions[i].disable);
        colorOptions[i].disabled = true;
    }

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

const shirtDesigns = document.getElementById('design');
shirtDesigns.addEventListener('change', (e) => {
    let selectedDesign = shirtDesigns.options[shirtDesigns.selectedIndex].value;
    const color = document.getElementById('color');
    const colorElements = color.getElementsByTagName('option');
    let defaultSelection = color.firstElementChild;
    if(selectedDesign == 'js puns') {
        defaultSelection.selected = true;
        defaultSelection.textContent = 'Select a Color';
        for(let i = 0; i < colorElements.length; i++) {
            let element = colorElements[i];
            if(element.value == 'cornflowerblue' || element.value == 'darkslategrey' || element.value == 'gold') {
                element.disabled = false;
            } else {
                element.disabled = true;
            }
        }
    } else if (selectedDesign == 'heart js') {
        defaultSelection.selected = true;
        defaultSelection.textContent = 'Select a Color';
        for(let i = 0; i < colorElements.length; i++) {
            let element = colorElements[i];
            if(element.value == 'tomato' || element.value == 'steelblue' || element.value == 'dimgrey') {
                element.disabled = false;
            } else {
                element.disabled = true;
            }
            
        }
    }
})

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

// function nameValidator(name) {
//     if (name.value !== '') {
//         return false;
//     } 
// }



function validateName(e) {
    const name = document.getElementById('name');
    if (name.value === '' || name.value === null) {
        e.preventDefault();
        console.log('Name field improperly filled.')
    }
}

function validateEmail(e) {
    const email = document.getElementById('email');
    const emailRegex = /^\w+@\w+(.com|.org|.net|.edu)$/;
    if (!emailRegex.test(email.value) || email.value == '' || email.value == null) {
        e.preventDefault();
        console.log('Email field improperly filled.')
    }
}

function validateActivitySelected(e) {
    const activityInputList = document.getElementById('activities-box').getElementsByTagName('input');
    let activitySelected = false;
    for(let i = 0; i < activityInputList.length; i++) {
        if(activityInputList[i].checked === true) {
            return true;
        } 
    }
    e.preventDefault();
    console.log('Please select an activity.')
    return false;
}

function validateCreditCard(e) {
    // check if credit card option selected
    const creditCardOption = document.querySelector('option[value="credit-card"]');
    const ccNum = document.getElementById('cc-num').value;
    const zip = document.getElementById('zip').value;
    const cvv = document.getElementById('cvv').value;
    const ccRegEx = /^\d{13,16}$/;
    const zipRegEx = /^\d{6}$/;
    const cvvRegEx = /^\d{3}$/;
    
    if(creditCardOption.selected) {
        if(!ccRegEx.test(ccNum)) {
            console.log('Invalid credit card number');
            e.preventDefault();
        }
        if(!zipRegEx.test(zip)) {
            console.log('Invalid zip code');
            e.preventDefault();
        }
        if(!cvvRegEx.test(cvv)) {
            console.log('Invalid cvv');
            e.preventDefault();
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

// 3 done
// 4 done
// 5 done
// 6 done
// 7 done
// 8 done 