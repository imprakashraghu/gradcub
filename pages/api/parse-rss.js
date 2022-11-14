const nextConnect = require('next-connect')
let Parser = require('rss-parser')
let parser = new Parser()

const handler = nextConnect()

handler
.get(async (req, res) => {
    const feed = await parser.parseURL('http://rss.jobsearch.monster.com/rssquery.ashx?q='+req.query.tag)
    res.json({data: feed.items||[]})
})

export default handler