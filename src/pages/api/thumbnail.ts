import { NextApiRequest, NextApiResponse } from 'next'
import { getScreenshot } from './_lib/chromium'
import { getHtmlThumbnailTemplate } from './_lib/thumbTemplate'

const isDev = !process.env.AWS_REGION

export default async function (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> {
  try {
    const query = req.query

    const title = String(query.title)
    const thumbnail_bg = String(query.thumbnail_bg)
    const thumbnail_logos = Array.from(query.thumbnail_logos)

    if (!title) {
      throw new Error('Title is required!')
    }

    const html = getHtmlThumbnailTemplate({
      title,
      thumbnail_bg,
      thumbnail_logos,
    })

    const file = await getScreenshot(isDev, html)

    res.setHeader('Content-Type', 'image/png')
    res.setHeader(
      'Cache-control',
      'public, immutable, no-transform, s-maxage=31436000, max-age=31436000'
    )
    return res.end(file)
  } catch (err) {
    console.error(`Error | ${err.message}`)
    res.setHeader('Content-Type', 'text/html')
    res
      .status(500)
      .end('<h1>Internal Error</h1><p>Desculpe, ocorreu um problema.</p>')
  }
}
