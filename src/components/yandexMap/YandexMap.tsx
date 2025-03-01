import s from "./YandexMap.module.scss";
import clsx from "clsx";

type YandexMapProps = {
  className?: string;
};

export const YandexMap = ({ className }: YandexMapProps) => {
  return (
    <div className={s.wrapper}>
      <div className={clsx(s.mapContainer, className)}>
        <a
          href="https://yandex.by/maps/10262/yerevan/?utm_medium=mapframe&utm_source=maps"
          className={s.mapLink}
          style={{ top: "0px" }}
        >
          Ереван
        </a>
        <a
          href="https://yandex.by/maps/10262/yerevan/house/YE0YcwdpSEMHQFpqfX5xdXxlZg==/?ll=44.509159%2C40.204063&utm_medium=mapframe&utm_source=maps&z=16"
          className={s.mapLink}
          style={{ top: "14px" }}
        >
          Улица Наири Зарьяна, 22А на карте Еревана, ближайшее метро Дружба
        </a>
        <iframe
          src="https://yandex.by/map-widget/v1/?ll=44.509159%2C40.204063&mode=whatshere&whatshere%5Bpoint%5D=44.509160%2C40.204062&whatshere%5Bzoom%5D=17&z=16"
          frameBorder="1"
          allowFullScreen={true}
          className={s.mapIframe}
        ></iframe>
      </div>
    </div>
  );
};
