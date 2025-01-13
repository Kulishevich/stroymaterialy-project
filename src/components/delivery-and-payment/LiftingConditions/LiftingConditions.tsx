import React from "react";
import s from "./LiftingConditions.module.scss";
import { Typography } from "@/components/ui/typography";

export const LiftingConditions = () => {
  return (
    <div className={s.container}>
      <Typography variant="h3" as="h3">
        Условия подъёма
      </Typography>
      <Typography variant="body_3">
        Грузчики компании поднимают товар на лифте или вручную, а также доносят
        материалы до места складирования. В стоимость услуг подъема и разгрузки
        (кроме разгрузки манипулятором ) входит 50м проноса товара до места
        складирования.
      </Typography>

      <div className={s.elem}>
        <Typography variant="h4" as="h4">
          Какую информацию Вам нужно предоставить
        </Typography>
        <Typography variant="body_2">
          В услугу доставки (кроме курьерской) не входит разгрузка (выгрузка из
          автомобиля), подъем и пронос товара — это отдельные услуги.
        </Typography>
        <ul>
          <Typography variant="body_3" as="li">
            Укажите, есть ли лифт.
          </Typography>
          <Typography variant="body_3" as="li">
            Если да, то уточните — пассажирский или грузовой.
          </Typography>
          <Typography variant="body_3" as="li">
            Если лифт отсутствует, то заказ поднимается вручную (его стоимость
            рассчитывается заранее).
          </Typography>
          <Typography variant="body_3" as="li">
            Сообщите заранее об особенностях места разгрузки (технический этаж,
            наличие освещения, доступность и т.д.).
          </Typography>
          <Typography variant="body_3" as="li">
            Разгрузка не осуществляется, если нарушены правила безопасности и
            есть угроза жизни и здоровью сотрудников компании.
          </Typography>
        </ul>
      </div>

      <div className={s.elem}>
        <Typography variant="h4" as="h4">
          Стоимость разгрузки и подъёма
        </Typography>
        <Typography variant="body_2">
          Рассчитывается, исходя из категории товара, веса, размеров и способа
          подъема (вручную или на лифте). Мы рассчитаем ее при оформлении заказа
          на сайте или по телефону . Если нам не удалось сделать это при
          оформлении, с вами свяжется оператор и сообщит стоимость подъема.
          <br />
          Некоторые особенности:
        </Typography>
        <ul>
          <Typography variant="body_3" as="li">
            Стоимость разгрузки в подвал или на цокольный этаж равна стоимости
            подъема вручную на второй этаж.
          </Typography>
          <Typography variant="body_3" as="li">
            В доставку на мопедах входит стоимость подъема.
          </Typography>
          <Typography variant="body_3" as="li">
            Если на месте потребовалась доплата, то чек будет отправлен на Вашу
            электронную почту.
          </Typography>
        </ul>
      </div>

      <div className={s.elem}>
        <Typography variant="h4" as="h4">
          Принцип безопасности оказания услуг - приоритетный
        </Typography>
        <Typography variant="body_2">
          Бригада подъема соблюдает правила техники безопасности и НЕ ВЫПОЛНЯЕТ
          работы, если требуется:
        </Typography>
        <ul>
          <Typography variant="body_3" as="li">
            Выход на крышу.
          </Typography>
          <Typography variant="body_3" as="li">
            Проход в шахту лифта.
          </Typography>
          <Typography variant="body_3" as="li">
            Работа в непосредственной близости к оголенным электропроводам.
          </Typography>
          <Typography variant="body_3" as="li">
            Работа в условиях повышенной задымленности, загазованности,
            запыленности.
          </Typography>
          <Typography variant="body_3" as="li">
            Подъем товара по пожарной или приставной лестнице.
          </Typography>
          <Typography variant="body_3" as="li">
            Подъем товара по строительным лесам.
          </Typography>
          <Typography variant="body_3" as="li">
            Подача товаров в окна, чердаки, подвалы, через ограждения и
            преграды.
          </Typography>
          <Typography variant="body_3" as="li">
            Работа в помещениях высотой ниже 180 см.
          </Typography>{" "}
          <Typography variant="body_3" as="li">
            Пронос и подъем товара по временным сооружениям и через инженерные
            коммуникации.
          </Typography>{" "}
          <Typography variant="body_3" as="li">
            Подъем товара по лестнице без перил.
          </Typography>{" "}
          <Typography variant="body_3" as="li">
            Подъем товара в условиях недостаточной освещенности.
          </Typography>{" "}
        </ul>
      </div>

      <div className={s.elem}>
        <Typography variant="body_2">При подъёме гарантируем:</Typography>
        <ul>
          <Typography variant="body_3" as="li">
            Сохранить потребительские свойства товара.
          </Typography>
          <Typography variant="body_3" as="li">
            При необходимости произвести сухую уборку и оставить лестницу или
            лифт чистой.
          </Typography>
        </ul>
      </div>

      <div className={s.elem}>
        <Typography variant="h4" as="h4">
          Тарифы на подъем и разгрузочные работы
        </Typography>
        <Typography variant="body_2">Рукой</Typography>
        <ul>
          <Typography variant="body_3" as="li">
            1 мешок или ведро 50 драм/налог
          </Typography>
          <Typography variant="body_3" as="li">
            Гипсокартон 1 шт - 300 драм/налог
          </Typography>
        </ul>
        <Typography variant="body_2">На лифте</Typography>
        <ul>
          <Typography variant="body_3" as="li">
            1 мешок или ведро 100 драм
          </Typography>
          <Typography variant="body_3" as="li">
            Гипсокартон 1 шт - 150 драм/налог
          </Typography>
        </ul>
      </div>
    </div>
  );
};
