import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const FetchData = () => {

  const [wines, setWines] = useState([])
  const [loaded, setLoaded] = useState(false)

  const [countries, setCountries] = useState([])
  const [types, setTypes] = useState([])
  
  useEffect(() => {
    const getCountries = async () =>{
      try {
        const { data } = await axios.get("https://quiniwine.com/api/pub/wineCategory/p/0/2020")
        setWines(data)
      } catch (error) {
        
      }
    }
    getCountries();
  }, [])

  useEffect(() => {
    const copyData = () => {
      let countriesCopy = [...countries];
      let typesCopy = [...types];
      wines.items.forEach((element) => {
        if (countriesCopy.indexOf(element.Country) === -1) {
          countriesCopy.push(element.Country)
        }
        if (typesCopy.indexOf(element.Type) === -1) {
          typesCopy.push(element.Type)
        }
      })
      setTypes(typesCopy)
      setCountries(countriesCopy)
    }
    if (wines.items && wines.items.length > 0){
      copyData();
    }
    console.log('pq isso aparece?')
  }, [wines])
  
  useEffect(() => {
    if  (countries.length > 0) {
      console.log(countries)
      console.log('mudou aqui countries')
      setLoaded(true)
    }
    console.log('isso')
  }, [countries])

  return (
    <>
      {/* {loaded && 
        wines.items.map((wine) => <p key={wine._id}>{wine.Name}</p>)
      } */}
      <div style={{display:"flex"}}>
      {loaded && 
        <>
          <div style={{display:"flex", flexDirection:"column", margin:"8px"}}>
            {countries.map((country) => <span key={country}>{country}</span>)}
          </div>
          <div style={{display:"flex", flexDirection:"column", margin:"8px"}}>
          {types.map((type) => <span key={type}>{type}</span>)}
          </div>
        </>
      }
       
        
      

      </div>
      
      
    </>
  );
};
