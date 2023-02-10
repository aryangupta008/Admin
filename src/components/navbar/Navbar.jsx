import "./navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." Style="border: none; outline:none; background: transparent"  />
          <SearchIcon/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icons"/>
            English
          </div>
          <div className="item">
            <DarkModeIcon className="icons"/>
          </div>
          <div className="item">
            <FullscreenExitIcon className="icons"/>
          </div>
          <div className="item">
            <NotificationsNoneIcon className="icons"/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon className="icons"/>
            <div className="counter">2</div>
          </div>
          <div className="item">
          <ListIcon className="icons"/>
          </div>
          <div className="item">
          <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80" alt=" " className="avtar"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar