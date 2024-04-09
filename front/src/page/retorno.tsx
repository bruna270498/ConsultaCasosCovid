import React, { useState } from 'react';

interface CovidData {
  ProvinciaEstado: string;
  Confirmados: number;
  Mortos: number;
}

const Main: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [covidData, setCovidData] = useState<CovidData[]>([]);
  const [totalConfirmed, setTotalConfirmed] = useState<number>(0);
  const [totalDeaths, setTotalDeaths] = useState<number>(0);

  const handleCountryChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const country = event.target.value;
    setSelectedCountry(country);
    try {
      const response = await fetch(`https://dev.kidopilabs.com.br/exercicio/covid.php?pais=${country}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data from API');
      }
      const data = await response.json();
      setCovidData(data);
      
      let totalConfirmed = 0;
      let totalDeaths = 0;
      const covidDataArray = Object.values(data);
      for (const item of covidDataArray) {
          const currentItem = item as CovidData;
           if (currentItem.Confirmados && currentItem.Mortos) {
              totalConfirmed += currentItem.Confirmados;
              totalDeaths += currentItem.Mortos
             }
        }

      setTotalConfirmed(totalConfirmed);
      setTotalDeaths(totalDeaths);
    } catch (error) {
      console.error('Erro ao obter os dados da API-Covid-19:', error);
    }
  };  

  return (
    <div>
      <h1>COVID-19 Information</h1>
      <form>
        <label htmlFor="country">Escolha um País:</label>
        <select id="country" name="country" value={selectedCountry} onChange={handleCountryChange}>
          <option value="">Selecione</option>
          <option value="Brazil">Brazil</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
        </select>
      </form>
      <div>
        <h2>Casos Confirmados: {totalConfirmed}</h2>
        <h2>Total de Mortos: {totalDeaths}</h2>
        <h2>Dados Estaduais:</h2>
        {Object.values(covidData).map((item: CovidData, index: number) => (
           <div key={index}>
            <h3>{item.ProvinciaEstado}</h3>
            <p>Confirmados: {item.Confirmados}</p>
            <p>Mortos: {item.Mortos}</p>
           </div>
            ))}
      </div>
    </div>
  );
};

export default Main;
