const nextConnect = require('next-connect')
const cheerio = require('cheerio')

const handler = nextConnect()

handler
.post(async (req, res) => {
    fetch(req.body.url)
    .then(result => result.text())
    .then(html => {
            const $ = cheerio.load(html);
            const title = $('meta[property="og:title"]').attr('content') || $('title').text() || $('meta[name="title"]').attr('content')
            const image = $('meta[property="og:image"]').attr('content') || $('meta[property="og:image:url"]').attr('content')
            res.send({title: title, image: image, url: req.body.url})
    }).catch(error => {
        console.log(error);
    })
})

export default handler