
let spaceCount = 1

document.addEventListener('keydown', kiPres)

function kiPres(e) {

    if (e.repeat) return

    console.log(e.key)


    // remove light-up from shifted shape
    try {
        document.getElementById('shape-' + e.key.toUpperCase()).classList.remove('light-up')
    } catch{ }
    

    // add light-up to pressed key's shape
    try {
        document.getElementById('shape-' + e.key).classList.add('light-up')
    } catch{ }


    // space bar - random circle
    if (e.key == ' ') {
        var spaceDiv = document.getElementById('shape-space-' + spaceCount)

        let dimensions = 2 + Math.random() * 13
        if (e.ctrlKey) dimensions *= 2
        spaceDiv.style.width = dimensions + 'vw'
        spaceDiv.style.height = dimensions + 'vw'
        spaceDiv.style.top = (Math.random() * 80) + 10 + '%'
        spaceDiv.style.left = (Math.random() * 80) + 10 + '%'

        spaceDiv.classList.add('light-up')
    }


    // numbers - color changing 
    if (!Number.isNaN(parseInt(e.key))) {
        console.log('change colors')
        if (e.ctrlKey) {
            var allDivs = $('div')
            allDivs.removeClass(allColors)
            allDivs.addClass('color-' + e.key)
        }
        else {
            $('.light-up').each((index, elem) => {
                var letter = $(elem).attr('class').split(' ')[0]
                var divsToChange = $('.'+letter)
                divsToChange.removeClass(allColors)
                divsToChange.addClass('color-' + e.key)
            })
        }
    }

    function allColors(index, className) {
        let matchedClasses = className.match(/(^|\s)color-\d+/g);
        return (matchedClasses || []).join('');
    };
}


document.addEventListener('keyup', kiOff)

function kiOff(e) {
    try {
        document.getElementById('shape-' + e.key.toLowerCase()).classList.remove('light-up')
    } catch{ }

    if (e.key == ' ') {
        document.getElementById('shape-space-' + spaceCount).classList.remove('light-up')
        spaceCount++
        if (spaceCount == 9) spaceCount = 1
    }
}