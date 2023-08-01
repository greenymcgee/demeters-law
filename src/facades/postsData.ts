import { GetPostsResponse, PostRecord } from '@/types/posts'
import { delegateArray, delegateObject } from '@/utils'
import { SWRResponse } from 'swr'

export class PostsDataFacade {
  private data: GetPostsResponse

  constructor(data: SWRResponse<GetPostsResponse>['data']) {
    this.data = delegateObject(data)
  }

  public get posts(): PostRecord[] {
    return delegateArray(this.data.posts)
  }

  public get currentPosts(): PostRecord[] {
    return this.posts.filter(
      (post) => new Date(post.expiresAt).getTime() > Date.now(),
    )
  }

  public get hasPosts(): boolean {
    return Boolean(this.currentPosts.length)
  }
}
