import './App.css';
import Papa from 'papaparse'
import { useEffect, useState } from 'react';

import Loading from './components/common/Loading'
import Header from './components/common/Header';

function App() {
  let [isLoading,setIsLoading] = useState(true)
  useEffect(()=>{
    setIsLoading(true)
    Papa.parse("/studentData/data.csv", {
      download: true,
      header: true,
      complete: function(results) {
        setIsLoading(false)
        console.log(results);
      }
    });
  },[])
  return (
    <div>
      <Header />
      {
        isLoading && <Loading />
      }
    </div>
  );
}

export default App;
