import React from 'react';
import { articles } from './data';

const Blogs = () => {
    return (
        <div className="container">
            <div className="columns is-3 is-vcentered is-justify-content-space-between">
                {articles.map(item => {
                    return (
                        <article className="column panel ">
                                <a target="_blank" href={item.link}>
                                <div className="panel-image">
                                    <figure className="image is-4by3">
                                        <img className="cover" src={item.bannerImg} alt="Placeholder image" />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-content">
                                            <p className="title is-4">{item.title}</p>
                                            <p className="is-6">{item.description}</p>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <span class="tag is-light">{item.date}</span>
                                    </div>
                                </div>
                                </a>
                        </article>
                    )
                })}
            </div>
        </div>
    );
};
export default Blogs;
