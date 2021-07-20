//Драггинг
$(document).ready(() => {
    $(".drag").draggable({ containment: "#info" });
});

//Прелоадер
$(window).on('load', () => {
    window.setTimeout(() => {
        $('#preloader').fadeOut('slow');
    }, 1600);
    window.setTimeout(() => { $('#preloader').remove() }, 2000)
})

//Печать
$(document).ready(() => {

    $(".typed").typed({
        strings: [" niggers.", " feminism.", " LGBT."],
        typeSpeed: 50,
        backDelay: 1000,
        startDelay: 500,
        loop: true,
        contentType: 'html',
    });

}
)

const pathImgData = "./js/data/pathImg.json";
var innerHtmlCont = '', tempHtml, idFriends = ['collapseEgor', 'collapseDanil', 'collapseArtem', 'collapseAlex'];

$(window).on('load', () => {
    let id = 0;
    $.getJSON(pathImgData, function (data) {
        data = data[0];
        Object.keys(data).forEach(key => {
            tempHtml = '';
            Object.keys(data[key]).forEach(value => {
                tempHtml += `
                <div class="col-sm">
                    <div class="card">
                        <img src="media/${idFriends[id].split(/(?=[A-Z])/)[1] + '/' + data[key][value]}" 
                            class="card-img-top" alt="">
                    </div>
                </div>`
            });
            innerHtmlCont +=
                `
                <div class="col-lg">
                    <div class="collapse" id="${idFriends[id]}">
                        <div class="row row-cols-sm-3 gy-4 justify-content-evenly">
                            ${tempHtml}
                        </div>
                    </div>
                </div>
                `
            id++;
        });
        document.getElementById('bodyInner').insertAdjacentHTML('beforeend', innerHtmlCont);
    });
})