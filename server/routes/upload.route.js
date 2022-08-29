import express  from "express";
import Multer from '../middleware/multer-config.js';
import Multer_Video from '../middleware/multerVideo-config.js';
import Video from "../models/video.js";
import Photo from "../models/photo.js";
import fs from 'fs';
import mongoose from "mongoose";

// import cardController from '../controllers/card.controller.js';
const router = express.Router();



/// photo routes 


router.get('/upload',(req,res,next) => {
    Photo.find()
    .then((data) => res.status(200).json(data))
    .catch((err) => console.log(err))
} )

router.get('/upload/:id', (req, res, next) => {
    Photo.findOne({
      _id: req.params.id
    }).then(
      (photo) => {
        res.status(200).json(photo);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  });





router.post('/upload', Multer, (req,res,next) => {
  const photo = new Photo({
      ...req.body,
      imageUrl: `${req.protocol}://${req.get('host')}/assets/images/${req.file.filename}`
  })
  photo.save()
  .then(
    () => {
      res.status(201).json({ message: 'Objet enregistré !'})
      console.log(req.file)
    })
  .catch(error => console.log(error.response) );

})


router.delete('/upload/:id',(req,res,next) => {
  Photo.findOne({_id: req.params.id})
  .then(photo => {
      const filename = photo.imageUrl.split('/images/')[1]
      fs.unlink(`assets/images/${filename}`, () => {
        Photo.deleteOne({_id: req.params.id})
        .then(() => {
            res.status(200).json({message:"Objet supprimé !"})
        })
        .catch(error => {
            res.status(400).json({error})
        })
      }) 
      res.status(200).json({message:"Objet supprimé !"})
  })
  .catch(error => {
      res.status(400).json({error: error.stack})
  })
})


router.patch('/upload/:id',Multer, (req,res,next) => {
    const photoObject = req.file ? {
         ...req.body,
       imageUrl: `${req.protocol}://${req.get('host')}/assets/images/${req.file.filename}`
  } : { ...req.body };
  Photo.updateOne(
    {_id: req.params.id}, {
            ...photoObject})
    .then(() => {
         res.status(200).json({message:'Objet Modifié !'})
          })
    .catch(error => {
        res.status(400).json({error})
         })
})


/// video routes 

router.get('/upload_video',(req,res,next) => {
  Video.find()
  .then((data) => res.status(200).json(data))
  .catch((err) => console.log(err))
} )



router.get('/upload_Video/:id', (req, res, next) => {
  Video.findOne({
    _id: req.params.id
  }).then(
    (video) => {
      res.status(200).json(video);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
});






router.post('/upload_video', Multer_Video, (req,res,next) => {
    const video = new Video({
        ...req.body,
        videoUrl: `${req.protocol}://${req.get('host')}/assets/videos/${req.file.filename}`
    })
    video.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => console.log(error.response) );

})





router.delete('/upload_video/:id',(req,res,next) => {
  Video.findOne({_id: req.params.id})
  .then(video => {
      const filename = video.videoUrl.split('/videos/')[1]
      fs.unlink(`assets/videos/${filename}`, () => {
        Video.deleteOne({_id: req.params.id})
        .then(() => {
            res.status(200).json({message:"Objet supprimé !"})
        })
        .catch(error => {
            res.status(400).json({error})
        })
      }) 
      res.status(200).json({message:"video supprimé !"})
  })
  .catch(error => {
      res.status(400).json({error: error.stack})
  })
})


router.patch('/upload_video/:id',Multer_Video, (req,res,next) => {
  const videoObject = req.file ? {
       ...req.body,
     videoUrl: `${req.protocol}://${req.get('host')}/assets/videos/${req.file.filename}`
} : { ...req.body };
Video.updateOne(
  {_id: req.params.id}, {
          _id: req.params.id,
          ...videoObject})
  .then(() => {
       res.status(200).json({message:'Vidéo Modifiée !'})
        })
  .catch(error => {
      res.status(400).json({error})
       })
})


export default router