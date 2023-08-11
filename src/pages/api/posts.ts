import { GET_POSTS_RESPONSE } from 'fixtures/posts'
import { snakeCaseKeys } from '@/common/utils'
import { NextApiRequest, NextApiResponse } from 'next'

export default function controller(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (request.method === 'GET') {
    return response.status(200).json(snakeCaseKeys(GET_POSTS_RESPONSE))
  }

  return response.status(405).json({ message: 'Method not allowed' })
}
