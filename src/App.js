import './App.css';
import Papa from 'papaparse'
import { useEffect, useState } from 'react';

import Loading from './components/common/Loading'
import Header from './components/common/Header';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  let [isLoading,setIsLoading] = useState(true)
  let [studentsData,setStudentsData] = useState([])
  useEffect(()=>{
    setIsLoading(true)
    Papa.parse("/studentData/data.csv", {
      download: true,
      header: true,
      complete: function(results) {
        //Sorting based on the number of quest badges + skill badges  
        results.data.sort((student1,student2)=>{
          return (student2["# of Quests Completed"]+student2["# of Skill Badges Completed"])-(student1["# of Quests Completed"]+student1["# of Skill Badges Completed"])
        })
        setStudentsData(results)
        console.log(results);
        setIsLoading(false)
      }
    });
  },[])
  return (
    <div>
      { isLoading && <Loading />}
      <Header />
      <Dashboard 
        studentsData={studentsData}
        setIsLoading={setIsLoading}
      />
    </div>
  );
}

export default App;
