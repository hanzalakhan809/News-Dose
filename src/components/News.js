import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

const News = (props) => {


  
  document.title = `News Dose-${capitalizeFirstLetter(props.category)}`


  const [article, setarticle] = useState([])
  const [pages, setpages] = useState(1)
  const [loading, setLoading] = useState(true)
  const [totalResults, settotalResults] = useState(0)

  const concatData = async () => {
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pages}&pageSize=${props.pageSize}`);
    let dataToJson = await data.json();

    setarticle(article.concat(dataToJson.articles))
    setLoading(false)
    settotalResults(dataToJson.totalResults)

  }


  const fetchData = () => {
    setpages(pages + 1) 

  }
  useEffect(() => {
    concatData()
  }, [pages])


  useEffect(() => {
    updateNews();
    console.log('hi');
  }, [])




  const updateNews = async () => {
    props.setProgress(10)
    setLoading(true)
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pages}&pageSize=${props.pageSize}`);
    let dataToJson = await data.json();

    setarticle(dataToJson.articles);
    setLoading(false)
    settotalResults(dataToJson.totalResults)
    props.setProgress(100)

  }





  return (
    <>
      <h1 className='text-center' style={{marginTop: 70,marginBottom : 10}}>Top Headlines From {capitalizeFirstLetter(props.category)}</h1>
      {loading && <Loading />}
      <InfiniteScroll
        dataLength={article.length} //This is important field to render the next data
        next={fetchData}
        hasMore={article.length !== totalResults}
        loader={<Loading />}
      // endMessage={
      //   <p style={{ textAlign: 'center' }}>
      //     <b>Yay! You have seen it all</b>
      //   </p>
      // }
      >
        <div className="container">
          <div className="row "  >
            {article.map((e, index) => {
              return <div className="col-md-4 h-100" key={index} >
                <NewsItem url={e.url} title={e.title} description={e.description} urlToImage={e.urlToImage} author={e.author} publishedAt={e.publishedAt} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}

//  const defaultProps = {
//   pageSize: 9,
//   country: "in",
//   category: "business",
//   apiKey: '5cef2d9ba231442ca56154f1055d6ea3'
// }

// const propTypes = {
//   pageSize: propTypes.number,
//   country: propTypes.string,
//   category: propTypes.string
// }


export default News