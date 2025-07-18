function scrollToBooking() {
  document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your appointment has been booked.");
  this.reset();
});
