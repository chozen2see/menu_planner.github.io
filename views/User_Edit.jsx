const React = require('react');
const AppLayout = require('./AppLayout');

class User_Edit extends React.Component {
  render() {
    const { user } = this.props;

    // render method must return something...
    return (
      <AppLayout currentUser={user}>
        <div className='container'>
          {/* USER PANEL */}
          <div className='user_container'>
            <div className='user_top'>
              <div className='user_title'>
                <h2>User Profile</h2>
              </div>
              <div className='user_photo'>
                <p>
                  <img
                    src='../../images/user-orange.png'
                    alt='User Icon'
                    className='userImage'
                  />
                </p>
              </div>
            </div>
            <form action={`/user/${user.id}?_method=PUT`} method='post'>
              {/* NOTE: the form is pre-populated with values for the server */}
              <div className='user_info w3-container'>
                <p className='w3-container'>
                  User Name:{' '}
                  <input
                    type='text'
                    name='name'
                    id='name'
                    defaultValue={user.name}
                  />
                </p>
                <p className='w3-container'>
                  Height:{' '}
                  <input
                    type='text'
                    name='height'
                    id='height'
                    defaultValue={user.height}
                  />
                </p>
                <p className='w3-container'>
                  Starting Weight: {user.startingWeight}
                </p>
                <p className='w3-container'>
                  Current Weight:{' '}
                  <input
                    type='text'
                    name='currentWeight'
                    id='currentWeight'
                    defaultValue={user.currentWeight}
                  />
                </p>
                <p className='w3-container'>
                  Goal Weight:{' '}
                  <input
                    type='text'
                    name='goalWeight'
                    id='goalWeight'
                    defaultValue={user.goalWeight}
                  />
                </p>
                <p className='w3-container'>
                  Body Type: {user.blueprint.body_type.alias} (
                  {user.blueprint.body_type.name})
                </p>
              </div>
              <div className='btn_group'>
                <input
                  type='submit'
                  name=''
                  defaultValue='SAVE CHANGES'
                  className='btn_user w3-border w3-round-large'
                />
                <form action={`/user/${user.id}?_method=DELETE`} method='post'>
                  {/* <form action=''> */}
                  <input
                    type='submit'
                    value='DELETE'
                    className='btn_user w3-border w3-round-large'
                  />
                </form>
              </div>
            </form>
          </div>
        </div>
      </AppLayout>
    );
  }
}

module.exports = User_Edit;
