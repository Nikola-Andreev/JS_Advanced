function orderRects(rects) {

    let result = []
    for (let [width,height] of rects) {
        let rect = createRect(width,height)
        result.push(rect)
    }
    result.sort((a,b) => a.compareTo(b))
    return result

    function createRect(width,height) {
        let rect = {
            width: width,
            height: height,
            area: () => rect.width*rect.height,
            compareTo: function (other){
                let result = other.area() - rect.area()
                return result || (other.width - rect.width)
            }
        }
        return rect
    }
}

console.log(orderRects([[10,5], [3,20], [5,12]]))