Нужно разработать приложение, с помощью которого по имени юзера в Github можно получить данные по его репозиториям.

На странице будут:

- инпут для ввода имени юзера
- кнопка "Get repositories"
- список репозиториев

Каждый элемент списка репозиториев представляет из себя:

- ссылка на репозиторий (текст ссылки -- название репозитория)
- описание репозитория

Обработку клика на кнопку "Get repositories" нужно реализовать следующим образом:

- Если репозитории существуют, то вывести на экран список этих репозиториев.
- Если по тем или иным причинам загрузить список не удалось, то нужно вызвать alert с текстом ошибки (текст можете придумать сами)

Если в урле будет параметр `username` (например `codesandbox.io/?username=<some username>`), то во время старта приложения:

1.  В инпуте должно быть значение из параметра `username`
2.  загрузить список репозиториев (сделать так же, как и в случае клика по кнопке "Get repositories")