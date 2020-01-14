import React, {Component} from 'react'
import {Bar} from 'react-chartjs-2'
import { Dropdown } from 'semantic-ui-react'
import { db } from '../firebase'

const metricOptions = [
        {key: 'price', text: 'Price', value: 'price'},
        {key: 'open', text: 'Price Open', value: 'open'},
        {key: 'high', text: 'Day High', value: 'high'},
        {key: 'low', text: 'Day Low', value: 'low'},
        {key: 'volume', text: 'Volume', value: 'volume'},
        {key: 'market', text: 'Market Cap', value: 'market'},
    ]

class Compare extends Component {

  constructor(props){
    super(props);
    this.state = {
        chartData: {

          labels: [
            'Amazon.com, Inc',
            'Alphabet Inc.',
            'Facebook, Inc.',
            'Apple Inc.',
            'Coca-Cola Co',
            'Uber Technologies Inc',
            'Netflix Inc',
            'Goldman Sachs Group Inc',
            'Trivago NV - ADR',
            'Microsoft Corporation'
          ],

          datasets: [{
  					data: [
  						0,
  						0,
  						0,
  						0,
  						0,
  						0,
              0,
              0,
              0,
              0
  					],

  					backgroundColor: [
  						'rgba(255, 99, 132, 0.5)',
  						'rgba(54, 162, 235, 0.5)',
  						'rgba(255, 206, 86, 0.5)',
  						'rgba(75, 192, 192, 0.5)',
  						'rgba(153, 102, 255, 0.5)',
  						'rgba(25, 59, 164, 0.5)',
  						'rgba(55, 189, 50, 0.5)',
              'rgba(38, 208, 200, 0.5)',
              'rgba(90, 111, 150, 0.5)',
              'rgba(250, 78, 60, 0.5)'
  					],
  					label: 'Metric'
  				}],


        }
    }
  }

  handleSelectOption(event, option){

      db.collection("stocksData").get().then(querySnapshot => {

          var valueArr = []

          console.log(valueArr)

          const companies = querySnapshot.docs.map(doc => doc.data());

          companies.forEach(company => {
              //console.log(company[option.value])
              valueArr.push(company[option.value])
          });

          //console.log(valueArr)

          var newState = this.state.chartData.datasets[0]
          newState.data = valueArr;
          this.setState({newState})

          //console.log(valueArr)
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
            placeholder='Select Metric'
            fluid
            search
            selection
            options={metricOptions}
            onChange={this.handleSelectOption.bind(this)}
          />
      </div>

          <div className="chart" style={con_style}>
              <Bar

                  data = {this.state.chartData}
                  options={{
                    responsive: true,
            				legend: {
            					position: 'top',
            				},
            				title: {
            					display: true
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

export default Compare
