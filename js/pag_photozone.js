var cards = [{
        name: "Варіант №1",
        image: "img/photozone/pagphoto.jpg",
    },
    {
        name: "Варіант №2",
        image: "img/photozone/pagphoto4.jpg",

    },
    {
        name: "Варіант №3",
        image: "img/photozone/pagphoto6.jpg",

    },
    {
        name: "Варіант №4",
        image: "img/photozone/pagphoto.jpg"
    }
];







function My() {
    const CardContainer = $('#page');
    let lite = cards.slice(0, 3);
    cards.splice(0, 3);
    lite.forEach(function(item) {
        CardContainer.append('<div class="card shadow p-3 mb-5 bg-white rounded" style="width: 18rem;">' +
            ' <img class="card-img-top" src="' + item['image'] + '" alt = "Card image cap" > ' +
            '<div class="card-body">' +
            '<p class="card-text "> ' + item['name'] + '</p>' +
            '</div>' +
            '</div>');

    });
    if (cards.length == 0) {
        document.getElementById("bt").style = "display:none;"
    };

};