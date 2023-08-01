import { UsePostsIndex } from '@/hooks'

export type PostsProps = Pick<
  UsePostsIndex,
  | 'currentPosts'
  | 'error'
  | 'errorMessage'
  | 'hasPosts'
  | 'isLoading'
  | 'mutate'
>
