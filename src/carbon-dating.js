const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(sampleActivity) {
  
  const duplicate = +sampleActivity;

  if (+sampleActivity !== duplicate) return false;
  if (Array.isArray(sampleActivity)) return false;
  if (sampleActivity === Number(sampleActivity)) return false;

  res = Math.ceil(Math.log(MODERN_ACTIVITY / Number(sampleActivity))/(0.693 / HALF_LIFE_PERIOD));
  if (res === Infinity) return false;
  if (res < 0) return false;
  if (isNaN(res)) return false;
  return res;
}

module.exports = {
  dateSample
};
