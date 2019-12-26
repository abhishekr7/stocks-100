import React, {Component} from 'react'
import {Line} from 'react-chartjs-2'

class Volume extends Component {

  constructor(props){
    super(props);
    this.state = {
        chartData: {

          labels: ['28 April 2019',
          '28 May 2019',
          '28 June 2019',
          '28 July 2019',
          '28 August 2019',
          '28 September 2019'],

          datasets: [{
  					data: [
  						100,
  						50,
  						60,
  						70,
  						20,
  						30
  					],

            lineTension : 0,

  					backgroundColor: 'rgba(55, 19, 100, 0.2)',

            label: 'Volume Trend'
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
    );
  }
}

export default Volume
