import  React from 'react';
import {Link} from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import {firebase} from '../../../firebase';

const AdminNav= () => {

    const links = [
        {
            title:'Matches',
            linkto:'/admin_matches'
        },
        {
            title:'Add Match',
            linkto:'/admin_matches/edit_match'
        },
        {
            title:'Players',
            linkto:'/admin_players'
        },
        {
            title:'Add Players',
            linkto:'/admin_players/add_player'
        }
            
    ]

    const style = {
        color:'#ffffff',
        fontWeight:'300',
        borderBottom:'1px solid #353535'
    }


    const renderItems = () => (
        links.map(link => (
            <Link to={link.linkto} key={link.title}>
                <ListItem button style={style}>
                    {link.title}
                </ListItem>
            </Link>
        ))
    )

    const logoutHandler = () => {
        firebase.auth().signOut().then(()=>{
            console.log('Sign out successfully')
        },(error)=>{
            console.log('Error logging out')
        })
    }

    return (
        <div>
           {renderItems()} 
           <ListItem style={style} onClick={()=>logoutHandler()}>
               Log Out
           </ListItem>
        </div>
    );
};

export default AdminNav;