import React, {Component} from 'react'
import {Line} from 'react-chartjs-2'
import { Dropdown } from 'semantic-ui-react'
import { db } from '../firebase'

const companyOptions = [
        {key: 'AMZN', text: 'Amazon.com, Inc', value: 'AMZN'},
        {key: 'GOOGL', text: 'Alphabet Inc.', value: 'GOOGL'},
        {key: 'FB', text: 'Facebook, Inc.', value: 'FB'},
        {key: 'AAPL', text: 'Apple Inc.', value: 'AAPL'},
        {key: 'KO', text: 'Coca-Cola Co', value: 'KO'},
        {key: 'UBER', text: 'Uber Technologies Inc', value: 'UBER'},
        {key: 'NFLX', text: 'Netflix Inc', value: 'NFLX'},
        {key: 'GS', text: 'Goldman Sachs Group Inc', value: 'GS'},
        {key: 'TRVG', text: 'Trivago NV - ADR', value: 'TRVG'},
        {key: 'MSFT', text: 'Microsoft Corporation', value: 'MSFT'}
    ]

class Trends extends Component {

  constructor(props){
    super(props);
    this.state = {
        chartData: {

          labels: [],

          datasets: [{
  					data: [],

            lineTension : 0,

  					backgroundColor: 'rgba(55, 19, 100, 0.2)',

            label: 'Trends'
  				}],
        }
    }
  }

  handleSelectOption(event, data){

    // get a single doc
    db.collection("stocksPerformance").doc(data.value).get().then(doc => {

        var valueArr = []
        var labelArr = []

        const company = doc.data();

        //console.log(company);

        for(var x in company){
          labelArr.push(x);
          valueArr.push(company[x]);
        }

        var newState = this.state.chartData

        newState.labels = labelArr;
        newState.datasets[0].data = valueArr;

        this.setState({newState})

    })

  }

  render(){

    var con_style = {
      paddingLeft : 250,
      align : "centre",
      height : 600,
      width : 1200
    }

    return (

      <div>
          <div style={{ paddingLeft: 200, paddingRight: 60, paddingTop: 50 }}>
                <Dropdown
                  placeholder='Select Company'
                  fluid
                  search
                  selection
                  options={companyOptions}
                  onChange={this.handleSelectOption.bind(this)}
                />
          </div>

      <div className="chart" style={con_style}>
      <Line

          data = {this.state.chartData}
          options={{
            responsive: true,
    				legend: {
    					position: 'top',
    				},
    				title: {
    					display: true,
    					text: 'Volume Trend'
    				},
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }}
      />
      </div>
      </div>
    );
  }
}

export default Trends
