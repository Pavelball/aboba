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
var innerHtmlCont = '', tempHtml, nameFriends;

$(window).on('load', () => {
    let id = 0;
    $.getJSON(pathImgData, function (data) {
        data = data[0];
        Object.keys(data).forEach(key => {
            tempHtml = '';
            nameFriends = data[key].name.split(/_/);
            Object.keys(temp = data[key].path).forEach(value => {
                tempHtml += `
                <div class="col">
                    <img src="media/${nameFriends[0] + '/' + temp[value]}" alt="">
                </div>`
            });
            innerHtmlCont +=
                `
                <div class="card">
                    <div class="card-header ${data[key].collapsed}" data-toggle="collapse" data-target="#${nameFriends[0]}">
                        <span>
                            ${nameFriends[0] + ' ' + nameFriends[1]}
                        </span>
                    </div>

                    <div id="${nameFriends[0]}" class="collapse width ${data[key].show}" data-parent="#accordionFriends">
                        <div class="card-body">
                            <div class="row row-cols-1 row-cols-sm-3 gy-2">
                                ${tempHtml}
                            </div>
                        </div>
                    </div>
                </div>
                `
            id++;
        });
        document.getElementById('accordionFriends').insertAdjacentHTML('afterbegin', innerHtmlCont);
    });
});