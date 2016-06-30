import  React from 'react';
import ReactDOM from 'react-dom' ;
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import HomeLayout  from '../components/pages/HomeLayout';
import Login from '../components/pages/Login';
import Dashboard from '../components/pages/Dashboard';
import Folders from '../components/Folders';
import Upload from '../components/Upload';
import Photos from '../components/Photos';
import EditImage from '../components/EditImage';
import Folder from '../components/Folder';

var index = $('#index').val();
var Home = HomeLayout;
var FirstPage = Login
if(index == 'Dashboard'){
  Home = Dashboard;
  FirstPage = Folders
}


ReactDOM.render(
   <Router history={hashHistory}>
        <Route path="/" component={ Home }>
            <IndexRoute component={ FirstPage } />
            <Route path="upload" component={ Upload } />
            <Route path="photos" component={ Photos } />
            <Route path="edit" component={ EditImage } />
            <Route path="folder" component={ Folder } />
        </Route>
    </Router>,
  document.getElementById('app')
);