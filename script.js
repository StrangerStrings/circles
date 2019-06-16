
let spaceCount = 1

document.addEventListener('keydown', function (e) {

    if (e.repeat) return

    console.log(e.key)


    // remove lit from shifted shape
    try {
        document.getElementById('shape-' + e.key.toUpperCase()).classList.remove('lit')
    } catch{ }
    

    // add lit to pressed key's shape
    try {
        document.getElementById('shape-' + e.key).classList.add('lit')
    } catch{ }


    // space bar - random circle
    if (e.key == ' ') {
        const spaceDiv = document.getElementById('shape-space-' + spaceCount)

        let dimensions = 2 + Math.random() * 13
        if (e.ctrlKey) dimensions *= 2
        spaceDiv.style.width = dimensions + 'vw'
        spaceDiv.style.height = dimensions + 'vw'
        spaceDiv.style.top = (Math.random() * 80) + 10 + '%'
        spaceDiv.style.left = (Math.random() * 80) + 10 + '%'

        spaceDiv.classList.add('lit')
    }


    // numbers - color changing 
    if (!isNaN(parseInt(e.key))) {

        if (event.ctrlKey){
            const allDivs = document.getElementsByTagName('div')
            for (let i=0; i<allDivs.length; i++){
                allDivs[i].setAttribute('name', 'color-'+event.key)
            }
        }
        const litDivs = document.getElementsByClassName('lit')
        for (let i=0; i<litDivs.length; i++){
            const letter = litDivs[i].classList[0]
            document.getElementById('shape-' + letter.toLowerCase()).setAttribute('name', 'color-'+event.key)
            document.getElementById('shape-' + letter.toUpperCase()).setAttribute('name', 'color-'+event.key)
        }
    }
})


document.addEventListener('keyup', function (e) {
    try {
        document.getElementById('shape-' + e.key.toLowerCase()).classList.remove('lit')
    } catch{ }

    if (e.key == ' ') {
        document.getElementById('shape-space-' + spaceCount).classList.remove('lit')
        spaceCount++
        if (spaceCount == 9) spaceCount = 1
    }
})