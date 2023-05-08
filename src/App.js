import React from 'react';
import MemberListShow from './components/MemberListShow';
import NavBar from './components/NavBar';

const App = () => {

     const members = [
          {
              id:1,
              firstname:'Daniel',
              lastname:'Abdala',
              DOB:"1986-08-22",
              phone:"813-992-3920",
              address1:"2166 Broadway View Ave",
              address2:"around",
              city:"Tampa",
              state:"FL",
              zipcode:"33510",
              isMember:true},
          {
              id:2,
              firstname:'Melisa',
              lastname:'Anchique',
              DOB:'1989-10-31',
              phone:"813-992-3920",
              address1:"2166 Broadway View Ave",
              address2:"around",
              city:"Tampa",
              state:"FL",
              zipcode:"33510",
              isMember:true
          },
          {
              id:3,
              firstname:'Elmer',
              lastname:'Cruz',
              DOB:'2004-06-31',
              phone:'813-992-3920',
              address1:"The ghetto",
              address2:"around",
              city:"Tampa",
              state:"FL",
              zipcode:"33510",
              isMember:true
          },
          {
              id:4,
              firstname:'Laura',
              lastname:'Anchique',
              DOB:'1993-06-31',
              phone:'813-992-3920',
              address1:"Seattle",
              address2:"around",
              city:"Tampa",
              state:"FL",
              zipcode:"33510",
              isMember:true
          },

      ]
       
     return (
     <>
        <NavBar/>
        <MemberListShow members={members}/>
     </>
     )
}

export default App;