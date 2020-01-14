import React, {Component} from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import Compare from './Compare'
import Trends from './Trends'
import Home from './Home'
import About from './About'
import Details from './Details'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ReactDOM from 'react-dom';

class Analytics extends Component {

    displayHome(e,d){
          console.log("displaying home")
          ReactDOM.render(<Home />, document.getElementById('display'));
    }

    displayDetails(e,d){
          console.log("displaying details")
          ReactDOM.render(<Details />, document.getElementById('display'));
    }

    displayCompare(e,d){
          console.log("displaying compare")
          ReactDOM.render(<Compare />, document.getElementById('display'));
    }

    displayTrends(e,d){
          console.log("displaying trends")
          ReactDOM.render(<Trends />, document.getElementById('display'));
    }

    displayAbout(e,d){
          console.log("displaying about")
          ReactDOM.render(<About />, document.getElementById('display'));
    }

    render() {
      return (

        <div style = {{height:"100vh"}}>

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

            <Menu.Item as='a' onClick={this.displayDetails}>
              <Icon name='clipboard outline' />
              Details
            </Menu.Item>

            <Menu.Item as='a' onClick={this.displayCompare}>
              <Icon name='balance scale' />
              Compare
            </Menu.Item>

            <Menu.Item as='a' onClick={this.displayTrends}>
              <Icon name='chart line' />
              Trends
            </Menu.Item>

            <Menu.Item as='a' onClick={this.displayAbout}>
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

        </div>
      );
    }
}


export default Analytics
