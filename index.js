const ids = {
    userFullname: "Heng Sok",
    telegramUsername: "sok_hs",
    userPosition: "Backend Developer",
    userAge: 30,


    userAddress: "Phnom Penh, Cambodia"
}

const classes = {
    phone: "086 202 240",
    email: "hengsok2202@gmail.com",
}

const links = {
    email: "mailto:hengsok2202@gmail.com",
    phone: "tel:85586202240",
    telegram: "https://t.me/sok_hs",
    linkedin: "https://www.linkedin.com/in/heng-sok",
    github: "https://github.com/sok-hs",
}

$.each(ids, function (id, value) {
    $("#" + id).text(value);
});

$.each(classes, function (id, cls) {
    console.log(cls)
    $("." + id).text(cls);
})

$.each(links, function (id, link) {
    $("." + id).attr("href", link);
})




