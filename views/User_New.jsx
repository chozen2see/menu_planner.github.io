const React = require('react');
const AppLayout = require('./AppLayout');

class User_New extends React.Component {
  render() {
    // const { user } = this.props;

    // render method must return something...
    return (
      <AppLayout currentUser={''}>
        <div className='container'>
          {/* USER PANEL */}
          <div className='user_container'>
            <div className='user_top'>
              <div className='user_title'>
                <h2>Add New User Profile</h2>
              </div>
            </div>
            <form action={`/user`} method='POST'>
              {/* NOTE: the form is pre-populated with values for the server */}
              <div className='user_info w3-container'>
                <p className='w3-container'>
                  User Name: <input type='text' name='name' id='name' />
                </p>
                <p className='w3-container'>
                  Height: <input type='text' name='height' id='height' />
                </p>
                <p className='w3-container'>
                  Starting Weight:{' '}
                  <input
                    type='text'
                    name='startingWeight'
                    id='startingWeight'
                  />
                </p>
                <p className='w3-container'>
                  Current Weight:{' '}
                  <input type='text' name='currentWeight' id='currentWeight' />
                </p>
                <p className='w3-container'>
                  Goal Weight:{' '}
                  <input type='text' name='goalWeight' id='goalWeight' />
                </p>
                <input
                  type='hidden'
                  name='blueprint'
                  id='blueprint'
                  value='5eb4eeedceedff0c9b5a53af'
                />
                <input
                  type='hidden'
                  name='activeSession'
                  id='activeSession'
                  value='false'
                />
              </div>
              <div className='btn_group'>
                <input
                  type='submit'
                  name=''
                  defaultValue='SAVE CHANGES'
                  className='btn_user w3-border w3-round-large'
                />
              </div>
            </form>
          </div>
        </div>
      </AppLayout>
    );
  }
}

module.exports = User_New;
