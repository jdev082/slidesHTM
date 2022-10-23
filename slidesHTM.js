function generateCards() {
    fetch('./slides.json')
        .then((response) => response.json())
        .then((data) => {
            const body = document.body;
            for (const [slideId, slide, id, bgcolor, textcolor, font] of Object.entries(data.slides)) {
                const elem = document.createElement('div');
                elem.style = 'height: 100vh;'
                elem.innerText = slide.content;
                elem.id = slide.id;
                elem.style.backgroundColor = slide.bgcolor;
                elem.style.color = slide.textcolor;
                elem.style.fontFamily = slide.font
                body.appendChild(elem);
            }
        });
}
window.onload = generateCards;