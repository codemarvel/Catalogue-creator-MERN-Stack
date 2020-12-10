let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Student Model
let productSchema = require('../models/product');

// CREATE Student
router.route('/create-product').post((req, res, next) => {
  productSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
}); 

// READ Students
router.route('/').get((req, res) => {
  //console.log(req.query.category);
  var cate=req.query.category;
  if(cate)
  {
    productSchema.find({category:cate},(error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  }) 
 }
 else
 {
  productSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  }) 

 }
})
/*
router.route('/:category').get((req, res) => {
  console.log(req.query.category);
  studentSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
*/
// Get Single Student
router.route('/edit-product/:id').get((req, res) => {
  productSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Student
router.route('/update-product/:id').put((req, res, next) => {
  productSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Product updated successfully !')
    }
  })
})

// Delete Student
router.route('/delete-product/:id').delete((req, res, next) => {
  productSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;