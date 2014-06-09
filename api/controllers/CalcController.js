/**
 * CalcController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    
  calcule: function(req, res) {
		var number1 = req.param("number1");
		var number2 = req.param("number2");
		var operation = req.param("operation");

		if (!number1) return res.json({error: "Parameter \'number1\' missing"}, 400);
		if (!number2) return res.send(400, "Parameter \'number2\' missing");
		if (!operation) return res.json({error: "Parameter \'operation\' missing"}, 400);
    
    switch (operation) {
      case 'add':
      	return res.json(parseFloat(number1) + parseFloat(number2));
      	break;
      case 'sub':
      	return res.json(number1 - number2);
        break;
      case 'mlt':
        return res.json(number1 * number2);
        break;
      case 'div':
      	return res.json(number1 + number2);
        break;
      default:
      	return res.json(0);
    }

  }


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to CalcController)
  _config: {}
   */

  
};
