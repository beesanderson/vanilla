const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;
// Seats is a node list. could use forEach() but its more efficient to add event listener onto the container


// ----- Functions ------

// Update Total and Count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    // Spread Operator used with map() to create index of seats for
    // local storage saving
    const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));


    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;

}



// Need to create an array of indexes
    //Copy selected seats into array
    //Map through array
    //return a new array of indexes







// ----- Event Listeners -----

// Movie Select Event
movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value
    updateSelectedCount()
})


// Seat Click Event
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        // console.log(e.target)
        e.target.classList.toggle('selected')

        updateSelectedCount();
    }
})