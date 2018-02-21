function* extractTags(str) {
    let regex = /<[^>]+>/g
    let match
    while (match = regex.exec(str)){
        let tag = match[0]
        yield  tag
    }
}

let html = `<html><body>
<p align='center'><span lang='en'>Hello</span>, HTML
</p> Bye, bye</body></html>`;
for (let tag of extractTags(html)) {
    console.log(tag);
}
