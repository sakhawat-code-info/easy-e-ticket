


let passengerSelectedSeat = [];
const allSeats = document.getElementsByClassName('seatBtn');
for (const seat of allSeats) {
    seat.addEventListener('click', function (e) {
        let okArr = [];
        // bg color changed 
        const seatAllClass = e.target.classList;
        seatAllClass.add('bg-primaryColor')

        const seatSelect = e.target.innerText;
        passengerSelectedSeat.push(seatSelect);
        okArr.push(seatSelect);
        // array Length 
        const seatLength = passengerSelectedSeat.length;
        // show seat count 
        getIdSetValue('seatCountShow', seatLength);

        // btn anable
        if (seatLength === 2) {
            enableBtn('cupponBtn');
        } else if (seatLength >= 1) {
            enableBtn('submitBtn');
        } else {
        }





        for (let i = 0; i < okArr.length; i++) {
            const containerTest = document.getElementById('test');

            const p = document.createElement('p');
            const p = document.createElement('p');
            const pDecoration = p.classList;
            pDecoration.add('ralewayFont', 'font-semibold', 'font-semibold', 'text-[#03071299]');
            const h4 = document.createElement('h4');
            const h4Decoration = h4.classList;
            h4Decoration.add('ralewayFont', 'font-semibold', 'font-semibold', 'text-[#03071299]');
            p.innerText = okArr[i];
            h4.innerText = 550;

            containerTest.appendChild(p);
            containerTest.appendChild(h4);

        }







    })
}


console.log(seatDisplay);


