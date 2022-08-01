$(function () {
    $('.resources__slider').slick({
        dots: true,
        nextArrow: '<img class="slick-next" src="images/arrow_next.svg" alt="">',
        prevArrow: '<img class="slick-prev" src="images/arrow_prew.svg" alt="">'
    });
})
$(function () {
    $('.coments__slider-inner').slick({
        dots: true,
        arrows: false,
        slideToShow: 2,
        slideToScroll: 1,
    });
})

let questionsItembtn = document.querySelectorAll('.questions__title-btn')

questionsItembtn.forEach(btn => btn.onclick = function () {
    let btnParent = this.parentNode
    let itemParent = btnParent.parentNode
    let itemActive = itemParent.querySelector('.questions__item-info')
    let titleActive = btnParent.querySelector('.questions__title-text')

    this.classList.toggle('questions__title-btn--active')
    itemActive.classList.toggle('questions__item-info--active')
    titleActive.classList.toggle('questions__title-text--active')

})




function questionTemplate() {
    return `<p class="questions__info-text">
    Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit
    tractatos,
    vero tractatos ius an, in mel diceret persecuti.

</p>

<button class="questions__info-btn">
    Go to documentation
</button>`
}