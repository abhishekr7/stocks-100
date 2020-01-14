import React, {Component} from 'react'
import { Table } from 'semantic-ui-react'
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

class Details extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'Stocks Wala',
            symbol: 'STWL',
            currency: '0',
            price: '0',
            priceOpen: '0',
            dayHigh: '0',
            dayLow: '0',
            volume: '0',
            marketCap: '0'
        };
    }

    handleSelectOption(event, data){

        // get a single doc
        db.collection("stocksData").doc(data.value).get().then(doc => {
            const company = doc.data();
            console.log(data);
            console.log(this);

            this.setState({
                name: company.name,
                symbol: company.ticker,
                currency: company.currency,
                price: company.price,
                priceOpen: company.open,
                dayHigh: company.high,
                dayLow: company.low,
                volume: company.volume,
                marketCap: company.market
            });

        })

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
                onChange={this.handleSelectOption.bind(this)}
              />

              <Table fixed>
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
