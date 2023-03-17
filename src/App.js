import './App.css';
import {AddQuestion} from './components/addQuestion'
import {DiscussionsList} from './components/discussionsList'
import { getDiscussionsApi } from './api/getDiscussionsApi';
import { postDiscussionApi } from './api/postDiscussionApi';
import { delDiscussionApi } from './api/delDiscussionApi';
import {useState, useEffect} from 'react'

function App() {
  const [discussionData, setDiscussionData] = useState([])
  const [newData, setNewData] = useState('')
  const [delData, setDelData] = useState('')
  
  useEffect(() => {
    if (delData) {
      delDiscussionApi(delData)
      .then(() => getData())
    }
  },[delData])

  useEffect(() => {
    if(newData) {
      postDiscussionApi(newData)
      .then(() => getData())
    }
  },[newData])

  useEffect(() => {
    getData()    
  },[])

  function getData() {
    getDiscussionsApi()
    .then((data) => {
      setDiscussionData(data)
      // console.log(data)
    })
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>My Agora States</h1>
        <AddQuestion setData={setNewData} cnt={discussionData.length+4}/>
        <DiscussionsList dataDummy={discussionData} delData={setDelData}/>
      </header>
    </div>
  );
}

export default App;
