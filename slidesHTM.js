function generateCards() {
    fetch('./slides.json')
        .then((response) => response.json())
        .then((data) => {
            const body = document.body;
            for (const [slideId, slide, id, bgcolor, textcolor, font, alignment] of Object.entries(data.slides)) {
                const elem = document.createElement('div');
                elem.style = 'height: 100vh';
                elem.innerHTML = slide.content;
                elem.id = slide.id;
                elem.style.backgroundColor = slide.bgcolor;
                elem.style.color = slide.textcolor;
                elem.style.fontFamily = slide.font;
                elem.style.fontWeight = "600"; 
                elem.style.padding = "10px 10px 10px 10px"; 
                elem.style.textAlign = slide.alignment;
                body.appendChild(elem);
            }
        });
}

function setWindowParams() {
    fetch('./config.json')
    .then((response) => response.json())
    .then((data) => {
        document.title = data.title;
        link = document.createElement('link');
        link.rel = data.favicon
        document.getElementsByTagName('head')[0].appendChild(link);
    });
}

generateCards()
setWindowParams();
