import React from 'react';
import { MapSetting, PlacemarkSetting } from '../../utils/const';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const YandexMap = () => {
  return (
    <YMaps>
      <Map
        defaultState={{
          center: MapSetting.COORDINATES,
          zoom: MapSetting.ZOOM,
        }}
        className="contacts__map"
      >
        <Placemark
          geometry={PlacemarkSetting.COORDINATES}
          options={{
            iconLayout: PlacemarkSetting.ICON_LAYOUT,
            iconImageHref: PlacemarkSetting.IMAGE,
            iconImageSize: PlacemarkSetting.SIZES,
            iconImageOffset: PlacemarkSetting.OFFSETS,
          }}
        />
      </Map>
    </YMaps>
  );
};

export default YandexMap;
