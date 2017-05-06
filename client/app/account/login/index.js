'use strict';

import angular from 'angular';
import LoginController from './login.controller';

export default angular.module('webappba2App.login', [])
  .controller('LoginController', LoginController)
  .name;
