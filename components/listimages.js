import { List, Image } from 'semantic-ui-react';
import React from "react";
var Link       = ReactRouterDOM.Link;





const ListExampleImage = () => (
  <List className="col-md-8">

    <List.Item>
      <Image avatar src='/img/profile-pic.jpg' />
      <List.Content>
       <List.Header as='a'>  <Link to="/session">Trail au parc de Saint-Cloud </Link> </List.Header>
        <List.Description> Rejoins Lucas pour sa session jeudi 21 décembre, 17h !</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='/img/fitness-4.jpg' />
      <List.Content>
        <List.Header as='a'>Run & Fun</List.Header>
        <List.Description>Rejoins Robert pour sa session mardi 26 décembre, 19h !</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image className="comment__avatar" avatar src='/img/landing-2.jpg' />
      <List.Content>
        <List.Header as='a'>Course sur voie ferrée</List.Header>
        <List.Description> Rejoins Robert pour sa session mercredi 27 décembre, 8h30 ! </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='/img/fitness-5.jpg' />
      <List.Content>
        <List.Header as='a'>Courir et Mourir</List.Header>
        <List.Description>Rejoins John pour sa session samedi 31 décembre, 23h59 ! </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='/img/profile-pic.jpg' />
      <List.Content>
       <List.Header as='a'>  <Link to="/session">Trail au parc de Saint-Cloud </Link> </List.Header>
        <List.Description> Rejoins Lucas pour sa session jeudi 21 décembre, 17h !</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='/img/fitness-4.jpg' />
      <List.Content>
        <List.Header as='a'>Run & Fun</List.Header>
        <List.Description>Rejoins Robert pour sa session mardi 26 décembre, 19h !</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image className="comment__avatar" avatar src='/img/landing-2.jpg' />
      <List.Content>
        <List.Header as='a'>Course sur voie ferrée</List.Header>
        <List.Description> Rejoins Robert pour sa session mercredi 27 décembre, 8h30 ! </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='/img/fitness-5.jpg' />
      <List.Content>
        <List.Header as='a'>Courir et Mourir</List.Header>
        <List.Description>Rejoins John pour sa session samedi 31 décembre, 23h59 ! </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='/img/profile-pic.jpg' />
      <List.Content>
       <List.Header as='a'>  <Link to="/session">Trail au parc de Saint-Cloud </Link> </List.Header>
        <List.Description> Rejoins Lucas pour sa session jeudi 21 décembre, 17h !</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='/img/fitness-4.jpg' />
      <List.Content>
        <List.Header as='a'>Run & Fun</List.Header>
        <List.Description>Rejoins Robert pour sa session mardi 26 décembre, 19h !</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image className="comment__avatar" avatar src='/img/landing-2.jpg' />
      <List.Content>
        <List.Header as='a'>Course sur voie ferrée</List.Header>
        <List.Description> Rejoins Robert pour sa session mercredi 27 décembre, 8h30 ! </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='/img/fitness-5.jpg' />
      <List.Content>
        <List.Header as='a'>Courir et Mourir</List.Header>
        <List.Description>Rejoins John pour sa session samedi 31 décembre, 23h59 ! </List.Description>
      </List.Content>
    </List.Item>
  </List>
)

export default ListExampleImage;
