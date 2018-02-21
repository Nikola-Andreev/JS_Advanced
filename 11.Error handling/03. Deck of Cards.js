function printDeckOfCards(cards) {

    class Card {
        constructor(face,suit){
            this._faces = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
            if(this._faces.indexOf(face) == -1){
                throw new Error
            } else {
                this._face = face
            }
            this._suits = ['S','H','C','D']
            if(this._suits.indexOf(suit) == -1){
                throw new Error
            } else {
                this._suit = suit
            }
        }

        set face(f){
            if(this._faces.indexOf(f) == -1){
                throw new Error
            } else {
                this._face = f
            }
        }

        set suit(s){
            if(this._suits.indexOf(s) == -1){
                throw new Error
            } else {
                this._suit = s
            }
        }

        toString(){
            let obj = {
                'S':'\u2660',
                'H':'\u2665',
                'D':'\u2666',
                'C':'\u2663'
            }
            return this._face + obj[this._suit]
        }
    }

    let invalid
    let allCads = []
    try{
        for (let i = 0; i < cards.length; i++) {
            if(cards[i].length == 2){
               face = cards[i][0]
            } else {
               face = cards[i][0]+cards[i][1]
            }
            let suit = cards[i][cards[i].length-1]
            invalid = cards[i]
            card = new Card(face,suit)
            allCads.push(card)
        }
    } catch (err){
        allCads.push('Invalid card: '+invalid)
    }
    console.log(allCads.join(', '))
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);