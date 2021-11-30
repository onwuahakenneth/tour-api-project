import React, {useState, useEffect} from 'react'
import './App.css';
import Loading from './components/loading/Loading';
import Tours from './components/tours/Tours';
import Header from './components/header/Header';
import EmptyTour from './components/emptyTour/EmptyTour';
import Footer from './components/footer/Footer';
const url = 'https://course-api.com/react-tours-project';

const App = ()=> {
  const [loading, setLoading] = useState(false);
  const [toursData, setToursData] = useState(null);
  const [toursDataCopy, setToursDataCopy] = useState(null);
  const [error, setError] = useState(null);
  
  //deleted a given tour from the list
  const handleDelete = (id)=>{
    const remainingTours = toursData.filter(tour => tour.id !== id);
    setToursData(remainingTours);
  }
  useEffect(()=>{
    const fetchdetails = {
      method : 'GET',
      Headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }
    //fetch tours
    setLoading(true);
    const getTourData = ()=>{
      fetch(url, fetchdetails)
      .then(resp =>{
        if(!resp.ok){
          setLoading(false)
          throw Error('Could not fetch from the resource.')
        }
        return resp.json();
      })
      .then(data =>{
        setToursData(data);
        setToursDataCopy(data);
        setLoading(false);
      })
      .catch(err =>{
        setError(err.message)
        setLoading(false)
      })
    }
    setTimeout(getTourData, 1000)
  }, [])
  return (
    <div className="App">
      {toursData?.length > 0 && <Header />}
      {error && <p className='error'>{error}</p>}
      {loading && <Loading text='Loading...'/>}
      {toursData?.length <= 0 && <EmptyTour toursDataCopy={toursDataCopy} setToursData={setToursData}/>}
      {toursData && <Tours toursData={toursData}  handleDelete={handleDelete}/>}

      <Footer />
    </div>
  );
}

export default App;
