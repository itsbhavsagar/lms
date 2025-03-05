import React from 'react';
import { Button } from '@/components/ui/button';

const AuthButtons = ({ onLogin, onSignUp }) => (
  <div className="grid grid-cols-2 gap-4 mt-4">
    <Button variant="outline" onClick={onLogin} aria-label="Login">
      Login
    </Button>
    <Button onClick={onSignUp} aria-label="Sign Up">
      Sign Up
    </Button>
  </div>
);

export default AuthButtons;
