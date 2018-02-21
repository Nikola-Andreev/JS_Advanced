 (function() {

        return {
            add: (arr1, arr2) => {
                let result = []
                result[0] = arr1[0] + arr2[0]
                result[1] = arr1[1] + arr2[1]
                return result
            },

            multiply: (arr1, arr2) => {
                let result = []
                result[0] = arr1[0] * arr2
                result[1] = arr1[1] * arr2
                return result
            },

            length: (arr1, arr2) => {
                let result = Math.sqrt(arr1[0] * arr1[0] + arr1[1] * arr1[1])
                return result
            },

            dot: (arr1, arr2) => {
                let result = arr1[0] * arr2[0] + arr1[1] * arr2[1]
                return result
            },

            cross: (arr1, arr2) => {
                let result = arr1[0] * arr2[1] - arr1[1] * arr2[0]
                return result
            }
        }
    }())

    solution.add([1, 1], [1, 0]);
    solution.multiply([3.5, -2], 2);
    solution.length([3, -4]);
    solution.dot([1, 0], [0, -1]);
    solution.cross([3, 7], [1, 0]);

