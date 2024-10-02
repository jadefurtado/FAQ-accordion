function toggleAnswer(questionElement) {
    const answer = questionElement.nextElementSibling;
    const icon = questionElement.querySelector('.toggle-icon');

    const isExpanded = !answer.classList.contains('card__answer--hidden');

    if (!isExpanded) {
        answer.classList.remove('card__answer--hidden')
        icon.src = 'assets/images/icon-minus.svg';
        questionElement.setAttribute('aria-expanded', 'true');

    } else {
        answer.classList.add('card__answer--hidden');
        icon.src = 'assets/images/icon-plus.svg';
        questionElement.setAttribute('aria-expanded', 'false');
    }

}


