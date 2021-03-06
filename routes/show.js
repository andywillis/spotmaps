// Show page

exports = module.exports = show;

function show(app) {

  /*
   * Picks the correct film from the library based on the id in the url query
   * and renders the html.
   */

  return function show(req, res) {

    var library = app.library
      , core = require('../lib/core/core')
      , url = core.getUrlObj(req), obj = {}
      , data = core.jsonPath(library, '$..films[?(@.id===' + url.query.id + ')]')[0]
      ;

    res.render('show', {menu: app.library.menu, title: data.title, year: data.year });
  };

}