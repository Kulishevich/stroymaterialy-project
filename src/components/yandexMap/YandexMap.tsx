import { FC } from "react";
import s from "./YandexMap.module.scss";

export const YandexMap: FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.mapContainer}>
        <a
          href="https://yandex.by/maps/157/minsk/?utm_medium=mapframe&utm_source=maps"
          className={s.mapLink}
          style={{ top: "0px" }}
        >
          Минск
        </a>
        <a
          href="https://yandex.by/maps/157/minsk/?ll=27.569305%2C53.886387&utm_medium=mapframe&utm_source=maps&z=16.18"
          className={s.mapLink}
          style={{ top: "14px" }}
        >
          Яндекс Карты — транспорт, навигация, поиск мест
        </a>
        <iframe
          src="https://yandex.by/map-widget/v1/?ll=27.665928%2C53.988442&mode=whatshere&whatshere%5Bpoint%5D=27.665928%2C53.988442&whatshere%5Bzoom%5D=17&z=16"
          frameBorder="1"
          allowFullScreen={true}
          className={s.mapIframe}
        ></iframe>
      </div>
    </div>
  );
};
