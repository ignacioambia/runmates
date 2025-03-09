import { Training } from '@runmates/types';

export const trainingWithOneSession: Training = {
  activities: [
    {
      title: 'Easy Run',
      distance: 5,
    },
  ],
  notes:
    'Here we go, week 1 of your training!. Kick off your training. Remember dynamic warm up! Run at a pace between 7:11 and 7:54 per km.',
  intensity: 'low',
  weekday: 'Monday',
};

export const trainingWithTwoSessions: Training = {
  activities: [
    {
      title: 'Easy Run',
      distance: 5,
    },
    {
      title: 'Strides',
      complementary_training: '4X20s',
    },
  ],
  intensity: 'medium',
  notes:
    'Run easy but end with high-effort strides to build speed and agility. Perform four 20-second strides at near max effort. Keep a comfortable pace throughout your run.',
  weekday: 'Wednesday',
};

export const trainingWithThreeSessions: Training = {
  activities: [
    {
      title: 'Easy Run',
      complementary_training: '10min',
    },
    {
      title: 'Speed',
      complementary_training: '6x',
    },
    {
      title: 'Easy Run',
      complementary_training: '10min',
    },
  ],
  intensity: 'high',
  notes:
    "Today's session involves high-intensity intervals to boost your pace. Run 10 mins. at an easy pace of 7:11 to 7:54 mins/km to get started. After this, run 2 minutes then walk another 2 mintues. Do this 6 times! These sessions are the ones which are going to make you faster! Speed sessions are tough mentally and physically but this is where you will make a lot of progress and the post run accomplishment feels great!. Finally run other 10 minutes at an easy pace",
  weekday: 'Tuesday',
};
