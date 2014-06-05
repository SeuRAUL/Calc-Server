/**
 * Calc
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs    :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    number1: {
      type: 'float', 
      defaultsTo: 0, 
      number: true
    },
    number2:{ 
      type: 'float', 
      defaultsTo: 0, 
      number: true 
    },
    operation: { 
      type: 'string', 
      required: true 
    }
  }

};
