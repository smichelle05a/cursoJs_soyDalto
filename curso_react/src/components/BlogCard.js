import React/* , { Component } */ from 'react'

import { dumpLogs } from '../Utils';

const BlogCard = (props) => {

    // const onLike = (id) => {
    //     alert(`like to blog ${id}`)
    // }

    dumpLogs(props)

        return (
            <div className="col" key={props.id}>
                <div className="card h-100">
                    <img src="https://picsum.photos/200" className="card-img-top" alt="random" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                    </div>
                    <div>
                        <p className="mb-1">Like Count: {props.likes}</p>
                        <button className="btn btn-outline-danger mb-3" onClick={
                            props.onLike
                        }> Like </button>
                    </div>
                </div>
            </div>
        )
}

export default BlogCard;
