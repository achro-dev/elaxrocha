document.addEventListener('DOMContentLoaded', function() {

  const birthdayTime = document.querySelector('#birthdayTime')
  const countdownContainer = document.querySelector('#countdown')
  const daysCountdown = document.querySelector('#days')
  const hoursCountdown = document.querySelector('#hours')
  const minutesCountdown = document.querySelector('#minutes')
  const secondsCountdown = document.querySelector('#seconds')
  const txtCont = document.querySelector('#infotxt')

  const currentTime = new Date()
  let yearOfTheEvent = currentTime.getFullYear()
  let annivAlex = new Date( yearOfTheEvent, 05, 24 )
  const isItJune24th = currentTime.getMonth() === 05 && currentTime.getDate() === 24

  function countdown() {
    const now = new Date()
    
    if (now > annivAlex) {
      annivAlex = new Date( yearOfTheEvent + 1, 05, 24 )
    } else if ( now.getFullYear() === annivAlex.getFullYear() + 1 ) {
      annivAlexe = new Date( now.getFullYear(), 05, 24 )
    }
    
    const currentTime = now.getTime()
    const eventTime = annivAlex.getTime()
    const remainingTime = eventTime - currentTime

    let seconds = Math.floor( remainingTime / 1000 )
    let minutes = Math.floor( seconds / 60 )
    let hours =  Math.floor( minutes / 60 )
    let days = Math.floor( hours / 24 )

    hours %= 24
    minutes %= 60
    seconds %= 60

    if ( isItJune24th ) {
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
