function processor(arr) {

    let commandsProcess = (function () {
        let list = []
        return {
            add: (item) => list.push(item),
            remove: (item) => list = list.filter(a => a!== item),
            print: () => console.log(list)
        }
    }())

    for (let commands of arr) {
        let[command, argument] = commands.split(' ')
        commandsProcess[command](argument)
    }
}

processor(['add hello', 'add again', 'remove hello', 'add again', 'print']);

