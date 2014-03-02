
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { 
    'title': 'mapny',
    'currMap': !req.param('map')? '': req.param('map'),
    'currZoom': !req.param('zoom')? '': req.param('zoom'),
    'currLat': !req.param('lat')? '': req.param('lat'),
    'currLng': !req.param('lng')? '': req.param('lng'),
  });
};

exports.indexFull = function(req, res){
  res.render('index', { 
    'title': 'mapny', 
    'currMap': req.param('map'),
    'currZoom': req.param('zoom'),
    'currLat': req.param('lat'),
    'currLng': req.param('lng'),
  });
};
