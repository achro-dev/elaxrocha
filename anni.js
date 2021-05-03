document.addEventListener('DOMContentLoaded', function() {

  const birthdayTime = document.querySelector('#birthdayTime')
  const countdownContainer = document.querySelector('#countdown')
  const daysCountdown = document.querySelector('#days')
  const hoursCountdown = document.querySelector('#hours')
  const minutesCountdown = document.querySelector('#minutes')
  const secondsCountdown = document.querySelector('#seconds')

  const currentTime = new Date()
  let yearOfTheEvent = currentTime.getFullYear()
  let annivAlex = new Date( yearOfTheEvent, 04, 04 )
  const isItApril4th = currentTime.getMonth() === 04 && currentTime.getDate() === 04

  function countdown() {
    const now = new Date()
    
    if (now > annivAlex) {
      annivAlex = new Date( yearOfTheEvent + 1, 04, 04 )
    } else if ( now.getFullYear() === annivAlex.getFullYear() + 1 ) {
      annivAlex = new Date( now.getFullYear(), 04, 04 )
    }
    
    const currentTime = now.getTime()
    const annivAlex = annivAlex.getTime()
    const remainingTime = eventTime - currentTime

    let seconds = Math.floor( remainingTime / 1000 )
    let minutes = Math.floor( seconds / 60 )
    let hours =  Math.floor( minutes / 60 )
    let days = Math.floor( hours / 24 )

    hours %= 24
    minutes %= 60
    seconds %= 60

    if ( isItApril4th ) {
      console.log('Happy birthday, Alex!')

      countdownContainer.style.display = "none"
      birthdayTime.style.display = "block"

    } else {

      daysCountdown.textContent = days
      hoursCountdown.textContent = hours
      minutesCountdown.textContent = minutes
      secondsCountdown.textContent = seconds

      setTimeout(countdown, 1000)

    } 

  } // end of countdown
  countdown()

}) // end of DOMContentLoaded
