import React from "react";
import s from "./BenefitsOfWorking.module.scss";
import { Typography } from "../ui/typography";
import Image from "next/image";

const cards = [
  {
    id: "1",
    title: "Обслуживание",
    image: "/images/for-business/image1.png",
    values: [
      "Профессиональная консультация и ответственное отношение",
      "Самая больная онлайн платформа - более 10 000 наименований продукции",
      "Предоставление услуг квалифицированных мастеров",
      "Доставка от двери до двери",
    ],
  },
  {
    id: "2",
    title: "Доступные цены",
    image: "/images/for-business/image2.png",
    values: [
      "Конкурентные цены",
      "Гибкая система рассрочки",
      "Возможность предложения своей цены на конкретный товар",
      "Возможность вычета НДС",
      "Сотрудничество с клиентами без посредников",
      "Сокращение незапланированных расходов",
    ],
  },
  {
    id: "3",
    title: "Подход",
    image: "/images/for-business/image3.png",
    values: [
      "Учитываем все желания и потребности клиента",
      "Отслеживание истории заказов в личном кабинете",
      "Возможность сделать свой выбор, не покидая рабочего места",
      "Сопровождение и внимание на любом этапе",
      "Экономия времени и ресурсов",
    ],
  },
  {
    id: "4",
    title: "Мнгожество преимуществ с Domix",
    image: "/images/for-business/image4.png",
    values: [
      "Гибкая система оплаты",
      "Общие пакеты и предложения",
      "Корпоративный клиент",
      "Гибкая система постоплаты и возможность вычета НДС",
      "Личная страница с историей покупок",
      "Опытные и надежные мастера",
    ],
  },
];

export const BenefitsOfWorking = () => {
  return (
    <div className={s.container}>
      <Typography variant="h2" as="h2">
        Преимущества работы с нами
      </Typography>
      <div className={s.cards}>
        {cards.map((card) => (
          <div className={s.card} key={card.id}>
            <Image
              src={card.image}
              width={281}
              height={399}
              alt="image"
              className={s.image}
            />
            <div className={s.content}>
              <Typography variant="h3" as="h3">
                {card.title}
              </Typography>
              <ul>
                {card.values.map((value, index) => (
                  <Typography variant="body_3" as="li" key={card.id + index}>
                    {value}
                  </Typography>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
