const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!members || typeof members == 'number' || Array.isArray(members) == false) return false;
  const array = [];
  members.forEach((item) => {
      if (item == +item) return;
      if (typeof item == 'string') {
        item = item.trim();
          for(let i = 0; i < item.length; i++) {
              array.push(item[0].toUpperCase());
              return;
          };
      } else return;
  })
  return array.sort().join('');
}

module.exports = {
  createDreamTeam
};
