const React = require('react');

class AppLayout extends React.Component {
  render() {
    // const id =
    //   this.props.currentUser._id !== undefined
    //     ? this.props.currentUser._id
    //     : '5eacca26965eadc463792723';

    // const username =
    //   this.props.currentUser.username !== undefined
    //     ? this.props.currentUser.username.charAt(0).toUpperCase() +
    //       this.props.currentUser.username.slice(1)
    //     : 'New User';

    return (
      <html>
        <head>
          <link
            rel='stylesheet'
            href='https://www.w3schools.com/w3css/4/w3.css'
          />
          <link rel='stylesheet' href='/css/app.css' />

          {/* <script src='/js/functions.js'></script> */}
          <title>Menu Planner</title>
        </head>
        <body>
          {/* <header>
            <img
              src='/images/logo.png'
              alt='Mongoose Store Logo'
              className='logo'
            />
            <p className='greeting'>Welcome, {username}!</p>
          </header>
          <nav>
            <a href='/store'>Shop</a>
            <a href='/product/new'>Add New Product</a>
            <a href={`/user/${id}`}>View Cart</a>
          </nav> */}
          <br />
          <div className='wrapper'>{this.props.children}</div>
          <footer>
            <p className='copyright'>Copyright Menu Planner &copy; 2020</p>
          </footer>
        </body>
      </html>
    );
  }
}

module.exports = AppLayout;
