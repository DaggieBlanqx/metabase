"use strict";

import 'babel/polyfill';

// angular:
import 'angular';
import 'angular-cookies';
import 'angular-resource';
import 'angular-route';
import 'angular-sanitize';

// angular 3rd-party:
import 'angular-cookie';
import 'angular-http-auth'; // currently pulled from unofficial fork: https://github.com/witoldsz/angular-http-auth/pull/100
import 'angular-ui-bootstrap';

// ace:
import 'angular-ui-ace';
import 'ace/ace';
import 'ace/ext-language_tools';
import 'ace/mode-sql';
import 'ace/snippets/sql';

// react:
import React from 'react/addons';
window.React = React;
