
var beaches; //переменная внешнего массива содержащего основные данные для блоков информ.

/*------------------------ start script map--------------------------------*/
// Скрипт содержит основной массив для вставки названий в блоки, расстановки маркеров, присвоению
// блокам классов, по каторым работает фильтр, присвоения id блокам и содержит адреса картинок блоков.
// Здесь создается карта с маркерами, и вторая в футере

var beach;   //переменная, которая по очереди получает внутренние массивы
var marker;  //переменная объекта устанавливающего маркер на карту
var massFiltersMap = [];   //массив marker
var map;   // объект google map


// Вставка карт (2-х) на страницу
var initMap =  function initMap() {

// Первая (верхняя карта)
var uluru = {lat: 25.061, lng: 55.193};
map = new google.maps.Map(document.getElementById('map'), {
  zoom: 8,
  center: uluru
});

// Вторая карта в футере
var positionMap2 = {lat: 25.2292761, lng: 55.2895482};
var myOptions2 = {
  zoom: 15,
  center: new google.maps.LatLng(positionMap2)
}
var map2 = new google.maps.Map(document.getElementById("map2"),
 myOptions2); 
var marker = new google.maps.Marker({
  position: positionMap2,
  map: map2,
    });

setMarkers(map);
}

// Этом массив и массив из скрипта show_text_block взаимозависимы. Местами строчки не менять 
// Первая строчка здесь соответствует первой строчке там
beaches = [
// dubai
['Dubai Airport Free Zone', 25.2606, 55.3701, 
'blocks dubai commercial professional logistics trade consulting_services investment_consulting it_services rendering_of_various_services ',
'block-1', /*Здесь url картинок-логотипов в блоках фильтра*/],

['TECOM Investment', 25.09760, 55.17576, 
'blocks dubai other ',
'block-2', 'images/logo_texom_investment.png'],

['Dubai Multi-Commodities Center', 25.07353, 55.14520, 
'blocks dubai commercial professional tourist investment production educational insurance trade_in_raw_materials trade trade_in_precious_stones_and_metals insurance tourism rendering_of_various_services it_services consulting_services investments education catering_business medias telecommunications advertising design ',
'block-3', 'images/logo_multi_commodities_center.png'],

['Dubai International Financial Center', 25.21350, 55.28146, 
'blocks dubai commercial professional financial insurance investment banks insurance consulting_services financial_services ',
'block-4', 'images/logo_international_financial_center.png'],

['Economic Zones World', 24.9856098, 55.0879869, 
'blocks dubai other ', 'block-5', 'images/logo_economic_zones_world.png'],

['Dubai Silicon Oasis', 25.1229466, 55.3535014, 
'blocks dubai commercial professional optoelectronics microelectronics new_materials_and_technologies innovations it_services consulting_services design ',
'block-6', 'images/logo_dubai_silicon_oasis.png'],

['Jebel Ali Free Zone', 24.963508, 55.0578848, 
'blocks dubai commercial production professional trade trade_in_chemicals trade_in_petroleum_products tobacco_trade productions recycling shipyards logistics rendering_of_various_services ',
'block-7'],

['Dubai South Free Zone', 24.9470094, 55.0776077, 
'blocks dubai production commercial professional trade logistics education productions it_services consulting_services rendering_of_various_services ',
'block-8'],

['Dubai Internet City', 25.0430262, 55.2443503, 
'blocks dubai commercial professional it_services telecommunications medias rendering_of_various_services ',
'block-9'],

['Dubai Media City', 25.0930261, 55.1495917, 
'blocks dubai commercial professional advertising medias polygraphy design rendering_of_various_services ',
'block-10'],

['Dubai Knowledge Village', 25.10211, 55.164072, 
'blocks dubai professional education ','block-11'],

['Dubai Healthcare City', 25.23181, 55.32248, 
'blocks dubai professional medicine pharmaceuticals stomatology beauty_saloon spa ', 'block-12'],

['Dubai Cars & Automotive Zone', 25.129417800000034,55.22261490000005, 
'blocks dubai commercial trade trade_in_vehicles ', 'block-13'],

['Dubai Academic City', 25.1140399, 55.371023, 
'blocks dubai professional education hr trainings printing_house ', 'block-14'],

['Dubai Biotechnology & Research Park', 25.0756737, 55.2390416, 
'blocks dubai commercial professional medicine pharmaceuticals biotechnology labs ', 'block-15'],

['Dubai Design Center', 25.2585462, 55.3344492, 
'blocks dubai production commercial professional productions design rendering_of_various_services ', 'block-16'],

['Dubai Flower Center', 25.2626, 55.33846, 
'blocks dubai commercial professional trade trade_flowers_and_plants trade_garden_tools trade_equipment_for_garden design ', 
'block-17'],

['Dubai Industrial City', 24.83464, 55.0551, 
'blocks dubai production productions trade_industrial_equipment trading_warehouse_equipment ',
'block-18'],

['Dubai Logistics City', 24.8964528, 55.0879587, 
'blocks dubai commercial  logistics trade trading_warehouse_equipment trade_industrial_equipment trade_in_vehicles ',
'block-19'],

['Dubai Maritime City Authority', 25.243995, 55.2655622, 
'blocks dubai commercial logistics logistic_sea_transportation trade_in_vehicles services_transport ',
'block-20'],

['Dubai Outsource Zone', 25.1237537, 55.4231637, 
'blocks dubai professional consulting_services ',
'block-21'],

['Dubai Studio City', 25.0418288,55.2476799, 
'blocks dubai commercial professional film_production radio communication medias advertising design polygraphy ',
'block-22'],

['Dubai Techno Park', 24.9372411,55.0638996, 
'blocks dubai commercial production trade trade_industrial_equipment trade_in_vehicles ',
'block-23'],

['Gold & Diamond Park', 25.1256982,55.2068547, 
'blocks dubai commercial professional trade_jewelery trade_in_precious_stones_and_metals ',
'block-24'],

['International Humanitarian City', 24.8927, 55.0689, 
'blocks dubai professional social_help ', 'block-25'],

['International Media Production Zone', 25.0336438,55.1794998, 
'blocks dubai commercial professional polygraphy medias advertising design ','block-26'],

['Dubai Production City', 25.0395824,55.1584264, 
'blocks dubai professional production polygraphy packaging publicism medias ', 'block-27'],

['Dubai Science Park', 25.0748655,55.2377292, 
'blocks dubai commercial professional pharmaceuticals biotechnology power_engineering innovations ', 'block-28'],


// aby-dabi
['Masdar City Free Zone', 24.4340198,54.6088044, 
'blocks aby-dabi production commercial professional trade rendering_of_various_services logistics hr consulting_services non-profit_organizations ',
'block-29'],

['Abu Dhabi Airport Business City', 24.4293108,54.638607, 
'blocks aby-dabi production commercial professional logistics it_services rendering_of_various_services trade consulting_services ',
'block-30'],

['Abu Dhabi Media Free Zone', 24.4281615,54.463770, 
'blocks aby-dabi freelance_license commercial professional medias publicism it_services rendering_of_various_services polygraphy advertising freelance ',
'block-31'],

['Khalifa Industrial Zone Abu Dhabi', 24.7182068,54.6395426, 
'blocks aby-dabi production commercial professional logistics productions packaging trade rendering_of_various_services it_services ',
'block-32'],

['Abu Dhabi Global Markets', 24.5021, 54.39085, 
'blocks aby-dabi professional financial commercial investment financial_services consulting_services investments rendering_of_various_services trade ',
'block-33'],

['twofour54', 24.42906, 54.46335, 
'blocks aby-dabi freelance_license commercial professional medias publicism rendering_of_various_services it_services advertising freelance  polygraphy ',
'block-34'],

// abjman

['Ajman Free Zone', 25.40858, 55.46160, 
'blocks abjman production commercial professional trade trade_in_precious_stones_and_metals e-commerce rendering_of_various_services consulting_services productions ',
'block-35'],

// fujeira

['Fujairah Free Zone', 25.17174, 56.34760, 
'blocks fujeira production commercial professional alcohol_license logistics trade rendering_of_various_services ',
'block-36'],

['Fujeirah  Creative City (FCC)', 25.122674,56.3208005, 
'blocks fujeira professional freelance startup medias design consulting_services rendering_of_various_services freelance polygraphy advertising ',
'block-37'],

// ras-al-haima

['Ras Al Khaimah Economic Zone (RAKEZ)', 25.8011458,55.9655993, 
'blocks ras-al-haima production commercial professional educational medias consulting_services trade productions education rendering_of_various_services ',
'block-38'],

// sharja

['Sharjah Airport Free Zone (SAIF)', 25.3280123,55.4952664, 
'blocks sharja production commercial professional trade productions logistics consulting_services rendering_of_various_services ',
'block-39'],

['Hamriyah Free Zone (HAFZA)', 25.46191, 55.49524, 
'blocks sharja production commercial professional trade tobacco_trade rendering_of_various_services it_services consulting_services ',
'block-40'],

['Shams Free Zone', 25.3279455,55.3635646, 
'blocks sharja production commercial professional advertising medias education trade financial_services insurance consulting_services tourism ',
'block-41'],

// um-al-cuvain

['Umm Al Quwain Free Trade Zone (UAQ FTZ)', 25.4938319,55.5450698, 
'blocks um-al-cuvain commercial professional freelance trade productions e_commerce freelance consulting_services investments logistics trade_in_chemicals design advertising rendering_of_various_services it_services ',
'block-42']

];

// Функция устанавливает маркера из массива beaches
function setMarkers(map) {
  for (var i = 0; i < beaches.length; i++) {
    beach = beaches[i];
    marker = new google.maps.Marker({
      position: {lat: beach[1], lng: beach[2]},
      map: map,
      title: beach[0],
      icon: {
        url: "images/marker.png",
        // size: new google.maps.Size(33,33)
      }

    });
      // Масиив пунктов карты 
      massFiltersMap.push(marker);
    }


  }
/*------------------------ end script map--------------------------------*/


/*------------------------ start script show_text_block--------------------------------*/

// Данный скрипт отвечает за показ короткого описания блоков (которые создаются в create_info_block.js),
// устанавливает бэкграунд для блоков и прячет картинку на блоке при их активации.
// При активации другого блока на предыдущем все возвращается как и было 


var short_text_block;

// Массив коротких описаний блоков фильтра. Строка 1 = блок 1 и т.п.
// Этом массив и массив из скрипта map взаимозависимы. Местами строчки не менять 
// Первая строчка здесь соответствует первой строчке там
short_text_blocks = [

/*Dubai Airport Free Zone*/'Подходит для компаний, занимающихся aircargo, логистикой и торговлей дорогостоящей продукцией, требующей быстрой таможенной очистки и сопровождения.',
/*TECOM Investments*/'Шикарный офис в центре Дубая - это Tecom. Включает в себя 11 фри зон - медиа, IT , дизайн сектор, производство, образование, научная деятельность и медицина.',
/*Dubai Multi-Commodities Center*/'Оформление всех видов торговых лицензий, в т.ч. на драгоценные металлы, камни. В ряде случаев допускаются смарт-офисы. Включает популярную JLT Free Zone.',
/*Dubai International Financial Center*/'Престижный финансовый центр. Только здесь можно получить лицензию на банковскую, финансовую, страховую деятельность, управление активами.',
/*Economic Zones World*/'Удобное расположение, недалеко от метро, лучшая инфраструктура. Офисы, шоурумы, аутлеты, склады, морской порт - все это в Дубае. Включает Golden&Diamond Park.',
/*Dubai Silicon Oasis*/'СЭЗ популярная для регистрации компаний в области IT и высоких технологий, инжиниринга, а также для торговли и консалтинга. Шикарные и недорогие офисы.',
/*Jebel Ali Free Zone (JAFZA)*/'Стратегическое месторасположение. Находится вблизи от порта и аэропорта. Предлагает всевозможные типы помещений для аренды с целью ведения бизнеса в ОАЭ.',
/*Dubai South Free Zone*/'Регистрация компании в этой зоне экономичная и быстрая. Одно из преимуществ - логистическая платформа, которая включает порт, аэропорт и железную дорогу. ',
/*Dubai Internet City */'Зона, деятельность которой сконцентрирована вокруг информационных технологий. Среди известных компаний в этой зоне можно назвать Facebook и LinkedIn. ',
/*Dubai Media City (DMC)*/'Деятельность СЭЗ сконцентрирована вокруг медиа индустрии. Здесь находятся филиалы компаний CNN, BBC и др. Зона располагается в самом центре "Нового Дубая". ',
/*Dubai Knowledge Village (DKV)*/'Единственная в мире зона по предоставлению образовательных услуг высокого качества. Здесь находятся филиалы самых известных университетов мира.',
/*Dubai Healthcare City*/'Основное направление деятельности - развитие здравоохранения, объединение ведущих специалистов и организаций в области медицины и здравоохранения.',
/*Dubai Cars & Automotive Zone*/'Коммерческая площадка, созданная для поддержания и развития национальной автомобильной промышленности. Идеальная зона для тех, кто связан с торговлей авто. ',
/*Dubai Academic City*/'Зона, которая призвана привлекать талантливых специалистов региона и обеспечивать развитие экономики ОАЭ в научно-интеллектуальном направлении.',
/*Dubai Biotechnology & Research Park*/'Зона является частью проекта по развитию экономики Дубая в научно-техническом направлении. Расположена рядом с международным аэропортом Дубая. ',
/*Dubai Design Center*/'Зона, где пересекаются интересы современных дизайнеров, строителей, архитекторов, подрядчиков и владельцев недвижимого имущества. ',
/*Dubai Flower Center*/'Центр развития бизнес-проектов, связанных с цветоводством. Зона расположена в стратегической зоне международного аэропорта Дубая. ',
/*Dubai Industrial City*/'Глобальная стартовая площадка для бизнеса, творческого таланта и международных корпораций. Направление деятельности СЭЗ: все виды производства. ',
/*Dubai Logistics City*/'Интегрированная логистическая база со всеми видами транспорта. Это преимущество позволяет компаниям сосредоточиться на оптимизации своих цепочек поставок.',
/*Dubai Maritime City Authority*/'DMCA запланирован на развитие и продвижение морской деятельности в ОАЭ. А также на создание безопасного и динамичного сектора морского судоходства. ',
/*Dubai Outsource Zone*/'Основное направление деятельности зоны: аутсорсинг, тренинг, консалтинговые услуги, выработка и поддержание высоких стандартов обслуживания в данной сфере.',
/*Dubai Studio City*/'Является частью Tecom Group. Основные направления: студии, площадки для выступлений, сцены, академии кино и телевидения, торговые помещения, гостиницы.',
/*Dubai Techno Park*/'Одна из СЭЗ, имеющих особый статус. Обеспечивает развитие по следующим направлениям: нефть, газ, опреснение воды, здравоохранение, инженерия и логистика.',
/*Gold & Diamond Park*/'Расположен на шоссе Sheikh Zayed. Состоит из производственного блока и торгового центра: 37 пунктов розничной торговли и 118 производственных единиц.',
/*International Humanitarian City*/'Логистический центр распространения гуманитарной помощи, участвует в оказании помощи в кризисах и поддержке долгосрочного экономического развития.',
/*International Media Production Zone*/'Район расположен в центральной части на Emirates Road. Создан для компаний, которые занимаются искусством, издательским делом, телевидением.',
/*Dubai Production City*/'Зона индустрии медиа производства. Бизнес-парк обслуживает компании, занимающиеся графикой, печатью, издательской деятельностью и упаковкой.',
/*Dubai Science Park */'Настоящий центр медико-биологических наук. Идеальная зона для компаний, развивающих биотехнологические отрасти и фармацевтическую деятельность. ',
/*Masdar City Free Zone*/'Отсутствие бюрократической волокиты. Быстрая регистрация компании и получение резидентской визы. Ориентирована на услуги в различных отраслях экономики.',
/*Abu Dhabi Airport Business City*/'Расположена вблизи аэропорта Abu Dhabi. Идеальна для логистики и cargo, а также других услуг. Представляет возможность использования смарт офиса.',
/*Abu Dhabi Media Free Zone*/'Привлекает экономическими выгодами для компаний (легкое лицензирование и организация бизнеса). Основные направления: телевидение, кино, игры, анимация.',
/*Khalifa Industrial Zone Abu Dhabi ( KIZAD)*/'Расположена возле порта Халифа. Зона инфраструктуры мирового класса, интегрированного торгового, логистического и промышленного центра Абу-Даби.',
/*Abu Dhabi Global Market*/'Расположена на острове Аль-Марья в сердце столицы. Остров включает в себя финансовые, коммерческие, досуговые, развлекательные и жилые объекты.',
/*TwoFour54 (часть Media Zone Authority)*/'Центр в области производства развлекательного контента. Благоприятный бизнес климат, выгодное расположение - основные преимущества зоны.  ',
/*Ajman Free Zone*/'Самая дешевая СЭЗ для торговых, консалтинговых, производственных компаний. Удачная логистическая сеть. Возможность регистрации IBC компании.',
/*Fujairah Free Zone*/'Регистрация компаний с виртуальным офисом для торговых и консалтинговых агентов. Производственная деятельность - бюджетные склады и размещение персонала.',
/*Fujeirah Creative City (FCC)*/'Широкий спектр областей бизнеса: СМИ, мероприятия, консультации, образование, коммуникации и маркетинг, музыку и развлечения, дизайн и технологии и пр.',
/*Ras Al Khaimah Economic Zone (RAKEZ)*/'Бюджетная СЭЗ для торгового бизнеса, оказания услуг, производства. Находится далеко от Дубая, но вблизи международного аэропорта и морского порта.',
/*Sharjah Airport Free Zone (SAIF)*/'Главное преимущество возможность получения логистической лицензии на смарт офис. Недорогое обслуживание, быстрота регистрации, отличная инфраструктура.',
/*Hamriyah Free Zone (HAFZA)*/'Большая ориентация на малые и средние предприятия. Возможность открытия компании на е-офис. Имеется 7 подразделений, работающих в разных направлениях.',
/*Shams Free Zone*/'Творческое сообщество, которое обслуживает и поддерживает бизнес со специализированными объектами для медиа индустрии.',
/*Umm Al Quwain Free Trade Zone (UAQ FTZ)*/'Основное направление - работа с торговыми и консалтинговыми компаниями. Гибкая визовая политика при аренде небольших офисных помещений.'
];


// Функция обработчик события при клике на выподающем меню отвечающая за фильтрацию блоков
var show = function(butn) {


  var not_visibl = document.getElementsByClassName('blocks');

  for (var i = 0; i < beaches.length; i++){ // Общий цикл

    if (not_visibl[i] !== undefined) {
      //если существует, то блоки очищаются от класса отвечающего за активное состояние
      not_visibl[i].classList.remove('active-block'); 
      not_visibl[i].querySelector('a').querySelectorAll('p')[1].style.position = "absolute";
    }

    // Делает все блоки текста под картой скрытыми
    if (document.getElementsByClassName('blocks-none')[i]) {
      document.getElementsByClassName('blocks-none')[i].style.display = "none";
    }

  }


  //Сделать блок текста под картой, соответствующий активному блоку фильтра видимым
  var text_blocks = 'text-' + butn.id;
  if (document.getElementById(text_blocks)) {
    document.getElementById(text_blocks).style.display = "block";
  }
  
  // Делает блок активным (красным и т.п.)
  butn.classList.add('active-block');

  //Делает маркер на карте, соответствующий нажатому блоку фильтра, активным (красным) 
  createActiveMarker(butn);
  

  // Через 0.3 секунды делает 'p' в блоке relative. Чтобы он растягивал блок при изменении его размеров
  var timeOut;
  if (timeOut !== undefined) {
    clearTimeout(timeOut);
  }
  timeOut = setTimeout(doBlocksRelative, 300);
  
  function doBlocksRelative () {
    butn.querySelector('a').querySelectorAll('p')[1].style.position = "relative";
  }

}


var previousActiveMarker;

//Делает маркер на карте, соответствующий нажатому блоку фильтра, активным (красным) 
function createActiveMarker (marker) {

  // Активация маркера соответствующего активному блоку
  var idMarkers = marker.id.match(new RegExp('\\d', 'g'));
  var numberActiveMarker = idMarkers.join('')-1;

  massFiltersMap[numberActiveMarker].setMap(null);

  massFiltersMap[numberActiveMarker] = new google.maps.Marker({
    position: massFiltersMap[numberActiveMarker].position,
    map: map,
    zIndex: 300
  });


  // Установка по стандарту для предыдуще-активного маркера, если есть
  if (massFiltersMap[previousActiveMarker] !== undefined  && numberActiveMarker !== previousActiveMarker) {
    clearPrevMarker();
  }
  
  previousActiveMarker = numberActiveMarker;

}

function clearPrevMarker () {
  // previousActiveMarker становится undefined в функции myFilter () при изменении 
  // выбранного фильтра, иначе получается прикольный баг при изменении фильтра - блока нет а маркер предыдущий устанавливается
  if (massFiltersMap[previousActiveMarker] !== undefined) {
    massFiltersMap[previousActiveMarker].setMap(null);
    massFiltersMap[previousActiveMarker] = new google.maps.Marker({
      position: massFiltersMap[previousActiveMarker].position,
      map: map,
      icon: {
        url: "images/marker.png"
      }
    });
  }

}

/*------------------------ end script show_text_block--------------------------------*/



/*------------------------ start script create_info_block--------------------------------*/

// создание блоков с инф.
 var parent_block = document.getElementById('filt-blocks');

 for (var q = 0; q < beaches.length; q++) {

  var create_blocks = document.createElement('div');
  create_blocks.className = beaches[q][3];
  create_blocks.id = beaches[q][4]; 
  create_blocks.addEventListener('click', function() {
    show(this);
  });
  var create_a =document.createElement('a');


  var create_img =document.createElement('img');
  if (beaches[q][5] !==undefined) {
   create_img.src = beaches[q][5];
 }

 var create_p =document.createElement('p');
 create_p.innerHTML = beaches[q][0];

 var create_p2 =document.createElement('p');
 if (short_text_blocks[q] !== undefined) {
  create_p2.innerHTML = short_text_blocks[q];
}


create_a.appendChild(create_img)
create_a.appendChild(create_p);
create_a.appendChild(create_p2);
create_blocks.appendChild(create_a);

parent_block.appendChild(create_blocks);

}

/*------------------------ end script create_info_block--------------------------------*/




/*------------------------ start script set_field_of_activity--------------------------------*/

// Заполняет пункты меню категории их дабовляет id ля работы другиг скриптов

// Массив для заполнения меню категории и их id.
var mass_field_of_activity = [
['Алкогольная лицензия',  'alcohol_license'],

['Банки',  'banks'],
['Биотехнологии',  'biotechnology'],

['Верфи',  'shipyards'],

['Дизайн',  'design'],

['Инвестиции',  'investments'],
['Инвестиционный консалтинг',  'investment_consulting'],
['Инновации',  'innovations'],

['Кинопроизводство',  'film_production'],
['Коммуникация',  'communication'],
['Консалтинговые услуги', 'consulting_services'],

['Лаборатории',  'labs'], 
['Логистика', 'logistics'],
['Логистка Морские перевозки', 'logistic_sea_transportation'],

['Медиа',  'medias'],
['Медицина',  'medicine'],
['Микроэлектроника',  'microelectronics'],

['Некоммерческие организации',  'non-profit_organizations'],
['Новые материалы и технологии',  'new_materials_and_technologies'],

['Образование',  'education'],
['Оказание различных услуг',  'rendering_of_various_services'],
['Оптоэлектроника',  'optoelectronics'],

['Полиграфия',  'polygraphy'],
['Производство', 'productions'],
['Публицистика',  'publicism'],

['Радио',  'radio'],
['Реклама',  'advertising'], 
['Ресторанный бизнес',  'catering_business'],

['Салон красоты', 'beauty_saloon'],
['Социальная помощь',  'social_help'],
['Стартап',  'startup'],
['Стоматология',  'stomatology'],
['Страхование',  'insurance'],

['Телекоммуникации',  'telecommunications'],
['Типография',  'printing_house'],
['Торговля', 'trade'],
['Торговля Драгоценные камни и металлы',  'trade_in_precious_stones_and_metals'],
['Торговля Нефтепродукты',  'trade_in_petroleum_products'],
['Торговля Оборудование для сада',  'trade_equipment_for_garden'],
['Торговля Промышленное оборудование',  'trade_industrial_equipment'],
['Торговля Садовый инвентарь',  'trade_garden_tools'],
['Торговля Складское оборудование',  'trading_warehouse_equipment'],
['Торговля Сырье',  'trade_in_raw_materials'],
['Торговля Табак',  'tobacco_trade'],
['Торговля Транспорт',  'trade_in_vehicles'],
['Торговля Химические вещества',  'trade_in_chemicals'],
['Торговля Цветы и растения',  'trade_flowers_and_plants'],
['Торговля Ювелирные изделия',  'trade_jewelery'],
['Тренинги',  'trainings'],
['Туризм',  'tourism'],

['Упаковка',  'packaging'],
['Услуги Транспорт',  'services_transport'],
['Утилизация',  'recycling'],

['Фармацевцика',  'pharmaceuticals'],
['Финансовые услуги', 'financial_services'],
['Фриланс',  'freelance'],

['Энергетика',  'power_engineering'],

['E-commerce',  'e_commerce'],
['HR',  'hr'],
['IT услуги',  'it_services'],
['SPA',  'spa']

];




// создаются блоки в выподающем меню 'сфера деятельности'
var field_of_activity = document.getElementById('field_of_activity').getElementsByTagName('ul')[0];
for (var i = 0; i < mass_field_of_activity.length; i++) {

  field_of_activity.innerHTML += '<li onclick="showChecked(this)">\
  <input type="radio" name="list2" id="'+mass_field_of_activity[i][1]+'">\
  '+mass_field_of_activity[i][0]+'\
  </li>'
}

/*------------------------ end script set_field_of_activity--------------------------------*/






/*------------------------ start script select--------------------------------*/

  // Открывает выподающее меню на карте
  function select (butt) {
    if (butt.getElementsByTagName('ul')[0].style.display == "block") {
      clear();
    } else {
      clear();
      var show  = butt.getElementsByTagName('ul')[0].style.display = "block";
    }
  }

  function clear () {
    var idSelect = document.getElementById('select');

    var lists = idSelect.getElementsByTagName('ul');

    for (i = 0; i < lists.length; i++) {
      lists[i].style.display = "none";
    }
  }

/*------------------------ end script select--------------------------------*/




/*------------------------ start script scrol--------------------------------*/

// Проверяет где находится положение скрола и передвигает вниз на высоту блока
// при нажатии на кнопку под ним

function scrol (obj) {
  var position = document.getElementById('wrap_filt-blocks');
  var oldPosition = position.scrollTop;
  var allHeight = document.getElementById('wrap_filt-blocks').scrollHeight; 
  var visibleHeight = document.getElementById('wrap_filt-blocks').clientHeight;

  var intervalScrl = setInterval(testTop, 1);
  
  function testTop () {
    if(!(allHeight - position.scrollTop === visibleHeight)){
      if (!(oldPosition + visibleHeight == position.scrollTop)) {
        position.scrollTop += 1;

      } else {
        clearInterval(intervalScrl);
      }
    } else {
      clearInterval(intervalScrl);
    }
  }

}

/*------------------------ end script scrol--------------------------------*/




/*------------------------ start script filter--------------------------------*/


  // Скрипт отвечающий за работу фильтра.

  var getClass = document.getElementById('filt-blocks').getElementsByTagName('div');
  var getChecked = document.getElementById('select').getElementsByTagName('input');
  var mass;

//  На входе обект, который сработал на onClick(). 
function showChecked (child) {

// Проверка установлен ли check в его внутреннем input и меняет на противополжный
// И добавляет класс для установки фона
var ch = child.getElementsByTagName('input')[0];
var title;

  // Закоменченный код осуществлял проверку на check, при повторном
  // нажатии осуществлял снятие check с элемента

  // if (ch.checked) {
  //  ch.checked = false;
  //  title = child.parentNode.parentNode.getElementsByTagName('span')[0];

  // } else {
    ch.checked = true;
    child.classList.add('ifChecked');
    title = child.parentNode.parentNode.getElementsByTagName('span')[0].innerHTML = child.innerHTML;
  // }

// Массив содержащий количество и значения id установленных input
// И удаляющий класс ifChecked у тех что не checked 
mass = [];

for(var i = 0; i < getChecked.length; i++) {
  if (getChecked[i].checked) {
    mass[mass.length] = getChecked[i].id;
  } else {
    getChecked[i].parentNode.classList.remove('ifChecked');
  }
}

clearFilt();
myFilter();
}


// Фильтрует блоки в filtBlocks. Если checked услановлен в одном списке, то по нему.
// А если в 2-х или 3-х то и с учетом этих фильтров.
function myFilter () {
  // Масиив пунктов карты 
  var massFittersMap = [];


    // При изменении фильтра вызывается функц. которая устанавливает простой а не активный маркер.
    // И очищает переменную с номером предыдущего блока, иначе он выпрыгивает когда не нужно
    clearPrevMarker();
    previousActiveMarker = undefined;


    // Проверка на то, сколько фильтров установленно и соответственно отображение блоков соответствующих
    for (var j = 0; j < getClass.length; j++) {
      if (mass.length == 3){

        if(getClass[j].className.search(new RegExp('\\b' + mass[0] + '\\b')) >= 0 &&
          getClass[j].className.search(new RegExp('\\b' + mass[1] + '\\b')) >= 0 && 
          getClass[j].className.search(new RegExp('\\b' + mass[2] + '\\b')) >= 0) 
        {
          getClass[j].style.display = 'block';
          massFiltersMap[j].setMap(map);
        } else {
          massFiltersMap[j].setMap(null);
        }

      }
      else if (mass.length == 2){

        if (getClass[j].className.search(new RegExp('\\b' + mass[0] + '\\b')) >= 0 && 
          getClass[j].className.search(new RegExp('\\b' + mass[1] + '\\b')) >= 0) 
        {
          getClass[j].style.display = 'block';
          massFiltersMap[j].setMap(map);
        } else {
          massFiltersMap[j].setMap(null);
        }
      }
      else if (mass.length == 1){

        if (getClass[j].className.search(new RegExp('\\b' + mass[0] + '\\b')) >= 0) {
          getClass[j].style.display = 'block';
          massFiltersMap[j].setMap(map);
        } else {
          massFiltersMap[j].setMap(null);
        }

      } else if (mass.length == 0){
        getClass[j].style.display = 'block';
        massFiltersMap[j].setMap(map);
      }
    } }

// Возвращает всем блокам значение block
function clearFilt () {
  for (w = 0; w < getClass.length; w++) {
    getClass[w].style.display = 'none';
  }
}

/*------------------------ end script filter--------------------------------*/




/*------------------------ start script notvisibl--------------------------------*/


  // Закрывает меню если щелнули вне его. Меню на карте.
  $(function(){
    $(document).click(function(event) {
      if ($(event.target).closest("#select").length) return;
      $("#select ul").hide("slow");
      event.stopPropagation();
    });
  });

/*------------------------ end script notvisibl--------------------------------*/