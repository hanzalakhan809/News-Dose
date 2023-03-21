
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News'
import {
  BrowserRouter as Router,Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


export default function App() {
  const pageSize = 12;
  const country = 'in';

  const apiKey = process.env.REACT_APP_API_KEY;


  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
          height={2}
        />
        <Routes>
          <Route exact path='*' element={<News apiKey={apiKey} setProgress={setProgress} key={'home'} pageSize={pageSize} country={country} category={"general"} />} />

          <Route exact path='/home' element={<News apiKey={apiKey} setProgress={setProgress} key={'home'} pageSize={pageSize} country={country} category={"general"} />} />
          <Route exact path='/business' element={<News apiKey={apiKey} setProgress={setProgress} key={'business'} pageSize={pageSize} country={country} category={"business"} />} />
          <Route exact path='/business' element={<News apiKey={apiKey} setProgress={setProgress} key={'business'} pageSize={pageSize} country={country} category={"business"} />} />
          <Route exact path='/entertainment' element={<News apiKey={apiKey} setProgress={setProgress} key={'entertainment'} pageSize={pageSize} country={country} category={"entertainment"} />} />
          <Route exact path='/general' element={<News apiKey={apiKey} setProgress={setProgress} key={'general'} pageSize={pageSize} country={country} category={"general"} />} />
          <Route exact path='/health' element={<News apiKey={apiKey} setProgress={setProgress} key={'health'} pageSize={pageSize} country={country} category={"health"} />} />
          <Route exact path='/science' element={<News apiKey={apiKey} setProgress={setProgress} key={'science'} pageSize={pageSize} country={country} category={"science"} />} />
          <Route exact path='/sports' element={<News apiKey={apiKey} setProgress={setProgress} key={'sports'} pageSize={pageSize} country={country} category={"sports"} />} />
          <Route exact path='/technology' element={<News apiKey={apiKey} setProgress={setProgress} key={'technology'} pageSize={pageSize} country={country} category={"technology"} />} />



        </Routes>
      </Router>
    </div>
  )
}

