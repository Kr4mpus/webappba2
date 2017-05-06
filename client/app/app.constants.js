'use strict';

import angular from 'angular';

export default angular.module('webappba2App.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
