import React from 'react';
import './App.css';
import NewNews from './newNews/newNews';
import News from './news/news';
import { GiArrowCursor } from 'react-icons/gi';
import mock from './mock.json';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newNews: false,
      data: mock,
      news: [],
    }
    console.log(mock);
    //init news
    for(let [i, news] of mock.noticias.entries()){
      let newsElement = <News key={`news${i}`} data={news}/>
      this.state.news.push(newsElement)
    }
    //aqui iria llamada a ws, ahora mismo hay un mock

  }

  switchNewNews = () => {
    this.setState(
      {
        newNews: !this.state.newNews
      }
    )
  }



  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>DailyTrends</h1>
          <h4 onClick={this.switchNewNews}>Las últimas noticias, a solo un click <GiArrowCursor /></h4>
          {`${this.state.newNews}`}
        </header>
        <section>
          {this.state.newNews ? <NewNews /> : ""}
          {this.state.news}
        </section>
      </div>
    );
  }
}

export default App;
