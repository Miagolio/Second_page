const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()

        slide.classList.add('active')
    })

    hideFullDescriptionOnMouseOut(slide)

    showFullDescriptionOnMouseOver(slide)
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}

function showFullDescriptionOnMouseOver(slide) {
    slide.getElementsByClassName('description')[0].addEventListener('mouseover', () => {
        const textElement = slide.getElementsByTagName('p')[0]

        textElement.classList.add('visible')
    })
}

function hideFullDescriptionOnMouseOut(slide) {
    slide.getElementsByClassName('description')[0].addEventListener('mouseout', () => {
        const textElement = slide.getElementsByTagName('p')[0]

        textElement.classList.remove('visible')
    })
}