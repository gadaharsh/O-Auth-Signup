import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton';

const SocialSignInButtons = () => {

    const onSignInGoogle = () => {
        console.warn("Sign In with Google");
      };
      
      const onSignInFacebook = () => {
        console.warn("Sign In with Facebook");
      };
      
      const onSignInGithub = () => {
        console.warn("Sign In with Github");
      };

  return (
    <>
      <CustomButton
        onPress={onSignInGoogle}
        text="Sign In with Google"
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton
        onPress={onSignInFacebook}
        text="Sign In with Facebook"
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton
        onPress={onSignInGithub}
        text="Sign In with Github"
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </>
  )
}

export default SocialSignInButtons