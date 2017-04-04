class Bob {
  constructor() {

  }

  hey(message) {
    var strippedMessage = message.replace(/\s/, '');
    if (!strippedMessage) { return 'Fine. Be that way!'; }

    strippedMessage = strippedMessage.slice(0, -1).replace(/[\W\d]/, '') + strippedMessage.slice(-1);

    if (isShouting(strippedMessage)) { return 'Whoa, chill out!'; }

    if (isQuestioning(strippedMessage)) { return 'Sure.'; }

    return 'Whatever.';

    function isShouting(msg) {

    }

    function isQuestioning(msg) {

    }
  }
}

module.exports = Bob;
