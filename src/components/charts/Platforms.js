import React, {Component} from 'react'
import {Doughnut} from 'react-chartjs-2'

class Platforms extends Component {

  constructor(props){
    super(props);
    this.state = {
        chartData: {

          labels: ['IQOption',
          'smallcase',
          'Groww',
          'Plus500',
          'eToro',
          'X-Trade Brokers'],

          datasets: [{
  					data: [
  						100,
  						50,
  						60,
  						70,
  						20,
  						30
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
  					label: 'Platform Contribution'
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
      <Doughnut

          data = {this.state.chartData}
          options={{
            responsive: true,
    				legend: {
    					position: 'top',
    				},
    				title: {
    					display: true,
    					text: 'Platforms Contribution'
    				}
          }}
      />
      </div>
    );
  }
}

export default Platforms