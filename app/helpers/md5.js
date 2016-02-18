import Ember from 'ember';
import CryptoJS from "npm:crypto-js";

const { MD5 } = CryptoJS;

export function md5(params/*, hash*/) {
  return MD5(params[0]);
}

export default Ember.Helper.helper(md5);
