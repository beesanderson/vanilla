const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();

let ticketPrice = +movieSelect.value;
// Seats is a node list. could use forEach() but its more efficient to add event listener onto the container


/*/ ----- Functions ----- /*/


// Save Selected Movie Index and Price

function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}


// Update Total and Count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    // Spread Operator used with map() to create index of seats for
    const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;

}


// Get data from local storage and populate user interface
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    console.log(selectedSeats)

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
           if (selectedSeats.indexOf(index) > -1) {
            seat.classList.add('selected')
           }
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex')
    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex
    }
}



// ----- Event Listeners -----

// Movie Select Event
movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value
    setMovieData(e.target.selectedIndex, e.target.value)
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

// Initial Count and Total Set
updateSelectedCount()