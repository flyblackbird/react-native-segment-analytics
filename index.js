import {
  NativeModules,
} from 'react-native';

const {SegmentAnalytics} = NativeModules;

export default {
  setup: function (configKey: string, flushAt: Integer, recordScreenViews: Boolean) {
    SegmentAnalytics.setup(configKey, flushAt, recordScreenViews);
  },

  identify: function (userId: string, traits: Object) {
    SegmentAnalytics.identify(userId, traits);
  },

  track: function (trackText: string, properties: Object) {
    SegmentAnalytics.track(trackText, properties);
  },

  screen: function (screenName: string, properties: Object) {
    SegmentAnalytics.screen(screenName, properties);
  },

  alias: function (newId: string) {
    SegmentAnalytics.alias(newId);
  },

  reset: function () {
    SegmentAnalytics.reset()
  },

  flush: function () {
    SegmentAnalytics.flush()
  }
};
