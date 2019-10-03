import fetch from 'isomorphic-unfetch';
import * as path from '../src/path';
import usePage from '../src/queries/usePage';
import Layout from '../src/components/Layout';
import Feed from '../src/components/section/Feed';
import Card from '../src/components/unit/Card';

const Overview = ({ shows: posts }) => {
    const { overview: page } = usePage();
    const loopPost = posts.map((node) => <Card key={node.id} node={node} column="col-lg-6" item="post" directory={path.POST} />);
    return (
        <Layout template={`page page-${page.slug}`} title={page.title} description={page.description}>
            <Feed id={`feed-${page.slug}`} space="space-custom" item="post">
                {(page.title || page.description) && (
                    <header className="copy node-xs-50 node-lg-80 text-lg-center">
                        <h1>{page.title}</h1>
                        <h2>{page.description}</h2>
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
