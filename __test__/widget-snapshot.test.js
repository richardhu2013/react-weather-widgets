// Link.react-test.js
import React from 'react';
import * as coms from '../app/components/weather-widget';
import App from '../app/containers/app';
import renderer from 'react-test-renderer';

test('Render Cloudy Component', () => {
  const component = renderer.create(
    <coms.Cloudy />
  );

  let cloudy = component.toJSON();
  expect(cloudy).toMatchSnapshot();

});


test('Render App Component', () => {
  const component = renderer.create(
    <App />
  );

  let app = component.toJSON();
  expect(app).toMatchSnapshot();

});


test('Render Rainy Component', () => {
  const component = renderer.create(
    <coms.Rainy />
  );

  let rainy = component.toJSON();
  expect(rainy).toMatchSnapshot();

});

test('Render Fair Component', () => {
  const component = renderer.create(
    <coms.Fair />
  );

  let fair = component.toJSON();
  expect(fair).toMatchSnapshot();

});

test('Render Flurries Component', () => {
  const component = renderer.create(
    <coms.Flurries />
  );

  let flurries = component.toJSON();
  expect(flurries).toMatchSnapshot();

});

test('Render ThunderStorm Component', () => {
  const component = renderer.create(
    <coms.ThunderStorm />
  );

  let thunderStorm = component.toJSON();
  expect(thunderStorm).toMatchSnapshot();

});

test('Render Windy Component', () => {
  const component = renderer.create(
    <coms.Windy />
  );

  let windy = component.toJSON();
  expect(windy).toMatchSnapshot();

});

test('Render SunShower Component', () => {
  const component = renderer.create(
    <coms.SunShower />
  );

  let sunShower = component.toJSON();
  expect(sunShower).toMatchSnapshot();

});
