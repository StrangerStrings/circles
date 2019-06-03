

document.addEventListener('keydown', kiPres)



function kiPres(e) {

    // console.log(e.key)

    try {
        document.getElementById('shape-shift-' + e.key).classList.remove('light-up')
    } catch{ }

    if (e.shiftKey) {
        console.log('shifted')
        try {
            document.getElementById('shape-shift-' + e.key.toLowerCase()).classList.add('light-up')
        } catch{ }
    }
    else {
        try {
            document.getElementById('shape-' + e.key).classList.add('light-up')
        } catch{ }
    }

    if (e.key == ' '){
        var spaceDiv = document.getElementById('shape-space')

        let dimensions = 2 + Math.random() * 13
        if( e.ctrlKey){
            console.log(dimensions)
            dimensions *= 2
            console.log(dimensions)
        }
        spaceDiv.style.width = dimensions + 'vw'
        spaceDiv.style.height = dimensions + 'vw'
        spaceDiv.style.top = (Math.random() * 80) + 10 + '%'
        spaceDiv.style.left = (Math.random() * 80) + 10 + '%'

        spaceDiv.classList.add('light-up')
    }

}


document.addEventListener('keyup', kiOff)

function kiOff(e) {
    try {
        document.getElementById('shape-' + e.key).classList.remove('light-up')
    } catch{ }

    if (e.key == ' '){
        document.getElementById('shape-space').classList.remove('light-up')
    }
}