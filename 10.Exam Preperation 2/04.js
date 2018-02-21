function tableBuilder(selector) {
    return {
        createTable: function(columnNames){
            let target = $(selector).empty()

            let table = $('<table></table>')
            let tr = $('<tr></tr>')
            for (let i = 0; i < columnNames.length; i++) {

                let th = $('<th></th>').text(columnNames[i])
                tr.append(th)
            }
            let action = $('<th></th>').text('Action')
            tr.append(action)
            table.append(tr)
            target.append(table)
        },
        fillData(dataRows){
            let target = $(selector).find('table')

            for (let i = 0; i < dataRows.length; i++) {
                let tr = $('<tr></tr>')
                for (let j = 0; j < dataRows[i].length; j++) {
                    let td = $('<td></td>').text(dataRows[i][j])
                    tr.append(td)
                }
                let td = $('<td></td>')
                let del = $('<button>Delete</button>').on('click',function () {
                    $(this).closest('tr').remove()
                })
                td.append(del)
                tr.append(td)
                target.append(tr)
            }

        }
    }
}