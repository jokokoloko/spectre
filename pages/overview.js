import fetch from 'isomorphic-unfetch';
import usePage from '../src/queries/usePage';
import Layout from '../src/components/Layout';
import Feed from '../src/components/section/Feed';
import NextLink from 'next/link'; // delete

const Overview = ({ shows: posts }) => {
    const { overview: page } = usePage();
    const loopPost = posts.map((node) => (
        <li key={node.id}>
            <NextLink href="/post/[slug]" as={`/post/${node.id}`}>
                <a>{node.name}</a>
            </NextLink>
        </li>
    ));
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
                    <div className="row gutter-20">
                        <ul>{loopPost}</ul>
                    </div>
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
