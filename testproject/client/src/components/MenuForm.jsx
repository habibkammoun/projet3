import React from "react";
import { ReactDOM } from "react";
import './styles2.css';
import FormButton from "./FormButton";
import FormCreateAccount from "./FormCreateAccount";

function Menu()
{
       
    return (
        <MenuContainer/>
      )
    }
    
    ///////////////////
    // MenuContainer //
    ///////////////////
    const menuItemsOptions = [
      { text: 'Home' },
      { text: '1ere camera' },
      { text: '2eme camera' },
      { text: 'mixage' },
      { text: 'Contact' },
    ]
    
    function MenuContainer() {
      const [activeItem, setActiveItem] = React.useState('')
      const [activeItemPos, setActiveItemPos] = React.useState(0)
      const [activeItemColor, setActiveItemColor] = React.useState('')
    
      const createClickHandler = (activeItem) => e => {
        e.preventDefault()
    
        setActiveItem(activeItem)
        setActiveItemPos(document.getElementById(activeItem).offsetTop)
        setActiveItemColor(window.getComputedStyle(document.getElementById(activeItem)).getPropertyValue('background-color'))
      }
      
        const menuItems = menuItemsOptions.map(item => <MenuItem item={ item } createClickHandler={ createClickHandler }/>)
                                                   
        return (
          <div className='menu-container'>
            <span className='menu-item--active' style={{ top: activeItemPos, backgroundColor: activeItemColor }}/>
            { menuItems }
          </div>
        )
    }
    
    ///////////////////
    // MenuItem      //
    ///////////////////
    function MenuItem({ createClickHandler, item }) {
      const clickHandler = createClickHandler(item.text)
      
      return (
        <div 
          className='menu-item'
          id={ item.text }
          onClick={ clickHandler }
        >
          { item.text.toUpperCase() }
        </div>
      )
      
    }

    export default Menu;
    
    
    

    
    