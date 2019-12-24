import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import Platforms from '../charts/Platforms'

const SideBarComponent = () => (
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
      <Menu.Item as='a'>
        <Icon name='chart pie' />
        Platforms
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='chart bar' />
        Investors
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='chart line' />
        Volume Trend
      </Menu.Item>
    </Sidebar>

    <Sidebar.Pusher>
      <Segment basic>
        <Header as='h3' style={{paddingLeft : 100}}>Metrics</Header>
        <Platforms />
      </Segment>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
)

export default SideBarComponent
