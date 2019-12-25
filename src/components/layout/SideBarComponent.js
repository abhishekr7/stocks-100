import React, {Component} from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import Platforms from '../charts/Platforms'
import Investors from '../charts/Investors'
import Volume from '../charts/Volume'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ReactDOM from 'react-dom';

class SideBarComponent extends Component {

    displayPlatforms(e,d){
          console.log("displaying platforms")
          ReactDOM.render(<Platforms />, document.getElementById('display'));
    }

    displayInvestors(e,d){
          console.log("displaying investors")
          ReactDOM.render(<Investors />, document.getElementById('display'));
    }

    displayVolume(e,d){
          console.log("displaying volume")
          ReactDOM.render(<Volume />, document.getElementById('display'));
    }

    render() {
      return (
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            vertical
            visible
            width='thin'
          >
            <Menu.Item as='a' onClick={this.displayPlatforms}>
              <Icon name='chart pie' />
              Platforms
            </Menu.Item>
            <Menu.Item as='a' onClick={this.displayInvestors}>
              <Icon name='chart bar' />
              Investors
            </Menu.Item>
            <Menu.Item as='a' onClick={this.displayVolume}>
              <Icon name='chart line' />
              Volume Trend
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              <Header as='h3' style={{paddingLeft : 100}}>Metrics</Header>

                <div id="display">
                    <Platforms />
                </div>

            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      );
    }
}


export default SideBarComponent
