import logo from './logo.svg';
import './App.css';
import Papa from 'papaparse'
import { useEffect, useState } from 'react';

import Loading from './components/common/Loading'

function App() {
  let [isLoading,setIsLoading] = useState(true)
  useEffect(()=>{
    setIsLoading(true)
    Papa.parse("/studentData/data.csv", {
      download: true,
      header: true,
      complete: function(results) {
        // setIsLoading(false)
        console.log(results);
      }
    });
  },[])
  return (
    <div>
      {
        isLoading && <Loading />
      }
    </div>
  );
}

export default App;
