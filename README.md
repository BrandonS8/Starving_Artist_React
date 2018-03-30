# Starving Artist
Starving Artist is an app that allows users to upload artwork to sell. It is primarily targeted toward college students in art programs with a focus on the dc area.

Brandon, Hannah, and Mahwish created Starving Artist as our group project at [General Assembly](https://generalassemb.ly/)

## Overview
![preview](https://i.imgur.com/0isy85K.jpg)
When you first [visit the app](putlinktodeployedhere.com) you will see a list of all the stores and a button to make your own at the top right. Feel free to hover over the stores to make them dance.

## Features
* Visit others' stores
* Create your own store
* Delete a store
* View list of a store's products
* View a specific product's details
* Edit a product
* Delete a product

## Technologies We Used
We used the MERN stack for this project.
* MongoDB
* Express.js
* React.js
* Node.js

## How It's Made: The Backend

The backend api is pretty simple with object references and basic models but get's more complicated when you look at handling image uploads. Being the first attempt at this we chose to use [this guide](https://levelup.gitconnected.com/file-upload-with-node-js-react-js-686e342ad7e7) as a resource to learn how to handle them.

Here is the post for /upload that handles the image uploads.
```javascript
router.post('/upload', (req, res, next) => {
  let imageFile = req.files.file

  //put the image file in the public folder, .mv comes from express-fileupload package
  imageFile.mv(`./public/${req.body.filename}.jpg`, function(err) {
    // console.log(path.resolve(`./public/${req.body.filename}.jpg`))
    if (err) {
      return res.status(500).send(err)
    }
    // send the path to the image file in the response to be used on the front end
    res.json({ file: `public/${req.body.filename}.jpg` })
  })
})
```

That's just to upload it, linking the image is just setting it to that file path, that part is handled by the frontend using the response from /upload.

A challenge is deleting the images this needs to happen in the seed, deleting a store, and deleting a product. 

Here's what deleting a product looks like using `fs.unlink`
```javascript

router.delete('/:storeId/:productId', (req, res) => {
  Product.findOneAndRemove({ _id: req.params.productId }).then((product) => {

    //remove image from server if it's not used for seeding
    if (!product.image.includes('seed')) {
      let image = product.image
      let imageNumber = image.split('image')
      fs.unlink(`public/image${imageNumber[1]}`)
    }
    // respond with product removed
    res.json('Product Removed')
  })
    // remove reference to product from store after
})


```

## How It's Made: The Frontend

The front end is displaying data using the backend's api. .........add more


## Future Plans
* Fix for image uploading to server before adding the product
* Add User authentication
* Link stores to user accounts
* Add Shopping Features (Add to Cart, Buy buttons, Remove from store when purchased)



