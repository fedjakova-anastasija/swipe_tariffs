import React from 'react';
import { createRoot } from 'react-dom/client';
import { createPortal } from 'react-dom';
import {
  Button,
  Chip,
  SegmentedButtons,
  TextField,
  buttonWidthEnum,
} from '../dist/dist/index.jsx';
import '../dist/dist/theming/booking-form.css';
import './styles.css';
import standardRoomImage from '../img/638905038895238797-b2a3803f-0648-417b-959d-0f86c6768e8b.jpg';
import suiteRoomImage from '../img/638905039312398814-82a5d543-224a-4524-8a0f-b513be82f9bc.jpg';
import mealIcon from '../img/svg/restaurant.svg?raw';
import cancellationIcon from '../img/svg/unlock.svg?raw';
import paymentIcon from '../img/svg/purse.svg?raw';
import guestIcon from '../img/svg/guests-group.svg?raw';
import serviceMealPlaceholderIcon from '../img/svg/service-placeholder-meal.svg?raw';
import serviceDefaultPlaceholderIcon from '../img/svg/service-placeholder-default.svg?raw';
import starIcon from '../img/svg/star.svg?raw';
import giftIcon from '../img/svg/gift.svg?raw';
import foodIcon from '../img/svg/food.svg?raw';
import cartIcon from '../img/svg/cart.svg?raw';
import validIcon from '../img/svg/valid.svg?raw';
import bathroomIcon from '../img/svg/features/bathroom.svg?raw';
import doubleBedIcon from '../img/svg/features/double_bed.svg?raw';
import balconyIcon from '../img/svg/features/balcony.svg?raw';
import airConditioningIcon from '../img/svg/features/air_conditioning.svg?raw';
import hairdryerIcon from '../img/svg/features/hairdryer.svg?raw';
import viewIcon from '../img/svg/features/view.svg?raw';
import kingBedIcon from '../img/svg/features/king_bed.svg?raw';
import lockIcon from '../img/svg/features/electronic_locks.svg?raw';
import wifiIcon from '../img/svg/features/wifi.svg?raw';
import arrowDownIcon from '../img/svg/arrow-down.svg?raw';
import arrowLeftIcon from '../img/svg/arrow-left.svg?raw';
import arrowRightIcon from '../img/svg/arrow-right.svg?raw';
import checkIcon from '../img/svg/check.svg?raw';
import externalLinkIcon from '../img/svg/arrow-corner-up.svg?raw';
import crossIcon from '../img/svg/cross.svg?raw';

const roomImages = {
  standard: standardRoomImage,
  suite: suiteRoomImage,
};

const filters = [
  {
    key: 'bedType',
    label: 'Тип кровати',
    type: 'multi',
    scope: 'room',
    options: [
      { value: 'double', label: 'Двуспальная кровать' },
      { value: 'single', label: 'Односпальная кровать' },
    ],
  },
  {
    key: 'view',
    label: 'Вид из окна',
    type: 'multi',
    scope: 'room',
    options: [
      { value: 'mountain', label: 'Вид на горы' },
      { value: 'sea', label: 'Вид на море' },
      { value: 'river', label: 'Вид на реку' },
    ],
  },
  { key: 'balcony', label: 'Балкон', type: 'single', scope: 'room' },
  { key: 'freeCancellation', label: 'Бесплатная отмена', type: 'single', scope: 'rate' },
  { key: 'noPrepayment', label: 'Без предоплаты', type: 'single', scope: 'rate' },
];

const initialFilterState = {
  bedType: [],
  view: [],
  balcony: false,
  freeCancellation: false,
  noPrepayment: false,
};

const rooms = [
  {
    id: 'suite',
    image: roomImages.suite,
    name: 'Люкс',
    params: 'до 3 мест',
    area: '32 м²',
    roomCount: '1 комн.',
    guests: '1 большая двуспальная кровать',
    oldPrice: 16000,
    discount: '-50%',
    priceFromPrefix: 'от',
    stay: '2 дня / 2 гостя',
    filterTags: {
      bedType: ['double'],
      view: ['mountain'],
      balcony: false,
    },
    photoFeatures: [viewIcon, kingBedIcon, airConditioningIcon, lockIcon, wifiIcon],
    rates: [
      {
        id: 'suite-basic-prepay',
        meal: 'Питание не включено',
        cancellation: 'Бесплатная отмена',
        payment: 'Нужна предоплата',
        price: 8000,
        oldPrice: 16000,
        discount: '-50%',
        taxes: 'Налоги и сборы включены',
        includedServiceIds: ['pool-access', 'beach-access', 'spa-zone', 'bike-rental', 'parking'],
        cardServiceTitles: ['Бассейн', 'Пляж'],
        detailHighlights: ['Бассейн', 'Пляж', 'SPA-зона', 'Прокат велосипедов'],
        tooltipDetails: {
          meal: {
            title: 'Питание не включено',
            text: 'Питание в стоимость не входит. Его можно добавить на следующем шаге.',
          },
          cancellation: {
            title: 'Бесплатная отмена',
            text: 'Бесплатная отмена бронирования возможна до 21.12.2026 0:00 (UTC +03:00). После этого удерживается часть стоимости бронирования.',
          },
          payment: {
            title: 'Способы оплаты',
            text: 'Нужна предоплата. Для подтверждения бронирования требуется оплата банковской картой.',
          },
        },
      },
      {
        id: 'suite-breakfast-flex',
        meal: 'Завтрак',
        cancellation: 'Условия отмены',
        payment: 'Без предоплаты',
        price: 9600,
        oldPrice: 12000,
        discount: '-20%',
        taxes: 'Налоги и сборы включены',
        includedServiceIds: ['breakfast', 'late-checkout', 'coworking', 'business-center'],
        cardServiceTitles: ['Сейф', 'Поздний выезд'],
        tooltipServiceTitles: ['Сейф', 'Поздний выезд', 'Коворкинг-зона', 'Бизнес-центр', 'Конференц-зал'],
        detailHighlights: ['Сейф в номере', 'Поздний выезд до 14:00', 'Коворкинг-зона'],
        tooltipDetails: {
          meal: {
            title: 'Завтрак',
            text: 'Завтрак включен в стоимость тарифа для всех гостей.',
          },
          cancellation: {
            title: 'Условия отмены',
            text: 'Бесплатная отмена невозможна. При отмене бронирования взимается стоимость первых суток проживания.',
          },
          payment: {
            title: 'Способы оплаты',
            text: 'Без предоплаты. Оплата производится при заселении.',
          },
        },
      },
      {
        id: 'suite-breakfast-premium',
        meal: 'Завтрак',
        cancellation: 'Условия отмены',
        payment: 'Без предоплаты',
        price: 12000,
        taxes: 'Налоги и сборы включены',
        includedServiceIds: ['breakfast', 'pool-access', 'beach-access', 'parking', 'spa-zone', 'massage'],
        cardServiceTitles: ['Бассейн', 'Парковка'],
        detailHighlights: ['Бассейн', 'Пляж', 'Парковка', 'Массажные кабинеты'],
        tooltipDetails: {
          meal: {
            title: 'Завтрак',
            text: 'Завтрак включен в стоимость тарифа для всех гостей.',
          },
          cancellation: {
            title: 'Условия отмены',
            text: 'Бесплатная отмена невозможна. При отмене бронирования взимается стоимость первых суток проживания.',
          },
          payment: {
            title: 'Способы оплаты',
            text: 'Без предоплаты. Оплата производится при заселении.',
          },
        },
      },
    ],
  },
  {
    id: 'standard-family',
    image: roomImages.standard,
    name: 'Одноместный',
    params: 'до 5 мест',
    area: '20 м²',
    roomCount: '1 комн.',
    guests: '1 двуспальная кровать · 1 диван',
    oldPrice: 4000,
    discount: '-35%',
    priceFromPrefix: 'от',
    stay: '2 дня / 2 гостя',
    filterTags: {
      bedType: ['double'],
      view: ['river'],
      balcony: true,
    },
    photoFeatures: [bathroomIcon, doubleBedIcon, balconyIcon, airConditioningIcon, hairdryerIcon],
    rates: [
      {
        id: 'standard-basic-flex',
        meal: 'Питание не включено',
        cancellation: 'Бесплатная отмена',
        payment: 'Без предоплаты',
        price: 2600,
        oldPrice: 4000,
        discount: '-35%',
        taxes: 'Налоги и сборы включены',
        includedServiceIds: ['pool-access', 'parking', 'beach-access', 'spa-zone', 'bike-rental'],
        cardServiceTitles: ['Бассейн', 'Парковка'],
        tooltipServiceTitles: ['Бассейн', 'Парковка', 'Пляж', 'SPA-зона', 'Прокат спортивного инвентаря'],
        detailHighlights: ['Открытый бассейн', 'Парковка на территории'],
        tooltipDetails: {
          meal: {
            title: 'Питание не включено',
            text: 'Питание в стоимость не входит. Услуги питания можно добавить на следующем шаге.',
          },
          cancellation: {
            title: 'Бесплатная отмена',
            text: 'Бесплатная отмена бронирования возможна до 21.12.2026 0:00 (UTC +03:00). При отмене бронирования после 21.12.2026 0:00 (UTC +03:00) взимается 50% от размера предоплаты.',
          },
          payment: {
            title: 'Способы оплаты',
            text: 'Без предоплаты. Оплата производится при заселении.',
          },
        },
      },
      {
        id: 'standard-basic-prepay',
        meal: 'Завтрак "Английский"',
        cancellation: 'Условия отмены',
        payment: 'Нужна предоплата',
        price: 3400,
        oldPrice: 4000,
        discount: '-15%',
        taxes: 'Налоги и сборы включены',
        includedServiceIds: ['beach-access', 'gym-access', 'parking', 'coworking', 'business-center'],
        cardServiceTitles: ['Пляж', 'Тренажерный зал'],
        tooltipServiceTitles: ['Пляж', 'Тренажерный зал', 'Парковка', 'Коворкинг-зона', 'Бизнес-центр'],
        detailHighlights: ['Доступ на пляж', 'Тренажерный зал'],
        tooltipDetails: {
          meal: {
            title: 'Завтрак',
            text: 'За гостя в сутки. Английский завтрак включен в стоимость тарифа.',
          },
          cancellation: {
            title: 'Условия отмены',
            text: 'Бесплатная отмена невозможна. При отмене бронирования взимается стоимость первых суток проживания.',
          },
          payment: {
            title: 'Способы оплаты',
            text: 'Нужна предоплата. Для подтверждения бронирования потребуется оплата банковской картой.',
          },
        },
      },
      {
        id: 'standard-breakfast',
        meal: 'Питание «Всё включено»',
        cancellation: 'Бесплатная отмена',
        payment: 'Без предоплаты',
        price: 4000,
        taxes: 'Налоги и сборы включены',
        includedServiceIds: ['gym-access', 'business-center', 'beach-access', 'spa-zone', 'massage'],
        cardServiceTitles: ['Фитнес-зал', 'Бизнес-центр'],
        tooltipServiceTitles: ['Фитнес-зал', 'Бизнес-центр', 'Пляж', 'SPA-зона', 'Массажные кабинеты'],
        detailHighlights: ['Фитнес-зал', 'Бизнес-центр'],
        tooltipDetails: {
          meal: {
            title: 'Все включено',
            text: 'За гостя в сутки. Всем гостям доступны завтрак, обед и ужин, а также безалкогольные напитки.',
          },
          cancellation: {
            title: 'Бесплатная отмена',
            text: 'Бесплатная отмена бронирования возможна до 21.12.2026 0:00 (UTC +03:00). После указанного срока действуют штрафные условия отмены.',
          },
          payment: {
            title: 'Способы оплаты',
            text: 'При заселении. Предварительная оплата не требуется.',
          },
        },
      },
    ],
  },
];

const bedOptions = [
  { value: 'any', label: 'Не важно' },
  { value: 'double', label: 'две двуспальные кровати' },
  { value: 'separate', label: 'две кровати' },
];

const serviceGroups = [
  {
    id: 'meal',
    title: 'Питание',
    icon: foodIcon,
    services: [
      {
        id: 'breakfast',
        imageIcon: serviceMealPlaceholderIcon,
        title: 'Завтрак',
        meta: 'Для 2 гостей ежедневно',
        price: 1600,
        period: 'за 2 дня',
        includedLabel: 'Услуга включена',
      },
      {
        id: 'all-inclusive',
        imageIcon: serviceMealPlaceholderIcon,
        title: 'Все включено',
        description: 'Завтрак, обед и ужин включены в стоимость тарифа для всех гостей.',
        meta: 'Для 2 гостей ежедневно',
        price: 4800,
        period: 'за 2 дня',
        includedLabel: 'Услуга включена',
      },
      {
        id: 'half-board',
        imageIcon: serviceMealPlaceholderIcon,
        title: 'Полупансион (завтрак и ужин)',
        description: 'Наслаждайтесь полноценным питанием в течение всего дня с нашим пакетом "Завтрак + ужин".',
        meta: 'Для 2 гостей ежедневно',
        price: 3200,
        period: 'за 2 дня',
        includedLabel: 'Услуга включена',
        hasExternalLink: true,
      },
    ],
  },
  {
    id: 'entertainment',
    title: 'Развлечения',
    icon: giftIcon,
    services: [
      {
        id: 'pool-access',
        imageIcon: serviceDefaultPlaceholderIcon,
        title: 'Бассейн',
        description: 'Посещение открытого бассейна в часы работы комплекса.',
        meta: 'Для 2 гостей',
        period: 'за 2 дня',
        price: 0,
        priceLabel: 'Бесплатно',
        actionLabel: 'Добавить',
        includedLabel: 'Услуга включена',
      },
      {
        id: 'beach-access',
        imageIcon: serviceDefaultPlaceholderIcon,
        title: 'Пляж',
        description: 'Доступ на оборудованный пляж с шезлонгами.',
        meta: 'Для 2 гостей',
        period: 'за 2 дня',
        price: 0,
        priceLabel: 'Бесплатно',
        actionLabel: 'Добавить',
        includedLabel: 'Услуга включена',
      },
      {
        id: 'gym-access',
        imageIcon: serviceDefaultPlaceholderIcon,
        title: 'Тренажерный зал',
        description: 'Посещение тренажерного зала ежедневно в часы работы клуба.',
        meta: 'Для 2 гостей',
        period: 'за 2 дня',
        price: 0,
        priceLabel: 'Бесплатно',
        actionLabel: 'Добавить',
        includedLabel: 'Услуга включена',
      },
    ],
  },
  {
    id: 'other',
    title: 'Другие услуги',
    icon: cartIcon,
    services: [
      {
        id: 'parking',
        imageIcon: serviceDefaultPlaceholderIcon,
        title: 'Парковка',
        description: 'Парковочное место на территории отеля рядом с корпусом.',
        meta: 'За 1 использование',
        price: 500,
        period: 'за 2 дня',
        actionLabel: 'Добавить',
        includedLabel: 'Услуга включена',
      },
      {
        id: 'late-checkout',
        imageIcon: serviceDefaultPlaceholderIcon,
        title: 'Поздний выезд',
        description: 'Продление пребывания в номере до 14:00 в день выезда.',
        meta: 'За 1 использование',
        price: 500,
        period: 'за 2 дня',
        actionLabel: 'Добавить',
        includedLabel: 'Услуга включена',
      },
      {
        id: 'spa-zone',
        imageIcon: serviceDefaultPlaceholderIcon,
        title: 'SPA-зона',
        description: 'Сауна, хаммам, баня и джакузи в wellness-комплексе отеля.',
        meta: 'Для 2 гостей',
        price: 1800,
        period: 'за 2 дня',
        actionLabel: 'Добавить',
        includedLabel: 'Услуга включена',
      },
      {
        id: 'massage',
        imageIcon: serviceDefaultPlaceholderIcon,
        title: 'Массаж и косметические процедуры',
        description: 'Доступ к массажным кабинетам и базовым spa-процедурам по записи.',
        meta: 'Для 1 гостя',
        price: 2500,
        period: 'за 2 дня',
        actionLabel: 'Добавить',
        includedLabel: 'Услуга включена',
      },
      {
        id: 'bike-rental',
        imageIcon: serviceDefaultPlaceholderIcon,
        title: 'Прокат спортивного инвентаря',
        description: 'Велосипеды и другой сезонный инвентарь по предварительному запросу.',
        meta: 'Для 2 гостей',
        price: 1200,
        period: 'за 2 дня',
        actionLabel: 'Добавить',
        includedLabel: 'Услуга включена',
      },
      {
        id: 'kids-room',
        imageIcon: serviceDefaultPlaceholderIcon,
        title: 'Детская игровая комната',
        description: 'Игровая комната и площадка на улице доступны ежедневно.',
        meta: 'Для 1 ребенка',
        price: 0,
        priceLabel: 'Бесплатно',
        period: 'за 2 дня',
        actionLabel: 'Добавить',
        includedLabel: 'Услуга включена',
      },
      {
        id: 'baby-crib',
        imageIcon: serviceDefaultPlaceholderIcon,
        title: 'Детская кроватка и манеж',
        description: 'По запросу предоставляется детская кроватка или манеж в номер.',
        meta: 'За 1 использование',
        price: 700,
        period: 'за 2 дня',
        actionLabel: 'Добавить',
        includedLabel: 'Услуга включена',
      },
      {
        id: 'kids-menu',
        imageIcon: serviceDefaultPlaceholderIcon,
        title: 'Детское меню',
        description: 'Детские стульчики в ресторане и специальное меню для маленьких гостей.',
        meta: 'Для 1 ребенка',
        price: 900,
        period: 'за 2 дня',
        actionLabel: 'Добавить',
        includedLabel: 'Услуга включена',
      },
      {
        id: 'kids-club',
        imageIcon: serviceDefaultPlaceholderIcon,
        title: 'Детская анимация и мини-клуб',
        description: 'Анимационная программа и мини-клуб для детей по расписанию отеля.',
        meta: 'Для 1 ребенка',
        price: 1400,
        period: 'за 2 дня',
        actionLabel: 'Добавить',
        includedLabel: 'Услуга включена',
      },
      {
        id: 'nanny-service',
        imageIcon: serviceDefaultPlaceholderIcon,
        title: 'Услуги профессиональной няни',
        description: 'Индивидуальный присмотр за ребенком по предварительному бронированию.',
        meta: 'За 1 использование',
        price: 3000,
        period: 'за 2 дня',
        actionLabel: 'Добавить',
        includedLabel: 'Услуга включена',
      },
      {
        id: 'business-center',
        imageIcon: serviceDefaultPlaceholderIcon,
        title: 'Бизнес-центр',
        description: 'Компьютеры, принтер, сканер и копир для рабочих задач.',
        meta: 'Для 2 гостей',
        price: 1100,
        period: 'за 2 дня',
        actionLabel: 'Добавить',
        includedLabel: 'Услуга включена',
      },
      {
        id: 'coworking',
        imageIcon: serviceDefaultPlaceholderIcon,
        title: 'Коворкинг-зона',
        description: 'Рабочие места с быстрым интернетом и розетками в общем пространстве.',
        meta: 'Для 2 гостей',
        price: 900,
        period: 'за 2 дня',
        actionLabel: 'Добавить',
        includedLabel: 'Услуга включена',
      },
    ],
  },
];

function App() {
  const [screen, setScreen] = React.useState('list');
  const [bookingFor, setBookingFor] = React.useState('self');
  const [activeFilters, setActiveFilters] = React.useState(initialFilterState);
  const [openFilterKey, setOpenFilterKey] = React.useState(null);
  const [selectedOffer, setSelectedOffer] = React.useState(() => ({ room: rooms[0], rate: rooms[0].rates[0] }));
  const [selectedServiceIds, setSelectedServiceIds] = React.useState([]);
  const [rateDetails, setRateDetails] = React.useState(null);

  const bookingForItems = [
    { id: 'self', label: 'Для себя', value: 'self' },
    { id: 'other', label: 'Для другого', value: 'other' },
  ];

  const handleSelectRoom = (room) => {
    setSelectedOffer({ room, rate: room.rates[0] });
    setSelectedServiceIds([]);
    setScreen('tariff');
  };

  const handleSelectRate = (room, rate) => {
    setSelectedOffer({ room, rate });
    setSelectedServiceIds([]);
    setScreen('services');
  };

  const handleToggleService = (serviceId) => {
    setSelectedServiceIds((prev) => (prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId]));
  };

  const handleToggleSingleFilter = (filterKey) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterKey]: !prev[filterKey],
    }));
    setOpenFilterKey(null);
  };

  const handleToggleMultiFilterOption = (filterKey, optionValue) => {
    setActiveFilters((prev) => {
      const nextValues = prev[filterKey].includes(optionValue)
        ? prev[filterKey].filter((value) => value !== optionValue)
        : [...prev[filterKey], optionValue];

      return {
        ...prev,
        [filterKey]: nextValues,
      };
    });
  };

  const handleFilterChipClick = (filter) => {
    if (filter.type === 'single') {
      handleToggleSingleFilter(filter.key);
      return;
    }

    setOpenFilterKey((prev) => (prev === filter.key ? null : filter.key));
  };

  const handleClearFilter = (filterKey) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterKey]: Array.isArray(prev[filterKey]) ? [] : false,
    }));

    if (openFilterKey === filterKey) {
      setOpenFilterKey(null);
    }
  };

  const filteredRooms = rooms
    .map((room) => ({
      ...room,
      rates: room.rates.filter((rate) => matchesRateFilters(rate, activeFilters)),
    }))
    .filter((room) => matchesRoomFilters(room, activeFilters) && room.rates.length > 0);

  return (
    <div className="prototype-shell">
      <div className="phone-frame">
        <TopUtilityBar />
        <SearchSummary muted={screen === 'checkout' || screen === 'success'} />

        {screen === 'list' ? (
          <>
            <SectionHeader title="Выберите номер" />
            <div className="rooms-list">
              {filteredRooms.map((room) => (
                <RoomCard key={room.id} room={room} onSelectRoom={handleSelectRoom} />
              ))}
              {filteredRooms.length === 0 ? <EmptyState /> : null}
            </div>
          </>
        ) : screen === 'tariff' ? (
          <TariffScreen
            onBack={() => setScreen('list')}
            onOpenDetails={setRateDetails}
            onSelectRate={handleSelectRate}
            selectedOffer={selectedOffer}
          />
        ) : screen === 'services' ? (
          <ServicesScreen
            onBack={() => setScreen('tariff')}
            onContinue={() => setScreen('checkout')}
            onToggleService={handleToggleService}
            selectedOffer={selectedOffer}
            selectedServiceIds={selectedServiceIds}
          />
        ) : screen === 'checkout' ? (
          <CheckoutScreen
            bookingFor={bookingFor}
            bookingForItems={bookingForItems}
            onBack={() => setScreen('services')}
            onBookingForChange={setBookingFor}
            onSubmit={() => setScreen('success')}
            selectedOffer={selectedOffer}
            selectedServiceIds={selectedServiceIds}
          />
        ) : (
          <SuccessScreen onBackToStart={() => setScreen('list')} />
        )}

        {rateDetails ? <RateDetailsModal onClose={() => setRateDetails(null)} rate={rateDetails} /> : null}
      </div>
    </div>
  );
}

function TopUtilityBar() {
  return (
    <div className="top-utility-bar">
      <div className="utility-chip flag-chip">
        <span className="flag-icon" aria-hidden="true" />
      </div>
      <div className="utility-chip currency-chip">RUB</div>
      <div className="utility-actions">
        <div className="utility-icon lock-icon" aria-hidden="true" />
        <div className="utility-icon user-icon" aria-hidden="true" />
      </div>
    </div>
  );
}

function SearchSummary({ muted }) {
  return (
    <div className={`search-summary ${muted ? 'search-summary-muted' : ''}`}>
      <div className="search-field-block">
        <div className="search-label">Заезд - Выезд</div>
        <div className="search-value-row">
          <div className="search-value">24 декабря - 25 декабря</div>
          <div className="calendar-icon" aria-hidden="true" />
        </div>
      </div>
      <div className="search-field-block">
        <div className="search-label">Гости</div>
        <div className="search-value-row">
          <div className="search-value">2 взрослых</div>
          <div className="chevron-icon" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ title, onBack, onForward }) {
  return (
    <div className="section-header-wrap">
      <div className="section-header">
        {onBack ? (
          <button className="back-button" onClick={onBack} type="button" aria-label="Назад">
            <SvgMaskIcon className="header-arrow-icon" icon={arrowLeftIcon} />
          </button>
        ) : null}
        <h1>{title}</h1>
        {onForward ? (
          <button className="forward-button" onClick={onForward} type="button" aria-label="Далее">
            <SvgMaskIcon className="header-arrow-icon" icon={arrowRightIcon} />
          </button>
        ) : null}
      </div>
      <div className="section-divider" />
    </div>
  );
}

function RoomCard({ room, onSelectRoom }) {
  const minRate = room.rates[0];

  return (
    <article className="room-card">
      <div className="room-image-wrap">
        <div className="room-features-overlay">
          {room.photoFeatures.map((icon, index) => (
            <div className="room-feature-tile" key={`${room.id}-feature-${index}`}>
              <SvgMaskIcon className="room-feature-svg" icon={icon} />
            </div>
          ))}
        </div>
        <img alt={room.name} className="room-image" src={room.image} />
      </div>
      <div className="room-card-body">
        <div className="room-title-row">
          <h2>{room.name}</h2>
          <button className="circle-toggle" type="button" aria-label="Открыть детали">
            <SvgMaskIcon className="room-toggle-icon" icon={arrowDownIcon} />
          </button>
        </div>
        <div className="room-params-row">
          <div className="room-meta">{room.params}</div>
          <div className="room-meta">{room.area}</div>
          <div className="room-meta">{room.roomCount}</div>
        </div>
        <div className="room-price-block">
          <div className="room-price-discount-row">
            <span className="room-discount">{minRate.discount || room.discount}</span>
            <span className="room-old-price">{formatPrice(minRate.oldPrice || room.oldPrice)}</span>
          </div>
          <div className="room-price-row">
            <span className="room-price-prefix">{room.priceFromPrefix}</span>
            <span className="room-price">{formatPrice(minRate.price)}</span>
          </div>
          <div className="room-stay">{room.stay}</div>
        </div>
        <Button form="round" onClick={() => onSelectRoom(room)} size="m" variant="primary" width={buttonWidthEnum.full}>
          Выбрать
        </Button>
      </div>
    </article>
  );
}

function TariffScreen({ onBack, onOpenDetails, onSelectRate, selectedOffer }) {
  const { room } = selectedOffer;
  const [isBedSelectOpen, setIsBedSelectOpen] = React.useState(false);
  const [selectedBed, setSelectedBed] = React.useState(bedOptions[0]);

  return (
    <>
      <SectionHeader onBack={onBack} title="Выберите тариф" />
      <div className="tariff-screen">
        <SelectedRoomCard room={room} />
        <div className="bed-select-card">
          <div className="bed-select-label">Кровати</div>
          <button className={`bed-select-button ${isBedSelectOpen ? 'bed-select-button-open' : ''}`} onClick={() => setIsBedSelectOpen((prev) => !prev)} type="button">
            <span>{selectedBed.label}</span>
            <SvgMaskIcon className={`bed-select-icon ${isBedSelectOpen ? 'bed-select-icon-open' : ''}`} icon={arrowDownIcon} />
          </button>
          {isBedSelectOpen ? (
            <div className="bed-select-dropdown">
              {bedOptions.map((option) => (
                <button
                  className={`bed-select-option ${selectedBed.value === option.value ? 'bed-select-option-active' : ''}`}
                  key={option.value}
                  onClick={() => {
                    setSelectedBed(option);
                    setIsBedSelectOpen(false);
                  }}
                  type="button"
                >
                  {option.value === 'any' ? (
                    <span>{option.label}</span>
                  ) : (
                    <span className="bed-select-option-row">
                      <SvgMaskIcon className="bed-select-option-icon" icon={doubleBedIcon} />
                      <span>{option.label}</span>
                    </span>
                  )}
                </button>
              ))}
            </div>
          ) : null}
          <div className="bed-select-note">Выполнение особых пожеланий не гарантируется</div>
        </div>
        <TariffHorizontalSlider onOpenDetails={onOpenDetails} room={room} onSelectRate={onSelectRate} />
      </div>
    </>
  );
}

function SelectedRoomCard({ room }) {
  return (
    <article className="selected-room-card">
      <img alt={room.name} className="selected-room-image" src={room.image} />
      <div className="selected-room-content">
        <h2>{room.name}</h2>
        <div className="selected-room-meta">
          {room.params} • {room.area} • {room.roomCount}
        </div>
      </div>
    </article>
  );
}

function TariffHorizontalSlider({ onOpenDetails, room, onSelectRate }) {
  return (
    <div className="tariff-slider" role="region" aria-label={`Тарифы для ${room.name}`}>
      {room.rates.map((rate) => (
        <RateCard
          key={rate.id}
          onOpenDetails={() => onOpenDetails(rate)}
          room={room}
          rate={rate}
          onSelect={() => onSelectRate(room, rate)}
        />
      ))}
    </div>
  );
}

function RateCard({ onOpenDetails, rate, room, onSelect }) {
  const [activeTooltip, setActiveTooltip] = React.useState(null);
  const featureButtonRefs = React.useRef({});
  const priceButtonRef = React.useRef(null);
  const servicesButtonRef = React.useRef(null);
  const visibleServices = (rate.cardServiceTitles || []).slice(0, 2);
  const tooltipServices = rate.tooltipServiceTitles || getIncludedServiceTitles(rate);
  const hiddenServicesCount = Math.max(0, tooltipServices.length - visibleServices.length);
  const features = [
    { key: 'meal', text: rate.meal, benefit: rate.meal !== 'Питание не включено', icon: mealIcon },
    { key: 'cancellation', text: rate.cancellation, benefit: rate.cancellation === 'Бесплатная отмена', icon: cancellationIcon },
    { key: 'payment', text: rate.payment, benefit: rate.payment === 'Без предоплаты', icon: paymentIcon },
  ];

  return (
    <div className="rate-card tariff-compare-card">
      <div className="rate-feature-list">
        {features.map((feature) => (
          <div key={feature.key} className="rate-feature-wrap">
            <button
              className="rate-feature rate-feature-button"
              onClick={() => setActiveTooltip((prev) => (prev === feature.key ? null : feature.key))}
              ref={(node) => {
                featureButtonRefs.current[feature.key] = node;
              }}
              type="button"
            >
              <SvgMaskIcon className={`rate-feature-icon ${feature.benefit ? 'rate-feature-icon-benefit' : ''}`} icon={feature.icon} />
              <span className="rate-feature-text">{feature.text}</span>
            </button>
            {activeTooltip === feature.key ? (
              <InlineTooltip anchor="feature" anchorRef={featureButtonRefs.current[feature.key]} onClose={() => setActiveTooltip(null)} title={rate.tooltipDetails[feature.key].title}>
                {rate.tooltipDetails[feature.key].text}
              </InlineTooltip>
            ) : null}
          </div>
        ))}
        {visibleServices.length > 0 ? (
          <div className="rate-feature-wrap">
            <div className="rate-feature rate-feature-services">
              <SvgMaskIcon className="rate-feature-icon rate-feature-icon-benefit" icon={giftIcon} />
              <div className="rate-feature-services-text">
                <span>{visibleServices.join(', ')}</span>
                {hiddenServicesCount > 0 ? (
                  <button className="rate-feature-spoiler" onClick={() => setActiveTooltip((prev) => (prev === 'services' ? null : 'services'))} ref={servicesButtonRef} type="button">
                    + еще {hiddenServicesCount}
                  </button>
                ) : null}
              </div>
            </div>
            {activeTooltip === 'services' ? (
              <InlineTooltip anchor="feature" anchorRef={servicesButtonRef.current} onClose={() => setActiveTooltip(null)} title="Услуги по тарифу">
                <div className="services-tooltip-list">
                  {tooltipServices.map((service) => (
                    <div key={service}>{service}</div>
                  ))}
                </div>
              </InlineTooltip>
            ) : null}
          </div>
        ) : null}
      </div>
      <div className="tariff-card-head">
        <button className="tariff-details-button" onClick={onOpenDetails} type="button">
          <span>Подробнее</span>
          <SvgMaskIcon className="tariff-title-icon" icon={arrowDownIcon} />
        </button>
      </div>
      <div className="rate-price-block">
        <div className="rate-price-caption">Стоимость за 2 дня</div>
        <div className="rate-taxes top-rate-taxes">{rate.taxes}</div>
        <div className="tariff-price-inline">
          <div className="tariff-discount-row tariff-discount-row-fixed">
            {rate.discount && rate.oldPrice ? <span className="room-discount">{rate.discount}</span> : null}
            {rate.discount && rate.oldPrice ? <span className="room-old-price">{formatPrice(rate.oldPrice)}</span> : null}
          </div>
          <div className="tariff-price-row">
            <SvgMaskIcon className="tariff-guest-icon" icon={guestIcon} />
            <div className="rate-price">{formatPrice(rate.price)}</div>
            <button className="tariff-info-button" onClick={() => setActiveTooltip((prev) => (prev === 'price' ? null : 'price'))} ref={priceButtonRef} type="button" aria-label="Детализация цены">
              <span className="tariff-info-icon">i</span>
            </button>
          </div>
          {activeTooltip === 'price' ? (
            <InlineTooltip anchor="price" anchorRef={priceButtonRef.current} onClose={() => setActiveTooltip(null)} title="Детализация цены, ₽" wide>
              <div>24 декабря - 25 декабря, 2 дня</div>
              <div>2 взрослых - {formatPrice(Math.round(rate.price / 2))} за день</div>
              <div className="price-tooltip-divider" />
              <div className="price-tooltip-heading">Стоимость дома</div>
              <div className="price-tooltip-total-row">
                <span>за весь период проживания</span>
                <strong>{formatNumberWithDecimals(rate.price)}</strong>
              </div>
              <div className="price-tooltip-taxes">{rate.taxes}</div>
            </InlineTooltip>
          ) : null}
        </div>
        <div className="tariff-button-wrap tariff-button-wrap-full">
          <Button form="round" onClick={onSelect} size="m" variant="primary" width={buttonWidthEnum.full}>
            Выбрать
          </Button>
        </div>
      </div>
    </div>
  );
}

function InlineTooltip({ anchor, anchorRef, children, onClose, title, wide }) {
  const tooltipRef = React.useRef(null);
  const [position, setPosition] = React.useState(null);

  React.useLayoutEffect(() => {
    if (!anchorRef || !tooltipRef.current) {
      return undefined;
    }

    const updatePosition = () => {
      if (!anchorRef || !tooltipRef.current) {
        return;
      }

      const anchorRect = anchorRef.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const viewportPadding = 12;
      const left = Math.min(
        Math.max(viewportPadding, anchorRect.left),
        window.innerWidth - tooltipRect.width - viewportPadding,
      );

      if (anchor === 'price') {
        setPosition({
          arrowLeft: Math.max(20, Math.min(anchorRect.left + anchorRect.width / 2 - left, tooltipRect.width - 20)),
          left,
          top: Math.max(viewportPadding, anchorRect.top - tooltipRect.height - 10),
        });
        return;
      }

      setPosition({
        arrowLeft: Math.max(20, Math.min(anchorRect.left + 30 - left, tooltipRect.width - 20)),
        left,
        top: anchorRect.bottom + 10,
      });
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);

    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [anchor, anchorRef]);

  if (!anchorRef) {
    return null;
  }

  return createPortal(
    <div className={`inline-tooltip-portal inline-tooltip-${anchor} ${wide ? 'inline-tooltip-wide' : ''}`} ref={tooltipRef} style={position ? { left: position.left, top: position.top } : { visibility: 'hidden' }}>
      <div className="inline-tooltip-header">
        <div>{title}</div>
        <button className="inline-tooltip-close" onClick={onClose} type="button" aria-label="Закрыть">
          <SvgMaskIcon className="rate-details-close-icon" icon={crossIcon} />
        </button>
      </div>
      <div className="inline-tooltip-body">{children}</div>
      <div className="inline-tooltip-arrow" style={position ? { left: position.arrowLeft } : undefined} />
    </div>,
    document.body,
  );
}

function RateDetailsModal({ onClose, rate }) {
  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Описание тарифа">
      <div className="rate-details-modal">
        <div className="rate-details-header">
          <h2>Подробнее о тарифе</h2>
          <button className="rate-details-close" onClick={onClose} type="button" aria-label="Закрыть">
            <SvgMaskIcon className="rate-details-close-icon" icon={crossIcon} />
          </button>
        </div>
        <div className="rate-details-body">
          <p>Тариф включает проживание для 2 гостей на 2 дня в выбранной категории номера.</p>
          <p>Питание: {rate.meal}.</p>
          <p>Отмена: {rate.cancellation}. Условия возврата зависят от даты отмены и применяются по правилам бронирования.</p>
          <p>Оплата: {rate.payment}. После выбора тарифа вы сможете перейти к оформлению бронирования и проверить детали заказа.</p>
          <p>В стоимость входят налоги и сборы согласно условиям текущего предложения, если не указано иное.</p>
          <div className="rate-details-list-wrap">
            <div className="rate-details-list-title">В тариф включено</div>
            <ul className="rate-details-list">
              {rate.detailHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServicesScreen({ onBack, onContinue, onToggleService, selectedOffer, selectedServiceIds }) {
  const { room, rate } = selectedOffer;
  const includedServiceIds = getRateIncludedServiceIds(rate);
  const totalPrice = rate.price + selectedServiceIds.reduce((sum, serviceId) => sum + getServicePrice(serviceId), 0);

  return (
    <>
      <SectionHeader onBack={onBack} title="Закажите услуги" />
      <div className="services-screen">
        <SelectedRoomCard room={room} />
        {serviceGroups.map((group) => (
          <div className="service-group" key={group.id}>
            <div className="service-group-title">
              <div className="service-group-icon-wrap">
                <SvgMaskIcon className="service-group-icon" icon={group.icon} />
              </div>
              <h2>{group.title}</h2>
            </div>
            <div className="service-cards-stack">
              {group.services.map((service) => (
                <ServiceCard
                  isIncluded={includedServiceIds.includes(service.id)}
                  isSelected={selectedServiceIds.includes(service.id)}
                  key={service.id}
                  onToggle={() => onToggleService(service.id)}
                  service={service}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <BottomActionBar actionLabel="Продолжить" onAction={onContinue} onCollapse={onBack} price={totalPrice} />
    </>
  );
}

function ServiceCard({ isIncluded, isSelected, onToggle, service }) {
  const isActive = isIncluded || isSelected;

  return (
    <article className="service-card">
      <div className="service-card-image-wrap">
        <SvgMaskIcon className="service-card-placeholder" icon={service.imageIcon} />
      </div>
      <div className="service-card-content">
        <div className="service-card-title-row">
          <h3>{service.title}</h3>
          {service.hasExternalLink ? <SvgMaskIcon className="service-link-icon" icon={externalLinkIcon} /> : null}
        </div>
        {service.description ? <div className="service-card-description">{service.description}</div> : null}
      </div>
      <div className="service-card-footer">
        <div className="service-card-meta-row">
          <SvgMaskIcon className={`service-meta-icon ${isActive ? 'service-meta-icon-selected' : ''}`} icon={guestIcon} />
          <div className="service-card-meta-text">{service.meta}</div>
        </div>
        {isIncluded && service.includedLabel ? (
          <div className="service-selected-row">
            <div className="service-selected-badge">
              <SvgMaskIcon className="service-check-icon" icon={checkIcon} />
              <span>{service.includedLabel}</span>
            </div>
            <div className="service-selected-period">{service.period}</div>
          </div>
        ) : (
          <div className="service-action-row">
            <div className="service-price-wrap">
              <div className={`service-price ${service.price === 0 ? 'service-price-free' : ''}`}>
                {service.priceLabel || formatPrice(service.price)}
              </div>
              {service.period ? <div className="service-period">{service.period}</div> : null}
            </div>
            <Button form="round" onClick={onToggle} size="m" variant="primary">
              {service.actionLabel || 'Добавить'}
            </Button>
          </div>
        )}
      </div>
    </article>
  );
}

function BottomActionBar({ actionLabel, onAction, onCollapse, price, taxes }) {
  return (
    <div className="checkout-bottom-bar action-bottom-bar">
      <div className="checkout-stay-meta">
        <div className="stay-dates">24 дек. - 25 дек.</div>
        <div className="stay-guests">1 дом, 2 гостя</div>
      </div>
      <div className="checkout-price-summary">
        <div className="checkout-price">{formatPrice(price)}</div>
        <div className="checkout-price-taxes">{taxes || 'Налоги и сборы включены'}</div>
      </div>
      <button className="checkout-collapse" onClick={onCollapse} type="button" aria-label="Свернуть">
        <SvgMaskIcon className="collapse-arrow-icon" icon={arrowDownIcon} />
      </button>
      <div className="bottom-action-button-wrap">
        <Button form="round" onClick={onAction} size="m" variant="primary" width={buttonWidthEnum.full}>
          {actionLabel}
        </Button>
      </div>
    </div>
  );
}

function CheckoutScreen({ bookingFor, bookingForItems, onBack, onBookingForChange, onSubmit, selectedOffer, selectedServiceIds }) {
  const { room, rate } = selectedOffer;
  const totalPrice = rate.price + selectedServiceIds.reduce((sum, serviceId) => sum + getServicePrice(serviceId), 0);

  return (
    <>
      <SectionHeader onBack={onBack} title="Введите данные гостей" />
      <div className="checkout-content">
        <div className="checkout-card guest-form-card">
          <h2>Введите свои данные</h2>
          <div className="field-caption">Я бронирую</div>
          <SegmentedButtons
            fullWidth
            hasError={false}
            items={bookingForItems}
            name="booking-for"
            onChangeAction={onBookingForChange}
            value={bookingFor}
          />

          <div className="auth-copy">
            Авторизуйтесь удобным способом - данные заполнятся автоматически. Или введите их вручную.
          </div>

          <div className="auth-icons-row">
            <div className="auth-icon vk">VK</div>
            <div className="auth-icon tbank">T</div>
            <div className="auth-icon sber">S</div>
            <div className="auth-icon alfa">A</div>
          </div>

          <div className="text-fields-stack">
            <TextField placeholder="Фамилия" showTooltip={false} value="Иванова" readOnly />
            <TextField placeholder="Имя" showTooltip={false} value="Анна" readOnly />
            <TextField placeholder="Отчество" showTooltip={false} value="Сергеевна" readOnly />
            <TextField placeholder="Телефон" showTooltip={false} value="+7 999 123-45-67" readOnly />
            <TextField placeholder="Электронная почта" showTooltip={false} value="anna.ivanova@example.com" readOnly />
          </div>
        </div>
      </div>

      <BottomActionBar actionLabel="Забронировать" onAction={onSubmit} onCollapse={onBack} price={totalPrice} taxes={rate.taxes} />
    </>
  );
}

function SuccessScreen() {
  return (
    <>
      <SectionHeader title="Бронирование оформлено" />
      <div className="success-screen">
        <div className="success-card">
          <SvgMaskIcon className="success-icon" icon={validIcon} />
          <h2>Задание выполнено</h2>
          <p>Бронирование успешно оформлено. Прототип дошёл до финальной точки сценария.</p>
        </div>
      </div>
    </>
  );
}

function SvgMaskIcon({ className, icon }) {
  return (
    <span
      aria-hidden="true"
      className={`${className} svg-inline-icon`}
      dangerouslySetInnerHTML={{ __html: icon }}
    />
  );
}

function FilterChip({ active, filter, onClear, onClick, open, value }) {
  const count = Array.isArray(value) ? value.length : 0;
  const label = filter.type === 'multi' && count > 0 ? `${filter.label}: ${count}` : filter.label;

  return (
    <div className="filter-chip-wrap">
      <Chip
        className={`filter-chip ${active ? 'filter-chip-active' : ''} ${open ? 'filter-chip-open' : ''}`}
        endIcon={
          active ? (
            <span
              aria-hidden="true"
              className="filter-chip-clear"
              onClick={(event) => {
                event.stopPropagation();
                onClear(filter.key);
              }}
            >
              <SvgMaskIcon className="filter-chip-clear-icon" icon={crossIcon} />
            </span>
          ) : (
            filter.type === 'multi' ? <SvgMaskIcon className={`filter-chip-arrow ${open ? 'filter-chip-arrow-open' : ''}`} icon={arrowDownIcon} /> : null
          )
        }
        label={label}
        onClick={() => onClick(filter)}
        selected={active || open}
      />
    </div>
  );
}

function FilterDropdown({ filter, onToggleOption, selectedValues }) {
  if (!filter || filter.type !== 'multi') {
    return null;
  }

  return (
    <div className={`filter-dropdown filter-dropdown-${filter.key}`}>
      {filter.options.map((option) => {
        const checked = selectedValues.includes(option.value);

        return (
          <label className="filter-dropdown-option" key={option.value}>
            <input
              checked={checked}
              onChange={() => onToggleOption(filter.key, option.value)}
              type="checkbox"
            />
            <span className={`filter-dropdown-checkbox ${checked ? 'filter-dropdown-checkbox-checked' : ''}`}>
              {checked ? '✓' : ''}
            </span>
            <span>{option.label}</span>
          </label>
        );
      })}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="empty-state-card">
      <div className="empty-state-title">Нет доступных вариантов</div>
      <div className="empty-state-text">Измените фильтры, чтобы снова показать номера и тарифы.</div>
    </div>
  );
}

function matchesRoomFilters(room, activeFilters) {
  if (activeFilters.balcony && !room.filterTags.balcony) {
    return false;
  }

  if (activeFilters.bedType.length > 0 && !activeFilters.bedType.some((value) => room.filterTags.bedType.includes(value))) {
    return false;
  }

  if (activeFilters.view.length > 0 && !activeFilters.view.some((value) => room.filterTags.view.includes(value))) {
    return false;
  }

  return true;
}

function matchesRateFilters(rate, activeFilters) {
  if (activeFilters.freeCancellation && rate.cancellation !== 'Бесплатная отмена') {
    return false;
  }

  if (activeFilters.noPrepayment && rate.payment !== 'Без предоплаты') {
    return false;
  }

  return true;
}

function isFilterActive(filter, activeFilters) {
  const value = activeFilters[filter.key];
  return Array.isArray(value) ? value.length > 0 : Boolean(value);
}

function getServicePrice(serviceId) {
  for (const group of serviceGroups) {
    const service = group.services.find((item) => item.id === serviceId);
    if (service) {
      return service.price || 0;
    }
  }

  return 0;
}

function formatPrice(value) {
  return new Intl.NumberFormat('ru-RU').format(value) + ' ₽';
}

function formatNumberWithDecimals(value) {
  return new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function getIncludedServiceTitles(rate) {
  return getRateIncludedServiceIds(rate)
    .filter((serviceId) => !['breakfast', 'half-board', 'all-inclusive'].includes(serviceId))
    .map((serviceId) => getServiceTitle(serviceId))
    .filter(Boolean);
}

function getRateIncludedServiceIds(rate) {
  const serviceIds = [...(rate.includedServiceIds || []), ...getServiceIdsFromTitles(rate.cardServiceTitles || [])];
  const mealServiceId = getMealServiceId(rate.meal);

  if (mealServiceId && !serviceIds.includes(mealServiceId)) {
    serviceIds.unshift(mealServiceId);
  }

  return [...new Set(serviceIds)];
}

function getMealServiceId(meal) {
  if (!meal) {
    return null;
  }

  if (meal.includes('Всё включено') || meal.includes('Все включено')) {
    return 'all-inclusive';
  }

  if (meal.includes('Полупансион')) {
    return 'half-board';
  }

  if (meal.includes('Завтрак')) {
    return 'breakfast';
  }

  return null;
}

function getServiceIdsFromTitles(titles) {
  return titles
    .map((title) => SERVICE_TITLE_TO_ID[title] || null)
    .filter(Boolean);
}

const SERVICE_TITLE_TO_ID = {
  'Бассейн': 'pool-access',
  'Пляж': 'beach-access',
  'Парковка': 'parking',
  'Тренажерный зал': 'gym-access',
  'Фитнес-зал': 'gym-access',
  'Бизнес-центр': 'business-center',
  'Поздний выезд': 'late-checkout',
  'Коворкинг-зона': 'coworking',
  'SPA-зона': 'spa-zone',
  'Массажные кабинеты': 'massage',
  'Детское меню': 'kids-menu',
  'Детская игровая комната': 'kids-room',
  'Детская кроватка и манеж': 'baby-crib',
  'Детская анимация и мини-клуб': 'kids-club',
  'Услуги профессиональной няни': 'nanny-service',
  'Прокат спортивного инвентаря': 'bike-rental',
};

function getServiceTitle(serviceId) {
  for (const group of serviceGroups) {
    const service = group.services.find((item) => item.id === serviceId);
    if (service) {
      return service.title;
    }
  }

  return '';
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
