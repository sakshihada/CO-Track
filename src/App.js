import React from "react"
import styles from './App.css';

import { Cards, Chart, CountryPicker} from "./components/index"
import { fetchData} from "./api/index";
class App extends React.Component{
  state ={
    data: {},
    country:'',
  }
  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data:fetchedData})
    
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({data:fetchedData, country:country});
    //fetch data
    //set state
  }
  render(){
    const { data, country } = this.state;
    return(
      <div className="container">
      <span>
      <img className="image" src="https://www.id-hub.com/wp-content/uploads/2017/01/virus-infected-cells-213708.jpg" width="290px"/>
      <img className="image" src="https://i.pinimg.com/originals/3e/81/42/3e81427fe87e2766a5f1bd3dc8c15d1d.jpg" width="150px"/>
      <img className="image" src ="https://thumbs.dreamstime.com/b/aids-generic-red-virus-isolated-black-background-hiv-d-render-illustration-146195244.jpg" width="280px"/>
      </span>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country}/>
      </div>
    )
  }
}

export default App;
