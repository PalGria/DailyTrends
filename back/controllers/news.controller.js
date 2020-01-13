const News = require('../models/news.js');
const newsCtrl = {};
newsCtrl.getNews = async (req, res) =>{
    const news = await News.find().sort('title');
    res.json(news);
}
newsCtrl.createNews = async (req, res) =>{
    const news = new Plato({
        title: req.body.title,
        body: req.body.body,
        image: req.body.image,
        source: req.body.source,
        publisher: req.body.publisher,
    });
   await news.save();
    res.json({
        'status': 'Saved new',
        news : news
    });
}

newsCtrl.getNews = async (req, res) =>{
    console.log(req.params);
    const news = await New.findById(req.params.id);
    res.json(news);
}
newsCtrl.editNew = async (req, res) =>{
    //console.log(req);
    const {id} = req.params;
    let filename = undefined;
    let precioOrigin = utils.parseFloat(req.body.precio);
    console.log(id);
    let news = {
        body: req.body.body,
    };

    await News.findByIdAndUpdate(id, {$set:news}, {new: true});
    res.json({
        status: 'Updated new'
    });
}
newsCtrl.deleteNews = async (req, res) =>{
    await News.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Deleted new'
    });

}

module.exports = newsCtrl;