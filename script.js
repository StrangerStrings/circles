

document.addEventListener('keydown', kiPres)



function kiPres(e) {

    // console.log(e.key)
    // console.log('shape-' + e.key)

    try {
        document.getElementById('shape-shift-' + e.key).classList.remove('light-up')
    } catch{ }

    if (e.shiftKey) {
        console.log('shape-shift-' + e.key)
        try {
            document.getElementById('shape-shift-' + e.key.toLowerCase()).classList.add('light-up')
        } catch{ }
    }
    else {
        try {
            document.getElementById('shape-' + e.key).classList.add('light-up')
        } catch{ }
    }
}


document.addEventListener('keyup', kiOff)

function kiOff(e) {
    try {

        document.getElementById('shape-' + e.key).classList.remove('light-up')
    } catch{ }

}