
let passengerSelectedSeat = [];
let count = 0;
const allSeats = document.getElementsByClassName('seatBtn');
for (const seat of allSeats) {
    seat.addEventListener('click', function (e) {
        let displayArr = []; //for displaying items

        if (count >= 4) {
            alert('You can take only 4');
        } else {
            const seatAllClass = e.target.classList;
            seatAllClass.add('bg-primaryColor');

            const seatSelect = e.target.innerText;

            if (passengerSelectedSeat.includes(seatSelect)) {
                alert('Not Available');
            } else {
                passengerSelectedSeat.push(seatSelect);
                displayArr.push(seatSelect);
                count++;
            }
        }



        // array Length 
        const seatLength = passengerSelectedSeat.length;
        // show seat count 
        getIdSetValue('seatCountShow', seatLength);
        getIdSetValue('seatAvailableNow', 40 - seatLength);

        // btn anable
        if (seatLength === 4) {
            enableBtn('cupponBtn');

        } else {
            disableBtn('cupponBtn')
        }

        if (seatLength >= 1) {
            enableBtn('submitBtn');
        }



        console.log(phoneNUmberTaken);
        // display ticket 
        for (let i = 0; i < displayArr.length; i++) {
            const displayContainer = document.getElementById('displaySeat');

            const li = document.createElement('li');
            const liStyle = li.classList
            liStyle.add('flex', 'gap-x-20');
            const p = document.createElement('p');
            const p2 = document.createElement('p');
            const h4 = document.createElement('h4');
            p.innerText = displayArr[i];
            p2.innerText = 'Economoy';
            h4.innerText = 550;

            li.appendChild(p);
            li.appendChild(p2);
            li.appendChild(h4);
            displayContainer.appendChild(li);

        }

        // total cost calculate and show
        const perSeatPrise = convertTextIdToInt('perSeatPrise');
        const displayTotalCost = seatLength * perSeatPrise;
        getIdSetValue('totalCost', displayTotalCost);

        getIdSetValue('grandTotal', displayTotalCost);



        // discount code 
        document.getElementById('cupponBtn').addEventListener('click', function () {
            const cupponData = document.getElementById('cupponInputData').value;

            const fourBuyCouponCode = document.getElementById('fourBuyCoupon').innerText;
            const couple20 = document.getElementById('couple20').innerText;

            if (cupponData === fourBuyCouponCode) {
                hiddenByClass('grandTotalInputHidden');
                const perSeatPrise = convertTextIdToInt('perSeatPrise');
                const displayTotalCost = seatLength * perSeatPrise;
                const discount = (displayTotalCost * 15) / 100;
                hiddenClassRemove('discountShow');
                document.getElementById('discoutP').innerText = discount;
                const totalPayAfterDiscount = displayTotalCost - discount;
                getIdSetValue('grandTotal', totalPayAfterDiscount);
            } else if (cupponData === couple20) {
                hiddenByClass('grandTotalInputHidden');
                const perSeatPrise = convertTextIdToInt('perSeatPrise');
                const displayTotalCost = seatLength * perSeatPrise;
                const discount = (displayTotalCost * 20) / 100;
                hiddenClassRemove('discountShow');
                document.getElementById('discoutP').innerText = discount;
                const totalPayAfterDiscount = displayTotalCost - discount;
                getIdSetValue('grandTotal', totalPayAfterDiscount);
            } else {

            }

        })

        // success code 
        document.getElementById('submitBtn').addEventListener('click', function () {
            hiddenByClass('headerSection');
            hiddenByClass('mainSection');
            hiddenByClass('footerSection');
            hiddenClassRemove('successId');

        })

        document.getElementById('continueSuccessBtn').addEventListener('click', function () {
            getIdSetValue('totalCost', 0);
            getIdSetValue('grandTotal', 0);
            getIdSetValue('discoutP', 0);
            passengerSelectedSeat = [];
            displayArr = [];
            const len = passengerSelectedSeat.length;
            // show seat count 
            getIdSetValue('seatCountShow', len);
            getIdSetValue('seatAvailableNow', 40 - len);


            hiddenByClass('successId');
            hiddenClassRemove('headerSection');
            hiddenClassRemove('mainSection');
            hiddenClassRemove('footerSection');
        })








    })
}
