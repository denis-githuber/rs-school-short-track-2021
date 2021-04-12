/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  return email.match(/@[a-z0-9-]{1,20}.\w{1,10}/gim).join('').replace('@', '');
}

module.exports = getEmailDomain;
