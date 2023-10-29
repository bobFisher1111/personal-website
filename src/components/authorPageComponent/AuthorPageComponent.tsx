import React from 'react';
import AuthorComponent from '../../components/authorComponents/AuthorComponent';

const AuthorPageComponent: React.FC = () => {
  return (
    <>
      <AuthorComponent
        turOnArticalPage={false}
      />
    </>
  );
};

export default AuthorPageComponent;
