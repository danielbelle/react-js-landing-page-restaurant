import React, { useState } from 'react'
import Logo from '../Assets/Logo.svg'
import { BsCart2 } from "react-icons/bs"
import { HiOutlineBars3 } from "react-icons/hi2"
import { Box, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText, List } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"
import CommentRoundedIcon from "@mui/icons-material/CommentRounded"
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded"
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded"
import { Link } from 'react-scroll'


const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Início",
      to: "home",
      icon: <HomeIcon />
    },
    {
      text: "Sobre",
      to: "about",
      icon: <InfoIcon />
    },
    {
      text: "Como Funciona",
      to: "work",
      icon: <AppRegistrationIcon />
    },
    {
      text: "Depoimentos",
      to: "testimonials",
      icon: <CommentRoundedIcon />
    },
    {
      text: "Contato",
      to: "contact",
      icon: <PhoneRoundedIcon />
    },
    {
      text: "Carrinho de Compras",
      to: "contact",
      icon: <ShoppingCartRoundedIcon />
    }
  ]

  return <nav>
    <div className='nav-logo-container'>
      <img src={Logo} alt=''></img>
    </div>
    <div className='navbar-links-container'>
      <Link to='home' spy={true} smooth={true} offset={0} duration={500}>Início</Link>
      <Link to='about' spy={true} smooth={true} offset={0} duration={500}>Sobre</Link>
      <Link to='work' spy={true} smooth={true} offset={0} duration={500}>Como Funciona</Link>
      <Link to='testimonials' spy={true} smooth={true} offset={0} duration={500}>Depoimentos</Link>
      <Link to='contact' spy={true} smooth={true} offset={0} duration={500}>Contato</Link>
      <Link to=''>
        <BsCart2 className='navbar-cart-icon' />
      </Link>
      <Link to='contact' spy={true} smooth={true} offset={0} duration={500}>
        <button className='primary-button'>Reservar Agora</button>
      </Link>
    </div>
    <div className='navbar-menu-container'>
      <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
    </div>
    <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor='right'>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={() => setOpenMenu(false)}
        onKeyDown={() => setOpenMenu(false)}
      >
        <List>
          {menuOptions.map((item) => (
            <Link to={(item.to)} spy={true} smooth={true} offset={0} duration={500}>
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>

    </Drawer>
  </nav>
}
export default Navbar;