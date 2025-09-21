import React from 'react';
import ErrorBox from '../../Reusable/ErrorBox';
import AirConditionsItem from './AirConditionsItem';
import Layout from '../../Reusable/Layout';

const TodayWeatherAirConditions = ({ data }) => {
  const noDataProvided =
    !data || Object.keys(data).length === 0 || data.cod === '404';

  let content = <ErrorBox flex="1" type="error" />;

  if (!noDataProvided) {
    // Safe property access with fallbacks
    const realFeel = data.main?.feels_like ?? data.main?.temp ?? 0;
    const windSpeed = data.wind?.speed ?? 0;
    const clouds = data.clouds?.all ?? 0;
    const humidity = data.main?.humidity ?? 0;

    content = (
      <>
        <AirConditionsItem
          title="Real Feel"
          value={`${Math.round(realFeel)} °C`}
          type="temperature"
        />
        <AirConditionsItem
          title="Wind"
          value={`${windSpeed.toFixed(1)} m/s`}
          type="wind"
        />
        <AirConditionsItem
          title="Clouds"
          value={`${Math.round(clouds)} %`}
          type="clouds"
        />
        <AirConditionsItem
          title="Humidity"
          value={`${Math.round(humidity)} %`}
          type="humidity"
        />
      </>
    );
  }

  return (
    <Layout
      title="AIR CONDITIONS"
      content={content}
      mb="1rem"
      sx={{ marginTop: '2.9rem' }}
    />
  );
};

export default TodayWeatherAirConditions;