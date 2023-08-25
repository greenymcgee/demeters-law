import { GET_POSTS_RESPONSE } from 'fixtures/posts'
import { snakeCaseKeys } from '@/common/utils'
import { NextApiRequest, NextApiResponse } from 'next'
import { DLLogger } from '@/log'

const log = DLLogger()

function getPostsHandler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method === 'GET') {
    log.info('GET /api/posts 200')
    log.flush()
    return response.status(200).json(snakeCaseKeys(GET_POSTS_RESPONSE))
  }

  log.error('GET /api/posts 405')
  log.flush()
  return response.status(405).json({ message: 'Method not allowed' })
}

export default getPostsHandler
