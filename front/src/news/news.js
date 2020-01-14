import React from 'react';
import '../App.css';
import './news.css';

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.data.title,
            body: props.data.body,
            image: props.data.image,
            publisher: props.data.publisher,
            source: props.data.source,
        }
    }
    render() {
        return (
            <div className={"news"}>
                <h3 className={"news__title"}>{this.state.title} </h3>
                <span className={"news__source"}>Vía: <a target="blank" href={this.state.source}>{this.state.publisher}</a> </span>
                <img className={"news__img"} src={this.state.image} />
                <div className={"news__body"}>
                    <p>{this.state.body}</p>
                </div>
                <a target="blank" href={this.state.source}>Ir a la fuente</a>
            </div>
        );
    }
}
export default News;
