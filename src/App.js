import React from 'react';
import MemberList from './components/MemberList';
import NavBar from './components/NavBar';

const App = () => {

     const members = [
          {
              id:1,
              firstname:'Daniel',
              lastname:'Abdala',
              DOB:"1986-08-22",
              phone:"813-992-3920",
              address:"2166 Broadway View Ave",
              isMember:true},
          {
              id:2,
              firstname:'Melisa',
              lastname:'Anchique',
              DOB:'1989-10-31',
              phone:"813-992-3920",
              address:"2166 Broadway View Ave",
              isMember:true
          },
          {
              id:3,
              firstname:'Elmer',
              lastname:'Cruz',
              DOB:'2004-06-31',
              phone:'813-992-3920',
              address:"The ghetto",
              isMember:true
          },
      ]
       
     return (
     <>
        <NavBar/>
        <MemberList members={members}/>
     </>
     )
}

export default App;