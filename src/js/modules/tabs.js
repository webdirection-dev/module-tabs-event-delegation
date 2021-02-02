// ТАБЫ

function tabs(tabSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    const tabs = document.querySelectorAll(tabSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector);

    // Скрываем табы
    function hideTabContent() {
        // Скрываем все блоки с контентом
        tabsContent.forEach((item) => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        // Убираем класс Active с выделенной кнопки
        tabs.forEach((item) => {
            item.classList.remove(activeClass);
        });
    }

    // Показываем табы
    function showTabContent(i = 0) {  // i = 0 дефолтное значение 0, где первый индекс псевдомассивов tabsContent и tabs;
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    // Дилегируем onclick на все табы tabs
    tabsParent.addEventListener('click', (event) => {   // ОБЯЗАТЕЛЬНО передаем объект события event
        const target = event.target;  // переопределяем even.target в переменную
        if (target && target.classList.contains(tabSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (target === item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

export default tabs;