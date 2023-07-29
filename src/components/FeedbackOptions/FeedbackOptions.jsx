import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <ul className={css.optionsBtnList}>
      <li>
        <button
          className={css.button}
          type="button"
          onClick={() => onLeaveFeedback('good')}
        >
          good
        </button>
      </li>
      <li>
        <button
          className={css.button}
          type="button"
          onClick={() => onLeaveFeedback('neutral')}
        >
          neutral
        </button>
      </li>
      <li>
        <button
          className={css.button}
          type="button"
          onClick={() => onLeaveFeedback('bad')}
        >
          bad
        </button>
      </li>
    </ul>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
