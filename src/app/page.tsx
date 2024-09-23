import { db } from '~/server/db';

const mockUrls = [
  'https://utfs.io/f/lxwTykXqPN7fqdCOuGwoLTklfvsrm6SIADzpFwX9EYNijWyG',
  'https://utfs.io/f/lxwTykXqPN7fIVpYADirOMgaceEIZd2TNCt0Y168GBiPHU4A',
  'https://utfs.io/f/lxwTykXqPN7f0UmDq697FAOsu3hRklaHyJvgcretfL4UCSnK',
  'https://utfs.io/f/lxwTykXqPN7feCAyhf5Z9GKYAHksUtBlwVruf1CRP56vFOQn'
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}))

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  console.log('posts', posts)
  return (
    <main className=''>
      <div className='flex flex-wrap gap-4'>
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + '-' + index} className='w-48'>
            <img src={image.url} alt="" />
          </div>
        ))}
      </div>
    </main>
  );
}
