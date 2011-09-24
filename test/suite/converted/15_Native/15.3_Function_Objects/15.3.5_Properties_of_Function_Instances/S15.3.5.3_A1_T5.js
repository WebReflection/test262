// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Assume F is a Function object. When the [[HasInstance]] method of F is called with value V, the following steps are taken: i) If V is not an object, return false
 *
 * @path 15_Native/15.3_Function_Objects/15.3.5_Properties_of_Function_Instances/S15.3.5.3_A1_T5.js
 * @description V is void 0
 */

FACTORY = Function("name","this.name=name;");

//CHECK#1
if ((void 0 instanceof  FACTORY)!==false) {
  $ERROR('#1: Assume F is a Function object. When the [[HasInstance]] method of F is called with value V, the following steps are taken: i) If V is not an object, return false');
}
