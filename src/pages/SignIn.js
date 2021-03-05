import React from 'react';
import { Alert, Button, Col, Container, Grid, Icon, Panel, Row } from 'rsuite';
import background from './backgroundSignIn.jpg';

// in Rsuite Grid it is just like bootstrap but instead of having  12 columns it has 24 columns
const SignIn = () => {
  const signInWithProvider = async provider => {
    try {
      const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

      if (additionalUserInfo.isNewUser) {
        await database.ref(`/profiles/${user.uid}`).set({
          name: user.displayName,
          createdAt: firebase.database.ServerValue.TIMESTAMP,
        });
      }

      Alert.success('Signed in', 4000);
    } catch (err) {
      Alert.error(err.message, 4000);
    }
  };

  const onFaceBookSignIn = () => {
    signInWithProvider(new firebase.auth.FacebookAuthProvider());
  };

  const onGoogleBookSignIn = () => {
    signInWithProvider(new firebase.auth.GoogleAuthProvider());
  };

  return (
    <Container
      style={{
        backgroundImage: `url(${background})`,
        ' background-repeat': 'no-repeat',
        'background-size': 'cover',
        'background-position': 'center center',
        'background-attatchment': 'fixed',
      }}
    >
      <Grid className="mt-page">
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel className="text-center">
              <h2
                style={{
                  color: 'lightgrey',
                  'font-family': 'Euphoria Script, cursive',
                  'font-size': '50px',
                }}
              >
                Welcome to Smart Shoping
              </h2>
              <p
                style={{
                  color: 'lightgrey',
                  'font-family': 'Srisakdi, cursive',
                  'font-size': '25px',
                }}
              >
                Find The Best Gaming Products Here
              </p>

              <div className="mt-3">
                <Button block color="blue" onClick={onFaceBookSignIn}>
                  <Icon Icon="facebook" />
                  Continue with Facebook
                </Button>

                <Button block color="green" onClick={onGoogleBookSignIn}>
                  <Icon Icon="google" />
                  Continue with Google
                </Button>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default SignIn;
