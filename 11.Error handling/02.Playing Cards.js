
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

    let card = new Card('J', 'D');
    () => card.face = '11'


