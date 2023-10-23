let darkMode = true
const buttonToggle = document.querySelector('#toggle-mode')

buttonToggle.addEventListener('click', e => {
    document.documentElement.classList.toggle('light')

    const mode = darkMode ? 'light' : 'dark'
    e.currentTarget.querySelector('span').textContent = `${mode} mode activated!`
    
    darkMode = !darkMode
})