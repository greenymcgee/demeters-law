import { GET_POSTS_RESPONSE } from 'fixtures/posts'
import { snakeCaseKeys } from '@/common/utils'
import { NextApiRequest, NextApiResponse } from 'next'
import { logger } from '@/log'

export default function controller(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (request.method === 'GET') {
    logger.info('GET /api/posts 200')
    return response.status(200).json(snakeCaseKeys(GET_POSTS_RESPONSE))
  }

  logger.error('GET /api/posts 405')
  return response.status(405).json({ message: 'Method not allowed' })
}
