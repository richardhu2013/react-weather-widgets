import React from 'react';
import {
  shallow
} from 'enzyme';
import * as coms from '../app/components/weather-widget';


test('test Cloudy render', () => {
  const wrapper = shallow(
    <coms.Cloudy />
  );

  expect(wrapper.type()).toEqual('div');
  expect(wrapper.find('.icon')).toHaveLength(1);
  expect(wrapper.find('.cloud')).toHaveLength(2);
});

test('test ThunderStorm render', () => {
  const wrapper = shallow(
    <coms.ThunderStorm />
  );
  expect(wrapper.type()).toEqual('div');
  expect(wrapper.find('.bolt')).toHaveLength(2);

});

test('test Fair render', () => {
  const wrapper = shallow(
    <coms.Fair />
  );
  expect(wrapper.type()).toEqual('div');
  expect(wrapper.find('.sun')).toHaveLength(1);
  expect(wrapper.find('.rays')).toHaveLength(1);

});


test('test Flurries render', () => {
  const wrapper = shallow(
    <coms.Flurries />
  );
  expect(wrapper.type()).toEqual('div');
  expect(wrapper.find('.snow')).toHaveLength(1);
  expect(wrapper.find('.flake')).toHaveLength(2);
});


test('test Rainy render', () => {
  const wrapper = shallow(
    <coms.Rainy />
  );
  expect(wrapper.type()).toEqual('div');
  expect(wrapper.find('.cloud')).toHaveLength(1);
  expect(wrapper.find('.rain')).toHaveLength(1);

});

test('test Windy render', () => {
  const wrapper = shallow(
    <coms.Windy />
  );
  expect(wrapper.type()).toEqual('div');
  expect(wrapper.find('.climacon_wind')).toHaveLength(1);
  expect(wrapper.find('.climacon_iconWrap-wind')).toHaveLength(1);

});

test('test SunShower render', () => {
  const wrapper = shallow(
    <coms.SunShower />
  );
  expect(wrapper.type()).toEqual('div');
  expect(wrapper.find('.cloud')).toHaveLength(1);
  expect(wrapper.find('.rain')).toHaveLength(1);
  expect(wrapper.find('.rays')).toHaveLength(1);
});
