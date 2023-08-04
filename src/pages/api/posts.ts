import { GET_POSTS_RESPONSE } from '@/fixtures/posts'
import { snakeCaseKeys } from '@/utils'
import { NextApiRequest, NextApiResponse } from 'next'

export default function controller(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (request.method === 'GET') {
    const randomNumber = Math.floor(Math.random() * Date.now())
    return randomNumber % 2
      ? response.status(200).json(snakeCaseKeys(GET_POSTS_RESPONSE))
      : response.status(500).json({ message: 'Server Error' })
  }

  return response.status(405).json({ message: 'Method not allowed' })
}
