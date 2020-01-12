import React, {Component} from 'react'
import {Bar} from 'react-chartjs-2'
import { Dropdown } from 'semantic-ui-react'

const metricOptions = [
        {key: 'price1', text: 'Price', value: 'price1'},
        {key: 'price2', text: 'Price Open', value: 'price2'},
        {key: 'day1', text: 'Day High', value: 'day1'},
        {key: 'day2', text: 'Day Low', value: 'day2'},
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
  						1000,
  						801,
  						676,
  						1180,
  						200,
  						560,
              1100,
              400,
              789,
              990
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
