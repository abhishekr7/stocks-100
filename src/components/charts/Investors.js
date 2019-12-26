import React, {Component} from 'react'
import {Bar} from 'react-chartjs-2'

class Investors extends Component {

  constructor(props){
    super(props);
    this.state = {
        chartData: {

          labels: ['Berkshire Hathaway',
          'Goldman Sachs',
          'JP Morgan Chase',
          'Alibaba Group',
          'Exxon Mobile',
          'Alphabet Inc.'],

          datasets: [{
  					data: [
  						1000,
  						801,
  						676,
  						1180,
  						200,
  						560
  					],

  					backgroundColor: [
  						'rgba(255, 99, 132, 0.2)',
  						'rgba(54, 162, 235, 0.2)',
  						'rgba(255, 206, 86, 0.2)',
  						'rgba(75, 192, 192, 0.2)',
  						'rgba(153, 102, 255, 0.2)',
  						'rgba(25, 59, 164, 0.2)',
  						'rgba(55, 19, 100, 0.2)'
  					],
  					label: 'Investors Shares'
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
      <div className="chart" style={con_style}>
      <Bar

          data = {this.state.chartData}
          options={{
            responsive: true,
    				legend: {
    					position: 'top',
    				},
    				title: {
    					display: true,
    					text: 'Investors Shares'
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
    );
  }
}

export default Investors
