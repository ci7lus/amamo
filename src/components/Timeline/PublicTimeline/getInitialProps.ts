import { AppContext } from '@/app/context';
import { Reference } from '@/middlewares/cache';
import { SeaPost } from '@/models/SeaPost';
import { getSeaApi } from '@/features/SeaAuth';

export const getPublicTimelineInitialProps = ({ cache, store }: AppContext) => {
  const api = getSeaApi(store);
  const pager = {
    initialData: cache.query('PublicTimeline_initialPosts', () => api.fetchPublicTimelineLatestPosts(30)),
    fetchAfter: async (prev: readonly Reference<SeaPost>[], count: number) => {
      const lastPost = cache.read(prev[prev.length - 1]).get();
      if (lastPost == null) return;
      const nextPosts = await api.fetchPublicTimelinePostsAfter(lastPost.id, count);
      return [...prev, ...nextPosts];
    },
  } as const;
  return {
    postsPager: pager,
  };
};
