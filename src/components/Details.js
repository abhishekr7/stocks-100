import React, {Component} from 'react'
import { Table } from 'semantic-ui-react'
import { Dropdown } from 'semantic-ui-react'

const companyOptions = [
        {key: 'AMZN', text: 'Amazon.com, Inc'},
        {key: 'GOOGL', text: 'Alphabet Inc.'},
        {key: 'FB', text: 'Facebook, Inc.'},
        {key: 'AAPL', text: 'Apple Inc.'},
        {key: 'KO', text: 'Coca-Cola Co'},
        {key: 'UBER', text: 'Uber Technologies Inc'},
        {key: 'NFLX', text: 'Netflix Inc'},
        {key: 'GS', text: 'Goldman Sachs Group Inc'},
        {key: 'TRVG', text: 'Trivago NV - ADR'},
        {key: 'MSFT', text: 'Microsoft Corporation'}
    ]

  const selectOption = (event, data) => {

    // make api call here
    // something to do with setting the state
    var request = new XMLHttpRequest()

    var ticker_symbol = data.key
    var api_token = "WDfwGuk6Te3Gtjwb5dE55IOeF1EfBsSodusSaC65shAn0TRBgWce25Jb48r4"

    request.open('GET', 'http://api.worldtradingdata.com/api/v1/stock?symbol='+ ticker_symbol + '&api_token='+ api_token, true)
    request.onload = function() {

        // Begin accessing JSON data here
        var data = JSON.parse(this.response)

        if (request.status >= 200 && request.status < 400) {
          data.forEach(movie => {
            console.log(movie.title)
          })
        } else {
            console.log('error')
        }
    }

    request.send()

  };

const Details = () => (

  <div style={{ paddingLeft: 200, paddingRight: 60, paddingTop: 50 }}>

      <Dropdown
        placeholder='Select Company'
        fluid
        search
        selection
        options={companyOptions}
      />

      <Table color='white' key='blue'>
            <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Company</Table.HeaderCell>
                  <Table.HeaderCell>Details</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>

                <Table.Row>
                  <Table.Cell>Name</Table.Cell>
                  <Table.Cell> {{}} </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>Symbol</Table.Cell>
                  <Table.Cell> {{}} </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>Currency</Table.Cell>
                  <Table.Cell> {{}} </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>Price</Table.Cell>
                  <Table.Cell> {{}} </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>Price (Open)</Table.Cell>
                  <Table.Cell> {{}} </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>Day (High)</Table.Cell>
                  <Table.Cell> {{}} </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>Day (Low)</Table.Cell>
                  <Table.Cell> {{}} </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>Volume</Table.Cell>
                  <Table.Cell> {{}} </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>Market Cap</Table.Cell>
                  <Table.Cell> {{}} </Table.Cell>
                </Table.Row>

            </Table.Body>
      </Table>
    </div>
)

export default Details
