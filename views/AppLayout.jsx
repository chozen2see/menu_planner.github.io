const React = require('react');

class AppLayout extends React.Component {
  render() {
    const id = this.props.currentUser.id;
    const showSwitch = this.props.currentUser.showSwitch;
    const filteredUsers = this.props.currentUser.filteredUsers;

    const username =
      this.props.currentUser.name !== undefined
        ? this.props.currentUser.name.charAt(0).toUpperCase() +
          this.props.currentUser.name.slice(1)
        : 'New User';

    return (
      <html>
        <head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link
            rel='stylesheet'
            href='https://www.w3schools.com/w3css/4/w3.css'
          />
          <link rel='stylesheet' href='/css/app.css' />

          <title>Menu Planner</title>
        </head>
        <body>
          <header>
            <div className='pageHeader'>
              <h2>{username} Menu Planner</h2>

              {/* ? - IF CLICKED SWITCH USER PANEL IS DISPLAYED */}
              <div className={`tooltip ${showSwitch === true ? 'hidden' : ''}`}>
                <form action={`/user/menu_planner/${id}`} method='get'>
                  <input
                    type='submit'
                    value='?'
                    className='w3-circle switchAccountsBtn tooltip'
                    name='showSwitch'
                  />
                </form>
                <span className='tooltiptext'>Open Switch User Panel</span>
              </div>
            </div>

            {/* SWITCH USER PANEL */}
            <div
              className={`select_user ${showSwitch === true ? '' : 'hidden'}`}
            >
              <form action={`/user/switch/${id}`} method='get'>
                <select
                  className='user_selection'
                  id='user_selection'
                  name='userToken'
                >
                  {filteredUsers
                    ? filteredUsers.map((user) => {
                        return (
                          <option
                            // selected={id === user.id ? 'true' : ''}
                            value={`${user.id}`}
                          >
                            {user.name}
                          </option>
                        );
                      })
                    : ''}

                  {/* <option
                    selected={id === '5eb685e8a94be9389e27c782' ? 'true' : ''}
                    value='5eb685e8a94be9389e27c782'
                  >
                    TestUser
                  </option> */}
                </select>
                <input type='submit' value='Switch User' />
              </form>

              {/* X - IF CLICKED SWITCH USER PANEL IS CLOSED */}
              <div className={`tooltip ${showSwitch === true ? '' : 'hidden'}`}>
                <form action={`/user/menu_planner/${id}`} method='get'>
                  <input
                    type='submit'
                    value='X'
                    className='w3-circle switchAccountsBtn tooltip'
                    name='showSwitch'
                  />
                </form>
                <span className='tooltiptext'>Close User Switch Panel</span>
              </div>
            </div>

            <nav>
              <a href='/user/new'>New User</a>
              <a href={`/user/menu_planner/${id}`}>View Menu Planner</a>
            </nav>
          </header>
          <div className='wrapper'>{this.props.children}</div>
          <footer>
            <p className='copyright'>Copyright Menu Planner &copy; 2020</p>
          </footer>
          {/* <script src='../js/app.js'></script> */}
        </body>
      </html>
    );
  }
}

module.exports = AppLayout;
