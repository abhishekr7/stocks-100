import React, {Component} from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import Platforms from '../charts/Platforms'
import Investors from '../charts/Investors'
import Volume from '../charts/Volume'
import Home from '../Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ReactDOM from 'react-dom';

class SideBarComponent extends Component {

    displayHome(e,d){
          console.log("displaying platforms")
          ReactDOM.render(<Home />, document.getElementById('display'));
    }

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

          <Menu.Item as='a' onClick={this.displayHome}>
            <Icon name='home' />
            Home
          </Menu.Item>

            <Menu.Item as='a' onClick={this.displayPlatforms}>
              <Icon name='clipboard outline' />
              Details
            </Menu.Item>

            <Menu.Item as='a' onClick={this.displayInvestors}>
              <Icon name='balance scale' />
              Compare
            </Menu.Item>

            <Menu.Item as='a' onClick={this.displayVolume}>
              <Icon name='chart line' />
              Trends
            </Menu.Item>

            <Menu.Item as='a' onClick={this.displayVolume}>
              <Icon name='rupee sign' />
              Forex
            </Menu.Item>

            <Menu.Item as='a' onClick={this.displayVolume}>
              <Icon name='trophy' />
              Commodities
            </Menu.Item>

            <Menu.Item as='a' onClick={this.displayVolume}>
              <Icon name='info' />
              About Us
            </Menu.Item>

          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>

                <div id="display">
                    <Home />
                </div>

            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      );
    }
}


export default SideBarComponent
