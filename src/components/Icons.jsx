import PropTypes from 'prop-types';

export default function CheckIcon ({ width = 40, height = 40 }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      strokeWidth='2.5'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M5 12l5 5l10 -10' />
    </svg>
  );
}

CheckIcon.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};
