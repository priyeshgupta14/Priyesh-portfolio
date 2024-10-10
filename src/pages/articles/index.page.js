import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { POSTS_PATH, postFilePaths } from 'utils/mdx'; // Import your MDX utils


import { Articles} from './Articles';


export default function ArticlesPage({ posts, featured }) {
  return <Articles posts={posts} featured={featured} />;
}

export async function getStaticProps() {
  const allPostsData = postFilePaths.map(async (filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath), 'utf-8');
    const { data } = matter(source);

    return {
      ...data,
      slug: data.slug,  // Get slug from frontmatter
      externalUrl: data.externalUrl,
    };
  });

  const allPosts = await Promise.all(allPostsData);


  const featured = allPosts.find(post => post.featured);
  const posts = allPosts.filter(post => !post.featured)
                     .sort((a, b) => new Date(b.date) - new Date(a.date));


  return {
    props: { posts, featured },
  };
}