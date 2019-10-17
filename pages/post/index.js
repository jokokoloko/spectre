import fetch from 'isomorphic-unfetch';
import * as path from '../../src/path';
import usePage from '../../src/queries/usePage';
import Layout from '../../src/components/Layout';
import Feed from '../../src/components/section/Feed';
import Card from '../../src/components/unit/Card';

const Overview = ({ shows: posts }) => {
    const { post: archive } = usePage();
    const loopPost = posts.map((node) => <Card key={node.id} node={node} column="col-lg-6" item="post" directory={path.POST} />);
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

            <Feed id={`feed-${archive.slug}`} space="space-custom" item="post">
                {(archive.title || archive.description) && (
                    <header className="copy node-xs-50 node-lg-80 text-lg-center">
                        <h1>{archive.title}</h1>
                        <h2>{archive.description}</h2>
                    </header>
                )}
                <section className="node-xs-50 node-lg-80 cheat-both">
                    <div className="row gutter-20">{loopPost}</div>
                </section>
            </Feed>
        </Layout>
    );
};

Overview.getInitialProps = async () => {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await response.json();
    console.log(`Show data fetched. Count: ${data.length}`); // delete
    return {
        shows: data.map((entry) => entry.show),
    };
};

export default Overview;
