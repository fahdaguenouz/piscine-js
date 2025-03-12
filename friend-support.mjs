import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import { URL } from 'node:url'
import { join } from 'node:path'

const port = 5000
const server = createServer()

server.on('request', async (req, res) => {
    try {
        res.setHeader('Content-Type', 'application/json')
        const { pathname } = new URL(req.url, `http://${req.headers.host}`)
        const guestName = pathname.slice(1).replace(/\.json$/i, '')
        
        if (!guestName) {
            res.writeHead(404)
            return res.end(JSON.stringify({ error: 'guest not found' }))
        }

        try {

            const data = await readFile(join('guests', `${guestName}.json`), 'utf8')
            res.writeHead(200)
            res.end(data)
        } catch (fileError) {
            if (fileError.code === 'ENOENT') {
                res.writeHead(404)
                res.end(JSON.stringify({ error: 'guest not found' }))
            } else {
                throw fileError
            }
        }
    } catch (error) {
        console.error('Server error:', error)
        res.writeHead(500)
        res.end(JSON.stringify({ error: 'server failed' }))
    }
})

server.listen(port, () => {
    console.log(`Server running and listening on port ${port}`)
})
