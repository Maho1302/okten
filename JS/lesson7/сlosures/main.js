let nowDate = new Date();
let hours = nowDate.getHours();
let minutes = nowDate.getMinutes();
let seconds = nowDate.getSeconds();
let todayDate = new Date();
let currYear = todayDate.getFullYear();
let currMonth = todayDate.getMonth() + 1;
let currDay = todayDate.getDate();

function userCard(number) {
    let card = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: number,
    }
    return {
        getCardOptions: function () {
            return card;
        },
        putCredits: function (cash1) {
            card.balance = card.balance + cash1;
            let transaction = {
                operationType: 'Received credits',
                credits: cash1,
                operationTime: `${currDay}/${currMonth}/${currYear}, ${hours}:${minutes}:${seconds}`
            }
            card.historyLogs.splice(0, 0, transaction);
        },
        takeCredits: function (cash2) {
            if (card.balance >= cash2 && card.transactionLimit > 0) {
                card.balance = card.balance - cash2;
                let transaction = {
                    operationType: 'Withdrawal of credits',
                    credits: cash2,
                    operationTime: `${currDay}/${currMonth}/${currYear}, ${hours}:${minutes}:${seconds}`
                }
                card.historyLogs.splice(0, 0, transaction);
            } else {
                console.error('Amount over the limit the balance or transaction limit exceeds.');
            }
        },
        setTransactionLimit: function (cash3) {
            card.transactionLimit = cash3;
            let transaction = {
                operationType: 'Transaction Limit change',
                credits: cash3,
                operationTime: `${currDay}/${currMonth}/${currYear}, ${hours}:${minutes}:${seconds}`
            }
            card.historyLogs.splice(0, 0, transaction);
        },
        transferCredits: function (credits, cards) {
            if (card.balance >= credits + credits * 0.5 / 100 && card.transactionLimit > 0) {
                cards.getCardOptions().balance += credits;
                credits2 = credits + credits * 0.5 / 100;
                card.balance -= credits2;
                let transaction = {
                    operationType: 'Received credits',
                    credits: credits,
                    operationTime: `${currDay}/${currMonth}/${currYear}, ${hours}:${minutes}:${seconds}`
                }
                cards.getCardOptions().historyLogs.splice(0, 0, transaction);
                let transaction2 = {
                    operationType: 'Withdrawal of credits',
                    credits: credits2,
                    operationTime: `${currDay}/${currMonth}/${currYear}, ${hours}:${minutes}:${seconds}`
                }
                card.historyLogs.splice(0, 0, transaction2);
            } else {
                console.error('Amount over the limit the balance or transaction limit exceeds.');
            }
        }
    }
}

const card3 = userCard(3);
card3.putCredits(150);
console.log(card3.getCardOptions());
card3.takeCredits(150);
console.log(card3.getCardOptions());

card3.setTransactionLimit(5000);
console.log(card3.getCardOptions());

const card1 = userCard(1);
console.log(card1.getCardOptions());
card3.transferCredits(50, card1);
console.log(card1.getCardOptions());

const card2 = userCard(2);
card2.putCredits(100);
card2.takeCredits(50);
card2.setTransactionLimit(200);
console.log(card2.getCardOptions());






class UserAccount {
    constructor(name, cards) {
        this.name = name;
        this.cards = [];
    }
    addCard() {
        if (this.cards.length < 3) {
            const card = userCard().getCardOptions();
            this.cards.push(card);
        } else {
            console.error('User can not have more than 3 cards');
        }
    }
    getCardByKey(number) {
        if (number <= 3) {
        const card = userCard(number);
        card.getCardOptions().key = number;
        return card;
        } else {
        console.error('User can not have more than 3 cards');
    }
    }
}

// let user = new UserAccount('Bob');
// user.addCard()
// user.addCard()
//
// let card1 = user.getCardByKey(1);
// let card2 = user.getCardByKey(2);
//
// card1.putCredits(500);
// card1.setTransactionLimit(800);
// card1.transferCredits(300, card2);
//
// card2.takeCredits(50);
//
// console.log(card1.getCardOptions());
// console.log(card2.getCardOptions());






