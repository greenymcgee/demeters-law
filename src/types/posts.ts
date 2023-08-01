export interface PostRecord {
  createdAt: string
  expiresAt: string
  id: number
  title: string
}

export interface GetPostsResponse {
  posts: PostRecord[]
}
