<template>
  <ul class="droplistContainer">
    <DropItem v-for="item in list" :key="item.title" :item="item"/>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        list: [
          {
            title: 'Портфолио',
            body: [
              {
                title: 'Skillbox. Курс Vue. Интернет магазин.',
                githubLink: 'https://github.com/andreynef/vueOnlineStoreSkillbox',
                websiteLink:'https://andreynef.github.io/vue-skillbox-deploy/',
              },
              {
                title: 'Skillbox. Курс React. Reddit App (Express,API,SSR,TS). В доработке',
                githubLink: 'https://github.com/andreynef/react-reddit',
                websiteLink:'https://react-reddit-app-andrey.herokuapp.com/',
              },
              {
                title: 'Skillbox. Дипломная работа по JS. Unsplash Photo App (React,Redux,Webpack)',
                githubLink: 'https://github.com/andreynef/jsDiplomaRedux',
                websiteLink:'https://jsdiploma.andreynef.ru/',
              },
              {
                title: 'Сайт для "ADHD movers" (MaterialUi, NextJs, Firebase)',
                githubLink: 'https://github.com/andreynef/adhd_movers',
                websiteLink:'https://adhdmovers.andreynef.ru',
              },
              {
                title: 'Сайт для мувинга (MaterialUi, NextJs, Firebase)',
                githubLink: null,
                websiteLink:'https://konstant-movers.com',
              },
              {
                title: 'Курс по MaterialUi - React, Router. Итоговая работа',
                githubLink: 'https://github.com/andreynef/material-ui-arc',
                websiteLink:'https://arc.andreynef.ru',
              },
              {
                title: 'Курс по MaterialUi - React, Router. Менеджер проектов (диалоговое окно с поиском)',
                githubLink: 'https://github.com/andreynef/materialUi-ArcProjectManager',
                websiteLink:'https://arcpm.andreynef.ru',
              },
              {
                title: 'Тестовое задание, HTML верстка',
                githubLink: 'https://github.com/andreynef/Affinage-testTask',
                websiteLink:'https://affinage.andreynef.ru',
              },
              {
                title: 'Skillbox. Дипломная работа по верстке. Визитка',
                githubLink: 'https://github.com/andreynef/VerstkaDiploma-skillbox-',
                websiteLink:'https://skillbox-bcard.andreynef.ru/',
              },
              {
                title: 'SkillBox. HTML верстка, адаптив, новости',
                githubLink: 'https://github.com/andreynef/VerstkaNewsAdaptive-skillbox-',
                websiteLink:'https://skillbox-news.andreynef.ru/',
              },
              {
                title: 'PetProject. Vue3,Nuxt3, Pinia, EmailJS, FireStore. (Фокус на Ipad)',
                websiteLink:'https://beloezerkalo.space/',
              },
            ],
          },
          {
            title: 'Профильное образование. Skillbox. Профессия Frontend-Разработчик',

            body: [
              {
                title: 'Веб-вёрстка 2019',
                done: true,
                inProcess: false,
                finalWork: true,
                comments: [],

                body: [
                  {
                    title: 'Вводный модуль',
                    inProcess: false,
                    done: true,

                    body: [
                      {
                        title: 'Как работают сайты. Backend и frontend. Вёрстка',
                        done: true,
                      },
                      {
                        title: 'Как выглядит и из чего состоит код веб-страницы',
                        done: true,
                      },
                      {
                        title: 'Установка редактора кода Sublime Text',
                        done: true,
                      },
                      {
                        title: 'Простая веб-страница на HTML. Тэги и атрибуты',
                        done: true,
                      },
                      {
                        title: 'CSS-стили. Селекторы, параметры и значения',
                        done: true,
                      },
                    ],
                  },
                  {
                    title: 'HTML',
                    inProcess: false,
                    done: true,

                    body: [
                      {
                        title: 'Приветственное видео',
                        done: true,
                      },
                      {
                        title: 'Структура HTML5-документа',
                        done: true,
                      },
                      {
                        title: 'Обзор и демонстрация работы основных HTML-тэгов',
                        done: true,
                      },
                      {
                        title: 'Вёрстка веб-форм. Поля и кнопки. Валидация форм',
                        done: true,
                      },
                      {
                        title: 'Таблицы и табличная вёрстка',
                        done: true,
                      },
                      {
                        title: 'Семантическая вёрстка. Стандарты и валидность',
                        done: true,
                      },
                    ],
                  },
                  {
                    title: 'Основы CSS',
                    inProcess: false,
                    done: true,

                    body: [
                      {
                        title: 'Переходим к следующему модулю',
                        done: true,
                      },
                      {
                        title: 'Как можно задавать стили. Селекторы',
                        done: true,
                      },
                      {
                        title: 'Отступы, поля, размеры и единицы измерения',
                        done: true,
                      },
                      {
                        title: 'Inline- и block- элементы, свойство display',
                        done: true,
                      },
                      {
                        title: 'Обтекание, позиционирование и слои',
                        done: true,
                      },
                      {
                        title: 'Блочная верстка',
                        done: true,
                      },
                      {
                        title: 'Цвета, шрифты, фон и границы',
                        done: true,
                      },
                    ],
                  },
                  {
                    title: 'Основы JavaScript',
                    inProcess: false,
                    done: true,

                    body: [
                      {
                        title: 'Что такое JavaScript и как его подключать к веб-страни',
                        done: true,
                      },
                      {
                        title: 'Библиотека jQuery. Управление стилями элементов',
                        done: true,
                      },
                      {
                        title: 'Обработка событий',
                        done: true,
                      },
                      {
                        title: 'Работа с DOM, изменение, добавление и удаление элементов',
                        done: true,
                      },
                      {
                        title: 'Отображение и скрытие элементов, анимация',
                        done: true,
                      },
                      {
                        title: 'Работа с сетью, получение и отправка данных',
                        done: true,
                      },
                      {
                        title: 'JavaScript-фреймворки',
                        done: true,
                      },
                    ],
                  },
                  {
                    title: 'Адаптивность и кроссбраузерность',
                    inProcess: false,
                    done: true,

                    body: [
                      {
                        title: 'Адаптивность и кроссбраузерность',
                        done: true,
                      },
                      {
                        title: 'Media-запросы',
                        done: true,
                      },
                      {
                        title: 'Flexbox',
                        done: true,
                      },
                      {
                        title: 'Шаги адаптивности и сетки',
                        done: true,
                      },
                      {
                        title: 'Разнообразие браузеров и их особенности',
                        done: true,
                      },
                      {
                        title: 'Инструменты проверки и обеспечения адаптивности и кроссбраузерности',
                        done: true,
                      },
                    ],
                  },
                  {
                    title: 'Оформление',
                    inProcess: false,
                    done: true,

                    body: [
                      {
                        title: 'Фон, прозрачность и градиенты',
                        done: true,
                      },
                      {
                        title: 'Границы, аутлайны и тени',
                        done: true,
                      },
                      {
                        title: 'Шрифты и оформление текста. Типографика и спецсимволы',
                        done: true,
                      },
                      {
                        title: 'Стили указателей',
                        done: true,
                      },
                      {
                        title: 'Изображения. Форматы, сжатие, спрайты, iconfonts. Favicon',
                        done: true,
                      },
                      {
                        title: 'Рисование на веб-странице. SVG и Canvas',
                        done: true,
                      },
                    ],
                  },
                  {
                    title: 'Advanced CSS',
                    inProcess: false,
                    done: true,

                    body: [
                      {
                        title: 'Сложные селекторы. Свойство important',
                        done: true,
                      },
                      {
                        title: 'Псевдо-классы и псевдо-элементы',
                        done: true,
                      },
                      {
                        title: 'Транформации, переходы и анимации',
                        done: true,
                      },
                      {
                        title: 'Стандарты именования в CSS. Методология БЭМ',
                        done: true,
                      },
                      {
                        title: 'Библиотеки стилей: Bootstrap, Semantic UI, Material UI',
                        done: true,
                      },
                      {
                        title: 'Шаблонизаторы (Twig, Haml) и препроцессоры (SASS, LESS, Stylus)',
                        done: true,
                      },
                    ],
                  },
                  {
                    title: 'Инструменты верстальщика',
                    inProcess: false,
                    done: true,

                    body: [
                      {
                        title: 'Последний модуль. Осталось чуть-чуть!',
                        done: true,
                      },
                      {
                        title: 'Размещение своих работ в Интернете. Домен и хостинг',
                        done: true,
                      },
                      {
                        title: 'Инструменты командной разработки. Таск-трекеры и Git',
                        done: true,
                      },
                      {
                        title: 'Сборщики, минификаторы и оптимизаторы проектов',
                        done: true,
                      },
                      {
                        title: 'Инструменты прототипирования',
                        done: true,
                      },
                      {
                        title: 'Другие среды разработки. NetBeans, WebStorm',
                        done: true,
                      },
                    ],
                  },
                ]
              },
              {
                title: 'Веб-вёрстка 2020',
                done: false,
                inProcess: true,
                finalWork: false,
                comments: [],

                body: [
                  {
                    title: 'Введение',
                    inProcess: false,
                    done: false,

                    body: [
                      {
                        title: 'Приветствие',
                        done: false,
                      },
                      {
                        title: 'Как работают сайты. Верстка. Backend и Frontend',
                        done: false,
                      },
                      {
                        title: 'Возможности HTML, CSS, JS',
                        done: false,
                      },
                      {
                        title: 'Редактор кода. Codepen',
                        done: false,
                      },
                      {
                        title: 'Работа с devtools',
                        done: false,
                      },
                      {
                        title: 'VS Code',
                        done: false,
                      },
                      {
                        title: 'Домашняя работа',
                        done: false,
                      },
                    ],
                  },
                  {
                    title: 'Базовый HTML',
                    inProcess: false,
                    done: true,

                    body: [
                      {
                        title: 'Ускорение работы. Emmet',
                        done: false,
                      },
                      {
                        title: 'Элементы HTML-разметки. Базовые теги',
                        done: false,
                      },
                      {
                        title: 'Теги картинок и ссылок. Кнопки',
                        done: false,
                      },
                      {
                        title: 'Теги таблиц',
                        done: false,
                      },
                      {
                        title: 'Служебные теги',
                        done: false,
                      },
                      {
                        title: 'Кодстайл HTML',
                        done: false,
                      },
                      {
                        title: 'Домашняя работа',
                        done: false,
                      },
                    ],
                  },
                  {
                    title: 'Базовый CSS',
                    inProcess: false,
                    done: true,

                    body: [
                      {
                        title: 'Подключение CSS',
                        done: false,
                      },
                      {
                        title: 'Селекторы. Вес селектора',
                        done: false,
                      },
                      {
                        title: 'Единицы измерения CSS',
                        done: false,
                      },
                      {
                        title: 'Стилизация CSS',
                        done: false,
                      },
                      {
                        title: 'Свойство display',
                        done: false,
                      },
                      {
                        title: 'Блочная модель',
                        done: false,
                      },
                      {
                        title: 'Позиционирование',
                        done: false,
                      },
                      {
                        title: 'Кодстайл CSS',
                        done: false,
                      },
                      {
                        title: 'Домашняя работа',
                        done: false,
                      },
                    ],
                  },
                  {
                    title: 'Работа с макетом',
                    inProcess: false,
                    done: true,

                    body: [
                      {
                        title: 'Форматы изображений',
                        done: false,
                      },
                      {
                        title: 'Работа с макетом. Photoshop',
                        done: false,
                      },
                      {
                        title: 'Экспорт изображений',
                        done: false,
                      },
                      {
                        title: 'Работа с макетом. Figma',
                        done: false,
                      },
                      {
                        title: 'Домашняя работа',
                        done: false,
                      },
                    ],
                  },
                  {
                    title: 'Layout',
                    inProcess: false,
                    done: true,

                    body: [
                      {
                        title: 'Интро',
                        done: false,
                      },
                      {
                        title: 'HTML-семантика',
                        done: false,
                      },
                      {
                        title: 'Разметка макета',
                        done: false,
                      },
                      {
                        title: 'Флексбокс — базовая сетка (часть 1)',
                        done: false,
                      },
                      {
                        title: 'Флексбокс — базовая сетка (часть 2)',
                        done: false,
                      },
                      {
                        title: 'Css-стилизация (часть1)',
                        done: false,
                      },
                      {
                        title: 'Css-стилизация (часть2)',
                        done: false,
                      },
                      {
                        title: 'Домашняя работа',
                        done: false,
                      },
                    ],
                  },
                  {
                    title: 'Продвинутый HTML. Формы',
                    inProcess: false,
                    done: true,

                    body: [
                      {
                        title: 'Узконаправленные теги',
                        done:false,
                      },
                      {
                        title: 'Теги для аудио и видео. Iframe. Нюансы использовани',
                        done:false,
                      },
                      {
                        title: 'Продвинутое подключение изображений',
                        done:false,
                      },
                      {
                        title: 'Формы',
                        done:false,
                      },
                    ],
                  },
                  {
                    title: 'Продвинутый СSS',
                    inProcess: false,
                    done:false,

                    body: [
                      {
                        title: 'Интро',
                        done:false,
                      },
                      {
                        title: 'Подключение шрифтов',
                        done:false,
                      },
                      {
                        title: 'Комбинаторные селекторы',
                        done:false,
                      },
                      {
                        title: 'Псевдоклассы',
                        done:false,
                      },
                      {
                        title: 'Псевдоэлементы',
                        done:false,
                      },
                      {
                        title: 'Transition',
                        done:false,
                      },
                      {
                        title: 'Transform',
                        done:false,
                      },
                      {
                        title: 'Кастомные свойства',
                        done:false,
                      },
                      {
                        title: 'CSS-функции',
                        done:false,
                      },
                      {
                        title: 'БЭМ-именование',
                        done:false,
                      },
                    ],
                  },
                  {
                    title: 'Сетки',
                    inProcess: false,
                    done:false,

                    body: [
                      {
                        title: 'Интро',
                        done:false,
                      },
                      {
                        title: 'Что такое сетка?',
                        done:false,
                      },
                      {
                        title: 'Построение собственной сетки',
                        done:false,
                      },
                      {
                        title: 'Сетки на примере Bootstrap',
                        done:false,
                      },
                      {
                        title: 'Практика: bootstrap',
                        done:false,
                      },
                      {
                        title: 'Пример сложной разработки сетки',
                        done:false,
                      },
                      {
                        title: 'Аутро',
                        done:false,
                      },
                      {
                        title: 'Домашняя работа',
                        done:false,
                      },
                    ],
                  },
                  {
                    title: 'Адаптивность. Декстоп и планшет',
                    inProcess: true,
                    done: false,

                    body: [
                      {
                        title: 'Интро',
                        done:false,
                      },
                      {
                        title: 'Виды верстки',
                        done:false,
                      },
                      {
                        title: 'Медиа-запросы. Mobile First',
                        done:false,
                      },
                      {
                        title: 'Медиа-запросы. Практика',
                        done:false,
                      },
                      {
                        title: 'Best Practices',
                        done:false,
                      },
                      {
                        title: 'Pixel Perfect',
                        done:false,
                      },
                      {
                        title: 'Домашняя работа',
                        done: false,
                      },
                    ],
                  },
                  {
                    title: 'Адаптивность. Мобильные устройства',
                    inProcess: true,
                    done: false,

                    body: [
                      {
                        title: 'Интро',
                        done:false,
                      },
                      {
                        title: 'Адаптивные изображения',
                        done:false,
                      },
                      {
                        title: 'Настройка сервера для проверки адаптивности',
                        done:false,
                      },
                      {
                        title: 'Формы на нативных устройствах',
                        done:false,
                      },
                      {
                        title: 'Практика',
                        done:false,
                      },
                      {
                        title: 'Домашняя работа',
                        done: false,
                      },
                    ],
                    inDevelopment: false,
                  },
                  {
                    title: 'Доступность',
                    inProcess: true,
                    done: false,

                    body: [
                      {
                        title: 'Интро',
                        done:false,
                      },
                      {
                        title: 'Понятие доступности',
                        done:false,
                      },
                      {
                        title: 'Проверка доступности. Клавиатура',
                        done:false,
                      },
                      {
                        title: 'Проверка доступности. Скринридер',
                        done:false,
                      },
                      {
                        title: 'Влияние семантики на доступность',
                        done:false,
                      },
                      {
                        title: 'ARIA',
                        done:false,
                      },
                      {
                        title: 'Аутро',
                        done:false,
                      },
                      {
                        title: 'Домашняя работа',
                        done: false,
                      },
                    ],
                  },
                  {
                    title: 'Javascript для верстальщика (откроется 06.11.2020)',
                    inProcess: false,
                    done: false,

                    body: [],
                    inDevelopment: true,
                  },
                  {
                    title: 'Кроссбраузерность (откроется 27.11.2020)',
                    inProcess: false,
                    done: false,

                    body: [],
                    inDevelopment: true,
                  },
                  {
                    title: 'Практикум (бонус) (откроется 18.12.2020)',
                    inProcess: false,
                    done: false,

                    body: [],
                    inDevelopment: true,
                  },
                  {
                    title: 'Работа с хостингом (откроется 08.01.2021)',
                    inProcess: false,
                    done: false,

                    body: [],
                    inDevelopment: true,
                  },
                  {
                    title: 'Курсовая (мини-проект)',
                    inProcess: false,
                    done: false,

                    body: [],
                    inDevelopment: true,
                  },
                  {
                    title: 'Верстка HTML-писем',
                    inProcess: false,
                    done: false,

                    body: [],
                    inDevelopment: true,
                  },
                  {
                    title: 'Сборщики',
                    inProcess: false,
                    done: false,

                    body: [],
                    inDevelopment: true,
                  },
                  {
                    title: 'Препроцессоры и Постпроцессоры',
                    inProcess: false,
                    done: false,

                    body: [],
                    inDevelopment: true,
                  },
                  {
                    title: 'CSS Grid',
                    inProcess: false,
                    done: false,

                    body: [],
                    inDevelopment: true,
                  },
                  {
                    title: 'Анимация',
                    inProcess: false,
                    done: false,

                    body: [],
                    inDevelopment: true,
                  },
                  {
                    title: 'CMS',
                    inProcess: false,
                    done: false,

                    body: [],
                    inDevelopment: true,
                  },
                  {
                    title: 'Будущее верстки',
                    inProcess: false,
                    done: false,

                    body: [],
                    inDevelopment: true,
                  },
                  {
                    title: 'Информация о дипломном проекте',
                    inProcess: false,
                    done: false,

                    body: [],
                    inDevelopment: true,
                  },
                ]
              },
              {
                title: 'JavaScript 2019',
                done: true,
                inProcess: false,
                finalWork: false,
                comments: [],

                body: [
                  {
                    title: 'Знакомство с языком',
                    inProcess: false,
                    done: true,

                    body: [
                      {
                        title: 'Интро',
                        done: true,
                      },
                      {
                        title: 'Что умеет JavaScript и почему он так популярен?',
                        done: true,
                      },
                      {
                        title: 'Инструменты разработчика',
                        done: true,
                      },
                      {
                        title: 'Hello, world!',
                        done: true,
                      },
                      {
                        title: 'Синтаксис языка',
                        done: true,
                      },
                      {
                        title: 'Аутро',
                        done: true,
                      },
                      {
                        title: 'Домашняя работа',
                        done: true,
                      },
                    ],
                  },
                  {
                    title: 'Основы',
                    inProcess: false,
                    done: true,

                    body: [
                      {
                        title: 'Приветственное видео',
                        done: true,
                      },
                      {
                        title: 'Интро',
                        done: true,
                      },
                      {
                        title: 'Числа',
                        done: true,
                      },
                      {
                        title: 'Строки',
                        done: true,
                      },
                      {
                        title: 'Логические (булевые) значения',
                        done: true,
                      },
                      {
                        title: 'NaN (Not a Number)',
                        done: true,
                      },
                      {
                        title: 'Infinity',
                        done: true,
                      },
                      {
                        title: 'Математические операторы',
                        done: true,
                      },
                      {
                        title: 'Переменные',
                        done: true,
                      },
                      {
                        title: 'Преобразование типов',
                        done: true,
                      },
                      {
                        title: 'Условия',
                        done: true,
                      },
                      {
                        title: 'Циклы',
                        done: true,
                      },
                      {
                        title: 'Домашняя работа',
                        done: true,
                      },
                    ],
                  },
                  {
                    title: 'Функции',
                    inProcess: false,
                    done: true,

                    body: [
                      {
                        title: 'Переходим к следующему модулю',
                        done: true,
                      },
                      {
                        title: 'Интро',
                        done: true,
                      },
                      {
                        title: 'Объявление и вызов функций',
                        done: true,
                      },
                      {
                        title: 'Аргументы',
                        done: true,
                      },
                      {
                        title: 'Локальные и глобальные переменные',
                        done: true,
                      },
                      {
                        title: 'Hoisting',
                        done: true,
                      },
                      {
                        title: 'Возвращаемые значения',
                        done: true,
                      },
                      {
                        title: 'Рекурсия',
                        done: true,
                      },
                      {
                        title: 'Домашняя работа',
                        done: true,
                      },
                    ],
                  },
                  {
                    title: 'Массивы и объекты',
                    inProcess: false,
                    done: true,

                    body: [
                      {
                        title: 'Понятие объектов',
                        done: true,
                      },
                      {
                        title: 'Объекты в JavaScript',
                        done: true,
                      },
                      {
                        title: 'Перебор свойств объекта',
                        done: true,
                      },
                      {
                        title: 'Массивы',
                        done: true,
                      },
                      {
                        title: 'Стандартный объект Math',
                        done: true,
                      },
                      {
                        title: 'Стандартный объект String',
                        done: true,
                      },
                      {
                        title: 'Стандартный объект Array',
                        done: true,
                      },
                      {
                        title: 'Стандартный объект Date',
                        done: true,
                      },
                      {
                        title: 'Домашняя работа',
                        done: true,
                      },
                    ],
                  },
                  {
                    title: 'Замыкания',
                    inProcess: false,
                    done: true,

                    body: [
                      {
                        title: 'Глобальный объект window',
                        done: true,
                      },
                      {
                        title: 'Сборщик мусора',
                        done: true,
                      },
                      {
                        title: 'Замыкания',
                        done: true,
                      },
                      {
                        title: 'IIFE',
                        done: true,
                      },
                      {
                        title: 'Домашняя работа',
                        done: true,
                      },
                    ],
                  },
                  {
                    title: 'Объекты и конструкторы',
                    inProcess: false,
                    done: true,

                    body: [
                      {
                        title: 'Функции-конструкторы',
                        done: true,
                      },
                      {
                        title: 'Контекст вызова',
                        done: true,
                      },
                      {
                        title: 'Привязка контекста (call, apply и bind)',
                        done: true,
                      },
                      {
                        title: 'Домашняя работа',
                        done: true,
                      },
                    ],
                  },
                  {
                    title: 'Объектно-ориентированное программирование',
                    inProcess: false,
                    done: true,

                    body: [
                      {
                        title: 'ООП. Наследование, инкапсуляция, полиморфизм',
                        done: true,
                      },
                      {
                        title: 'Функциональное наследование',
                        done: true,
                      },
                      {
                        title: 'Прототипное наследование',
                        done: true,
                      },
                      {
                        title: 'Прототипы стандартных объектов',
                        done: true,
                      },
                      {
                        title: 'Домашняя работа',
                        done: true,
                      },
                    ],
                  },
                  {
                    title: 'Разное',
                    inProcess: false,
                    done: true,

                    body: [
                      {
                        title: 'Объект arguments',
                        done: true,
                      },
                      {
                        title: 'setTimeout и setInterval',
                        done: true,
                      },
                      {
                        title: 'Выполнение кода через eval',
                        done: true,
                      },
                      {
                        title: 'Обработка исключений (throw, catch)',
                        done: true,
                      },
                      {
                        title: 'Регулярные выражения',
                        done: true,
                      },
                      {
                        title: 'Строгий режим (strict mode)',
                        done: true,
                      },
                      {
                        title: 'Домашняя работа',
                        done: true,
                      },
                    ],
                  },
                  {
                    title: 'JavaScript в браузере. DOM',
                    inProcess: false,
                    done: true,

                    body: [
                      {
                        title: 'Интро',
                        done: true,
                      },
                      {
                        title: 'DOM',
                        done: true,
                      },
                      {
                        title: 'Порядок выполнения скриптов',
                        done: true,
                      },
                      {
                        title: 'Селекторы',
                        done: true,
                      },
                      {
                        title: 'Свойства и методы элементов',
                        done: true,
                      },
                      {
                        title: 'События и обработчики',
                        done: true,
                      },
                      {
                        title: 'Погружение и всплытие событий',
                        done: true,
                      },
                      {
                        title: 'Домашняя работа',
                        done: true,
                      },
                    ],
                  },
                  {
                    title: 'Web API',
                    inProcess: false,
                    done: true,

                    body: [
                      {
                        title: 'Интро',
                        done: true,
                      },
                      {
                        title: 'Console',
                        done: true,
                      },
                      {
                        title: 'Window',
                        done: true,
                      },
                      {
                        title: 'Document',
                        done: true,
                      },
                      {
                        title: 'Информация о браузере и истории переходов',
                        done: true,
                      },
                      {
                        title: 'LocalStorage и SessionStorage',
                        done: true,
                      },
                      {
                        title: 'ContentEditable',
                        done: true,
                      },
                      {
                        title: 'Разнообразие Web API',
                        done: true,
                      },
                      {
                        title: 'Домашняя работа',
                        done: true,
                      },
                    ],
                  },
                  {
                    title: 'Клиент и сервер',
                    inProcess: false,
                    done: true,

                    body: [
                      {
                        title: 'Клиент-серверное взаимодействие (интро)',
                        done: true,
                      },
                      {
                        title: 'Запуск локального сервера',
                        done: true,
                      },
                      {
                        title: 'AJAX и callback',
                        done: true,
                      },
                      {
                        title: 'JSON и Promise',
                        done: true,
                      },
                      {
                        title: 'API и WebSocket',
                        done: true,
                      },
                      {
                        title: 'Домашняя работа',
                        done: true,
                      },
                    ],
                  },
                  {
                    title: 'jQuery',
                    inProcess: false,
                    done: true,

                    body: [
                      {
                        title: 'Библиотека jQuery. Интро',
                        done: true,
                      },
                      {
                        title: 'Библиотеки и frameworks. Интро',
                        done: true,
                      },
                      {
                        title: 'Возможности jQuery',
                        done: true,
                      },
                      {
                        title: 'Анимация',
                        done: true,
                      },
                      {
                        title: 'AJAX',
                        done: true,
                      },
                      {
                        title: 'Плагины',
                        done: true,
                      },
                      {
                        title: 'Домашняя работа',
                        done: true,
                      },
                    ],
                  },
                  {
                    title: 'Современный JavaScript. ES 2015',
                    inProcess: false,
                    done: true,

                    body: [
                      {
                        title: 'История стандарта ECMAScript. Интро',
                        done: true,
                      },
                      {
                        title: 'Транспиляция и полифиллы',
                        done: true,
                      },
                      {
                        title: 'Let и const',
                        done: true,
                      },
                      {
                        title: 'Деструктуризация',
                        done: true,
                      },
                      {
                        title: 'Rest и spread',
                        done: true,
                      },
                      {
                        title: 'Template strings',
                        done: true,
                      },
                      {
                        title: 'Стрелочные функции и параметры по умолчанию',
                        done: true,
                      },
                      {
                        title: 'Классы и наследование',
                        done: true,
                      },
                      {
                        title: 'Домашняя работа',
                        done: true,
                      },
                    ],
                  },
                  {
                    title: 'Сборка проектов',
                    inProcess: false,
                    done: true,

                    body: [
                      {
                        title: 'Интро. Что такое сборка проектов и для чего она нужна?',
                        done: true,
                      },
                      {
                        title: 'Node.js',
                        done: true,
                      },
                      {
                        title: 'npm',
                        done: true,
                      },
                      {
                        title: 'Gulp',
                        done: true,
                      },
                      {
                        title: 'Webpack',
                        done: true,
                      },
                      {
                        title: 'Домашняя работа',
                        done: true,
                      },
                    ],
                  },
                  {
                    title: 'React',
                    inProcess: false,
                    done: true,

                    body: [
                      {
                        title: 'DOM и императивный подход. Интро',
                        done: true,
                      },
                      {
                        title: 'React и декларативный подход',
                        done: true,
                      },
                      {
                        title: 'Подготовка рабочего пространства',
                        done: true,
                      },
                      {
                        title: 'Простое React-приложение',
                        done: true,
                      },
                      {
                        title: 'Разделение на компоненты',
                        done: true,
                      },
                      {
                        title: 'Домашняя работа',
                        done: true,
                      },
                    ],
                  },
                  {
                    title: 'Redux',
                    inProcess: false,
                    done: true,

                    body: [
                      {
                        title: 'Последний модуль. Осталось чуть-чуть!',
                        done: true,
                      },
                      {
                        title: 'Интро',
                        done: true,
                      },
                      {
                        title: 'Ключевые принципы Redux',
                        done: true,
                      },
                      {
                        title: 'Установка зависимостей и разделение на компоненты',
                        done: true,
                      },
                      {
                        title: 'Создание store и reducers',
                        done: true,
                      },
                      {
                        title: 'Создание actions',
                        done: true,
                      },
                      {
                        title: 'Запуск приложения',
                        done: true,
                      },
                      {
                        title: 'Домашняя работа',
                        done: true,
                      },
                    ],
                  },
                  {
                    title: 'Бонус',
                    inProcess: false,
                    done: true,

                    body: [
                      {
                        title: 'Библиотеки и фреймворки 2017',
                        done: true,
                      },
                      {
                        title: 'Развитие стандарта ECMAScri',
                        done: true,
                      },
                      {
                        title: 'Тестирование кода',
                        done: true,
                      },
                    ],
                  },
                ]
              },
              {
                title: 'JavaScript-фреймворк React.js',
                done: false,
                inProcess: true,
                finalWork: false,
                comments: [],

                body: [
                  {
                    title: 'Введение в React',
                    inProcess: false,
                    done: true,

                    body: [
                      {
                        title: 'Что такое React. Основные преимущества',
                        done: true,
                      },
                      {
                        title: 'Основы декларативного подхода',
                        done: true,
                      },
                      {
                        title: 'Возможности React, компоненты, состояние, применения',
                        done: true,
                      },
                      {
                        title: 'Экосистема React, основные библиотеки, из чего обычно состоит реакт',
                        done: true,
                      },
                    ],
                  },
                  {
                    title: 'Создание проекта',
                    inProcess: false,
                    done: true,

                    body: [
                      {
                        title: 'Конфигурация webpack на клиенте',
                        done: true,
                      },
                      {
                        title: 'Конфигурация webpack на сервере',
                        done: true,
                      },
                      {
                        title: 'Подключаем к проекту HMR и SSR',
                        done: true,
                      },
                      {
                        title: 'Подключаем typescript',
                        done: true,
                      },
                      {
                        title: 'CSS modules, Jest, Enzyme',
                        done: true,
                      },
                    ],
                  },
                  {
                    title: 'Typescript',
                    inProcess: false,
                    done: true,

                    body: [
                      {
                        title: 'Основы Typescript, Типы',
                        done: true,
                      },
                      {
                        title: 'Работа с массивами',
                        done: true,
                      },
                      {
                        title: 'Работа с объектами и интерфейсами',
                        done: true,
                      },
                      {
                        title: 'Типизация функций и типы ТС',
                        done: true,
                      },
                      {
                        title: 'Generics',
                        done: true,
                      },
                      {
                        title: 'Классы',
                        done: true,
                      },
                      {
                        title: 'Infer, typeof, keyof, Mapped Types',
                        done: true,
                      },
                    ],
                  },
                  {
                    title: 'Компоненты на примере новостной карточки Reddit',
                    inProcess: false,
                    done: true,

                    body: [
                      {
                        title: 'Компоненты в React',
                        done: true,
                      },
                      {
                        title: 'Состояния в Class Components',
                        done: true,
                      },
                      {
                        title: 'Состояния в Functional Components',
                        done: true,
                      },
                      {
                        title: 'Создаем Layout приложения. Часть 1',
                        done: true,
                      },
                      {
                        title: 'Создаем Layout приложения. Часть 2',
                        done: true,
                      },
                      {
                        title: 'Создаем компонент новостной карточки',
                        done: true,
                      },
                      {
                        title: 'Жизненный цикл компонента',
                        done: true,
                      },
                    ],
                  },
                  {
                    title: 'Hooks и Функциональное программирование',
                    inProcess: false,
                    done: true,

                    body: [
                      {
                        title: 'Карирование и Функции высшего порядка',
                        done: true,
                      },
                      {
                        title: 'Hooks в реакт',
                        done: true,
                      },
                      {
                        title: 'Map Reduce React',
                        done: true,
                      },
                      {
                        title: 'Создание компонента dropdown c использованием hooks',
                        done: true,
                      },
                      {
                        title: 'Compose, Pipe и применение в React',
                        done: true,
                      },
                    ],
                  },
                  {
                    title: 'Больше о компонентах и введение в тестирование компонентов',
                    inProcess: false,
                    done:true,

                    body: [
                      {
                        title: 'Адаптивные и неадаптивные компоненты. Mobile first и desktop first в адаптиве. Разница в подходах',
                        done:false,
                      },
                      {
                        title: 'Дропдаун меню',
                        done:false,
                      },
                      {
                        title: 'Введение в unit тесты и jest',
                        done:false,
                      },
                      {
                        title: 'Пишем тест на реакт компонент Enzyme vs Snapshots',
                        done:false,
                      },
                      {
                        title: 'Вспомогательные компоненты',
                        done:false,
                      },
                    ],
                  },
                  {
                    title: 'Работа с публичным API на примере Reddit',
                    inProcess: false,
                    done:true,

                    body: [
                      {
                        title: 'Как работать с API',
                        done:false,
                      },
                      {
                        title: 'Регистрируем аккаунт разработчика на Reddit',
                        done:false,
                      },
                      {
                        title: 'OAuth2',
                        done:false,
                      },
                      {
                        title: 'Авторизация пользователя',
                        done:false,
                      },
                      {
                        title: 'Как структурировать API запросы',
                        done:false,
                      },
                    ],
                  },
                  {
                    title: 'Введение в Redux на примере Новостной ленты (откроется 08.09.2020)',
                    inProcess: false,
                    done: true,

                    body: [],
                    inDevelopment: true,
                  },
                  {
                    title: 'Использование Redux-Thunk на примере бесконечной ленты (откроется 29.09.2020)',
                    inProcess: false,
                    done: true,

                    body: [],
                    inDevelopment: true,
                  },
                  {
                    title: 'Сайдбар + роутинг (откроется 30.09.2020)',
                    inProcess: false,
                    done: false,

                    body: [],
                    inDevelopment: true,
                  },
                  {
                    title: 'Формы на примере комментариев и карточки поста (откроется 20.10.2020)',
                    inProcess: false,
                    done: true,

                    body: [],
                    inDevelopment: true,
                  },
                  {
                    title: 'SSR + NextJS (откроется 21.12.2020)',
                    inProcess: false,
                    done: false,

                    body: [],
                    inDevelopment: true,
                  },
                  {
                    title: 'Бонус-модуль: Mobx (откроется 21.12.2020)',
                    inProcess: false,
                    done: false,

                    body: [],
                    inDevelopment: true,
                  },
                ]
              },
              {
                title: 'Система контроля версий Git',
                inProcess: false,
                done: true,

                body: [
                  {
                    title: 'Версии программного кода',
                    done: true,
                  },
                  {
                    title: 'Установка Git',
                    done: true,
                  },
                  {
                    title: 'Индекс и частичные коммиты',
                    done: true,
                  },
                  {
                    title: 'Сравнение версий',
                    done: true,
                  },
                  {
                    title: 'Отмена изменений и откат версий',
                    done: true,
                  },
                  {
                    title: 'Репозитории и коллективная работа',
                    done: true,
                  },
                  {
                    title: 'Ветки: создание и управление',
                    done: true,
                  },
                  {
                    title: 'Слияние и разрешение конфликтов',
                    done: true,
                  },
                  {
                    title: 'Полезные инструменты',
                    done: true,
                  },
                  {
                    title: 'Правила работы с Git',
                    done: true,
                  },
                ],
              },
              {
                title: 'Универсальные знания программиста',
                done: false,
                inProcess: false,
                finalWork: false,
                comments: [],

                body: [
                  {
                    title: 'Протокол HTTP',
                    inProcess: false,
                    done: false,

                    body: [
                      {
                        title: 'Протокол HTTP. Запрос и ответ',
                        done: false,
                      },
                      {
                        title: 'Методы HTTP-запросов GET и POST',
                        done: false,
                      },
                      {
                        title: 'Другие методы HTTP-запросов',
                        done: false,
                      },
                      {
                        title: 'Статус-коды HTTP-ответов',
                        done: false,
                      },
                      {
                        title: 'Адресация сетевых ресурсов',
                        done: false,
                      },
                      {
                        title: 'HTTP-заголовки',
                        done: false,
                      },
                      {
                        title: 'Версии протокола HTTP и HTTPS',
                        done: false,
                      },
                    ],
                  },
                  {
                    title: 'Введение в алгоритмы',
                    inProcess: false,
                    done: false,

                    body: [
                      {
                        title: 'Введение в алгоритмы',
                        done: false,
                      },
                      {
                        title: 'Зачем нужны алгоритмы',
                        done: false,
                      },
                      {
                        title: 'Рекурсивные алгоритмы',
                        done: false,
                      },
                      {
                        title: 'Временная сложность алгоритмов',
                        done: false,
                      },
                      {
                        title: 'Алгоритм бинарного поиска',
                        done: false,
                      },
                      {
                        title: 'Алгоритм сортировки пузырьком',
                        done: false,
                      },
                      {
                        title: 'Алгоритм сортировки QuickSort',
                        done: false,
                      },
                      {
                        title: 'Алгоритм сортировки MergeSort',
                        done: false,
                      },
                      {
                        title: 'Алгоритм поиска подстроки Рабина-Карпа',
                        done: false,
                      },
                      {
                        title: 'Алгоритм поиска подстроки Кнута-Морриса-Пратта',
                        done: false,
                      },
                      {
                        title: 'Алгоритм поиска подстроки Бойера-Мура',
                        done: false,
                      },
                    ],
                  },
                ]
              },
            ],
          },
          {
            title: 'Образование',

            body: [
              {   title: 'Online-университет Skillbox',
                yearStart: 2019,
                yearEnd: 'now',
                specialization: 'Frontend-Разработчик.'
              },
              {
                title: 'Stamford International University',
                yearStart: 2014,
                yearEnd: 2016,
                grade: 'MBA (english program)',
                faculty: 'Marketing',
              },
              {
                title: 'Florida Keys Community College',
                yearStart: 2008,
                yearEnd: 2008,
                specialization: 'English courses. Upper-internediate'
              },
              {
                title: 'Ижевский Государственный Технический Университет',
                yearStart: 2001,
                yearEnd: 2006,
                grade: 'высшее',
                faculty: 'Машиностроительный',
                specialization: 'Ракетные двигатели и установки',
              },
              {
                title: 'Международный Восточно-Европейский Университет',
                yearStart: 1998,
                yearEnd: 2000,
                grade: 'средне-специальное',
                faculty: 'Экономический',
                specialization: 'Экономист бухгалтер'
              }

            ],
          },
          {
            title: 'Опыт работы',

            body:[
              {
                title: 'Разное. (онлайн репетиторство, торговля на бирже, подработка на выездных мероприятих в Москве)',
                yearStart: 2017,
                yearEnd: 'now',
                position: 'разное',
                duties: 'разное',
              },
              {
                title: 'Kornpitacksuksa the Creative Thinking School (Thailand)',
                yearStart: 2017,
                yearEnd: 2017,
                position: 'учитель',
                duties: 'преподавание английского языка детям 5-10 лет',
              },
              {
                title: 'OOO Тау Груп',
                yearStart: 2008,
                yearEnd: 2015,
                position: 'Совладелец бизнеса (автомойка)',
                duties: 'Заказ автохимии, контроль состояния оборудования, контроль качества, общение с клиентами, работа с кассой, составление отчетов.',
              },
            ],
          },
          {
            title: 'Обо мне',

            body:[
              {
                sport: 'Спортивная ходьба, велосипед',
                relax: 'Моб игры, лес, костер',
                freeTime: 'семья, друзья, велосипед, самообучение, космоэнергетика, крипта',
                about: `Я начинающий frontend разработчик. Моя цель – найти работу, где я могу развиваться вместе со всеми и совместно приносить пользу общему делу. Мне импонирует это направление в веб разработке, т.к. можно видеть долгоиграющий результат своей работы, к тому же оно достаточно перспективное.
Оцениваю себя как творческого человека но для начала не помешает и системный подход. В обществе друзей общительный. При деловых встречах предпочитаю краткость и информативность. Не пью и не курю, не ЗОЖ.
В глобальных планах планирую развиться до fullstack.`
              },
            ],
          },
        ],
        currentTitle:null,
        currentSubtitle:null,
      };
    },
  }
</script>

<style scoped>

  .droplistContainer {
    margin-bottom: 20px;
    position:relative;
  }
  .droplistContainer::before {
    /*position:absolute;*/
    /*top: -20px;*/
    /*right:0;*/
    /*content: 'Redux';*/
    /*padding-left: 5px;*/
    /*font-size: 12px;*/
    /*opacity: 0.5;*/
  }

</style>

