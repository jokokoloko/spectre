import fetch from 'isomorphic-unfetch';
import { slugify } from '../../src/function';
import Layout from '../../src/components/Layout';
import Basic from '../../src/components/section/Basic';
import Image from '../../src/components/unit/Image';

const Post = ({ data: post, slug }) => (
    <Layout template={`single single-post single-post-${slug}`} title={post.name} description={post.summary.replace(/<[/]?p>/g, '')}>
        <Basic id={slug} space="space-custom">
            <figure className="node-xs-50">
                <Image className="image" source={post.image.medium} alternate={post.name} />
                {post.type && <div className={`flag flag-${slugify(post.type)}`}>{post.type}</div>}
            </figure>
            <header className="node-xs-50">
                <h1>{post.name}</h1>
                <p className="date">{post.premiered}</p>
            </header>
            <section className="node-xs-50 node-xs-80" dangerouslySetInnerHTML={{ __html: post.summary }} />
        </Basic>
    </Layout>
);

Post.getInitialProps = async ({ query }) => {
    const { slug } = query;
    const response = await fetch(`https://api.tvmaze.com/shows/${slug}`);
    const data = await response.json();
    console.log(`Fetched show: ${data.name}`); // delete
    return { data, slug };
};

export default Post;
