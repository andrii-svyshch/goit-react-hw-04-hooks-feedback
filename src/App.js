import { useState } from 'react';
import PropTypes from 'prop-types';
import Section from 'Components/Section';
import FeedbackOptions from 'Components/FeedbackOptions';
import Statistics from 'Components/Statistics';
import Notification from 'Components/Notification';
import './App.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  console.log(bad);

  const handleFeedback = ({ target }) => {
    const { name } = target;
    const state = prevSate => prevSate + 1;

    switch (name) {
      case 'good':
        setGood(state);
        break;

      case 'neutral':
        setNeutral(state);
        break;

      case 'bad':
        setBad(state);
        break;

      // no default
    }
  };

  const countTotalFeedback = (...args) => args.reduce((a, b) => a + b);
  const total = countTotalFeedback(good, bad, neutral);
  const countPositiveFeedbackPercentage = (good, total) =>
    total !== 0 ? Math.round((good / total) * 100) : 0;

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={handleFeedback}
      />

      {total > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={countPositiveFeedbackPercentage(good, total)}
        />
      ) : (
        <Notification message="No feedback given" />
      )}
    </Section>
  );
}

App.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
