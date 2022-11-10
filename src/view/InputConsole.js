const { Console } = require('@woowacourse/mission-utils');

class InputConsole {
  userMoney(callback) {
    Console.readLine('구입금액을 입력해 주세요.\n', callback);
  }

  winningNumbers(callback) {
    Console.readLine('\n당첨 번호를 입력해 주세요.\n', callback);
  }

  bonusNumber(callback) {
    Console.readLine('\n보너스 번호를 입력해 주세요.\n', callback);
  }
}

module.exports = InputConsole;
