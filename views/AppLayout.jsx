const React = require('react');

class AppLayout extends React.Component {
  render() {
    // const id =
    //   this.props.currentUser._id !== undefined
    //     ? this.props.currentUser._id
    //     : '5eacca26965eadc463792723';

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
            {/* <img
              src='/images/logo.png'
              alt='Mongoose Store Logo'
              className='logo'
            />
            <p className='greeting'>Welcome, {username}!</p> */}
            <h2>{username} Menu Planner</h2>
            <nav>
              {/* <a href='/meal/new'>Create Meal</a>*/}
              <a href='/user/new'>New User</a>
              <a href={`/user/menu_planner/${this.props.currentUser.id}`}>
                View Menu Planner
              </a>
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
