import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import Link from './Link';

const Card = ({ node, column, effect, item, directory }) => (
    <article id={`${item}-${node.id}`} className={`${item} ${item}-${node.order || node.id} effect-image ${column}`}>
        <figure className={`effect-${effect}`}>
            <Image className="image fit exact-center" source={node.image.medium} alternate={node.name} />
            <figcaption className="dark-30 d-flex align-items-center">
                <h4 className="headline">{node.name}</h4>
                <div className="caption">
                    <p
                        className="excerpt"
                        dangerouslySetInnerHTML={{
                            __html: node.premiered,
                        }}
                    />
                    <p className="action">{`${node.action || 'Learn more'} →`}</p>
                </div>
                <Link className="link" to={directory ? `${directory}/${node.id}` : `/${node.id}`} dynamic={directory}>
                    view more
                </Link>
            </figcaption>
        </figure>
    </article>
);

Card.propTypes = {
    node: PropTypes.object.isRequired,
    column: PropTypes.string,
    effect: PropTypes.string,
    item: PropTypes.string,
    directory: PropTypes.string,
};

Card.defaultProps = {
    column: 'col',
    effect: 'oscar',
    item: 'post',
    directory: undefined,
};

export default Card;
