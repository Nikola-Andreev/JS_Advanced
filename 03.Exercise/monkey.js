function solve(a) {

    let obj = this
    let processor = (function() {

        function upvote() {
            obj.upvotes++
        }
        function downvote() {
            obj.downvotes++
        }

        function score() {
            let output = []
            let upvotesforPrint = obj.upvotes
            let downvotesForPrint = obj.downvotes
            if(obj.downvotes + obj.upvotes > 50){
                let greather = Math.max(obj.upvotes , obj.downvotes)
                let bonus = greather*25/100
                upvotesforPrint += Math.ceil(bonus)
                downvotesForPrint += Math.ceil(bonus)
            }
            let diff = upvotesforPrint - downvotesForPrint
            output.push(upvotesforPrint)
            output.push(downvotesForPrint)
            output.push(diff)
            if(obj.upvotes / (obj.upvotes+obj.downvotes) > 0.66 && obj.upvotes + obj.downvotes >= 10){
                output.push('hot')
            }
            if(obj.upvotes - obj.downvotes >= 0 && (obj.upvotes > 100 || obj.downvotes > 100 && obj.upvotes + obj.downvotes >= 10)){
                output.push('controversial')
            } else if (obj.upvotes - obj.downvotes < 0 && obj.upvotes + obj.downvotes >= 10){
                output.push('unpopular')
            } else {
                output.push('new')
            }
            return output
        }
        return {upvote, downvote, score}
    })()
    return processor[a]()
}

// function example() {
//     let obj = {id: '3', author: 'emil', content: 'wazaaaaa', upvotes: 100, downvotes: 100};
//     solve.call(obj, 'downvote');
//     solve.call(obj, 'upvote');
//     console.log(solve.call(obj, 'score'));
//     for (let i = 0; i < 50; i++) {
//         solve.call(obj, 'downvote');
//     }
//
//     console.log(solve.call(obj, 'score'));
// }


let obj = {id: '1', author: 'pesho', content: 'hi guys', upvotes: 101, downvotes: 99};

console.log(solve.call(obj, 'score'));

var forumPost = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

solve.call(forumPost, 'upvote')
solve.call(forumPost, 'downvote')

//console.log(solve.call(forumPost, 'score'))
var expected = [127, 127, 0, 'controversial']

for (let i = 0; i < 50; i++) {
    solve.call(forumPost, 'downvote')
}
console.log(solve.call(forumPost, 'score'))