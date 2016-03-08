import Ember from 'ember';
import _md5 from "npm:blueimp-md5";

export function md5(params/*, hash*/) {
  return _md5(params[0]);
}

export default Ember.Helper.helper(md5);
