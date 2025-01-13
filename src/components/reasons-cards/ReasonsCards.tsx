import React from "react";
import s from "./ReasonsCards.module.scss";
import { Typography } from "../ui/typography";
import Image from "next/image";

const cards = [
  {
    id: "1",
    title: "Зарабатывайте на заказах",
    value:
      "По желанию мастера, скидка может быть применена сразу, переведена на личный счет для будущих покупок или выведена наличными по договору с магазином. Клиенты получают материалы по розничным ценам без накруток, обеспечивая прозрачность сделки.",
    image: "/images/for-business/vacancie-card1.jpg",
  },
  {
    id: "2",
    title: "Делитесь своими знаниями и становитесь известным",
    value:
      "Ваши глаза горят от того, что вы делаете своими руками? У вас большой опыт и много «фишек»? Станьте автором статей и обзоров, и мы опубликуем их на нашем сайте и в социальных сетях.    ",
    image: "/images/for-business/vacancie-card2.jpg",
  },
  {
    id: "3",
    title: "Получайте новые заказы, не отходя от кассы!",
    value:
      "Большинство наших покупателей делают ремонт, строят дом или дачу. Подключайтесь к Клубу мастеров domix.am и получайте заявки на услуги по вашей специализации.",
    image: "/images/for-business/vacancie-card3.jpg",
  },
];

export const ReasonsCards = () => {
  return (
    <div className={s.container}>
      <Typography variant="h2" as="h2">
        3 причины стать участником
      </Typography>
      <div className={s.cardsContainer}>
        {cards.map((card) => (
          <div className={s.card} key={card.id}>
            <Image
              src={card.image}
              width={281}
              height={313}
              alt="vacancie card"
              className={s.image}
            />
            <div className={s.content}>
              <Typography variant="h3" as="h3">
                {card.title}
              </Typography>
              <Typography variant="body_3">{card.value}</Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
