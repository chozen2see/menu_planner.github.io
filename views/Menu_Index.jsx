const React = require('react');
const AppLayout = require('./AppLayout');
import { nameByAlpha } from '../utilities/utils.js';

class Menu_Index extends React.Component {
  render() {
    const { user, menu } = this.props;
    if (menu) menu.sort(nameByAlpha);

    // render method must return something...
    return (
      <AppLayout currentUser={user}>
        <div className='container'>
          <div className='menu_title'>
            <h2>All Menus</h2>
          </div>
          <div className='list_all'>
            {menu.map((menuItem, index) => {
              return (
                <a href={`/menu/${menuItem.id}`} className='menu_list_link'>
                  <div
                    className={`card w3-card w3-hover-shadow card_menu_item`}
                  >
                    <p className='menu_list_name w3-container'>
                      {menuItem.name}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </AppLayout>
    );
  }
}

module.exports = Menu_Index;
