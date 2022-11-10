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

// 3 done
// 4 done
// 5 done
// 6 done
// 7 done