import fetch from 'isomorphic-unfetch';
import * as path from '../../path';
import usePage from '../../queries/usePage';
import Layout from '../../components/Layout';
import Feed from '../../components/section/Feed';
import ArticlePost from '../../components/project/ArticlePost';

const ArchivePost = ({ shows: posts }) => {
    const { post: archive } = usePage();
    const loopPost = posts.map((post) => <ArticlePost key={post.id} post={post} />);
    return (
        <Layout template="archive archive-post" title={archive.title} description={archive.description}>
            <Feed id="posts" space="space-custom" item="post">
                <div className="row gutter-50 gutter-lg-80">
                    <div className="col-lg-9">
                        {archive && (
                            <header className="node-xs-80">
                                {archive.name && <h1>{archive.name}</h1>}
                                {archive.description && <h2>{archive.description}</h2>}
                            </header>
                        )}
                        <section className="node-xs-80">{loopPost}</section>
                    </div>
                    <div className="col">MenuPostType</div>
                </div>
            </Feed>
        </Layout>
    );
};

ArchivePost.getInitialProps = async () => {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await response.json();
    console.log(`Show data fetched. Count: ${data.length}`); // delete
    return {
        shows: data.map((entry) => entry.show),
    };
};

export default ArchivePost;
