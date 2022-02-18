window.addEventListener('DOMContentLoaded', () => { 

const tabs = document.querySelectorAll('.tabheader__item'),  //создаем нужные переменные
      tabsContent = document.querySelectorAll('.tabcontent'),
      tabsParent = document.querySelector('.tabheader__items');

      function hideTapContent() {     //скрываем все ненужные табы
          tabsContent.forEach(item => {
              item.classList.add('hide');
              item.classList.remove('show', 'fade');
          });
          
          tabs.forEach(item => { //убираем активный класс из видимости
              item.classList.remove('tabheader__item_active');
          });
      }


      function showTabContent(i = 0) { //показываем контент активного таба
          tabsContent[i].classList.add('show', 'fade');
          tabsContent[i].classList.remove('hide');
          tabs[i].classList.add('tabheader__item_active');
      }

      hideTapContent();
      showTabContent();

      tabsParent.addEventListener('click', (event) => { //назначаем обработчик события клика
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
           tabs.forEach((item, i) => {
            if(target == item) {
                hideTapContent();
                showTabContent(i);
            }
           });
        }
   });

   



});


