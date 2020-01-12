import React, {Component} from 'react'
import { Table } from 'semantic-ui-react'
import { Dropdown } from 'semantic-ui-react'

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

const onChange = (event, data) => {

        // make api call here
        // something to do with setting the state

        var ticker_symbol = data.value
        var api_token = 'WDfwGuk6Te3Gtjwb5dE55IOeF1EfBsSodusSaC65shAn0TRBgWce25Jb48r4'
        var source = 'http://api.worldtradingdata.com/api/v1/stock?symbol='+ ticker_symbol + '&api_token='+ api_token

        //const request = require('request');

        /*
        request(source, { json: true }, (err, res, body) => {

              console.log(source);

              if (err) {
                 console.log(err);
              }
              console.log(res);
              console.log(body);
              console.log(err);
        });
        */

  };

class Details extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'Stocks Wala',
            symbol: 'STO',
            currency: 'INR',
            price: '0',
            priceOpen: '0',
            dayHigh: '0',
            dayLow: '0',
            volume: '0',
            marketCap: '0'
        };
    }

    render(){
      return(
          <div style={{ paddingLeft: 200, paddingRight: 60, paddingTop: 50 }}>

              <Dropdown
                placeholder='Select Company'
                fluid
                search
                selection
                options={companyOptions}
                onChange={onChange}
              />

              <Table>
                    <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell>Company</Table.HeaderCell>
                          <Table.HeaderCell>Details</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>

                        <Table.Row>
                          <Table.Cell>Name</Table.Cell>
                          <Table.Cell>{this.state.name}</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                          <Table.Cell>Symbol</Table.Cell>
                          <Table.Cell>{this.state.symbol}</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                          <Table.Cell>Currency</Table.Cell>
                          <Table.Cell>{this.state.currency}</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                          <Table.Cell>Price</Table.Cell>
                          <Table.Cell>{this.state.price}</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                          <Table.Cell>Price Open</Table.Cell>
                          <Table.Cell>{this.state.priceOpen}</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                          <Table.Cell>Day High</Table.Cell>
                          <Table.Cell>{this.state.dayHigh}</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                          <Table.Cell>Day Low</Table.Cell>
                          <Table.Cell>{this.state.dayLow}</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                          <Table.Cell>Volume</Table.Cell>
                          <Table.Cell>{this.state.volume}</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                          <Table.Cell>Market Cap</Table.Cell>
                          <Table.Cell>{this.state.marketCap}</Table.Cell>
                        </Table.Row>

                    </Table.Body>
              </Table>
          </div>
      )
    }
}

export default Details
