import { useEffect, useState } from 'react';
import PostItem from '../components/PostItem';
import { Post } from '../types/Post';

export default function TopPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const fetcher = async () => {
      const res: Response = await fetch('https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts');
      const { posts }: { posts: Post[] } = await res.json();
      setPosts(posts);
    };

    fetcher();
  }, []);

  return (
    <>
      <ul className='grid gap-6 max-w-3xl mt-8 mx-auto'>
        {posts.map((post: Post) => (
          <PostItem key={post.id} {...post} />
        ))}
      </ul>
    </>
  );
}
