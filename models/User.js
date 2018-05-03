var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: String,
  place : String,
  // imageClickCounts: [mongoose.Schema.Types.Mixed],
  // imageClicks : [mongoose.Schema.Types.Mixed],
  created_date: { type: Date, default: Date.now },
 
  imageEvents : [ 
                  {
                     image : Number,
                     eventType : String,
                     timeStamp : Number
                  }
                 ], 
  imageHovers : [ 
                  {
                     image : Number,
                     timeStamp : Number
                  }
                 ], 
  imageClicks : [ 
                  {
                     image : Number,
                     clickType : Number,
                     timeStamp : Number
                  }
                 ],  
  imageLeftClicks : [ 
                      {
                       image : Number,
                       timeStamp : Number
                     }
                   ],                                              
  imageRightClicks : [ 
                        {
                         image : Number,
                         timeStamp :Number
                       }
                     ], 
 imageMiddleClicks : [ 
                        {
                         image : Number,
                         timeStamp :Number
                       }
                     ],                     
  imageDoubleClicks : [ 
                        {
                         image : String,
                         clickType : String,
                         timeStamp : Number
                       }
                     ],   
  image1Events : [ 
                        {
                         clickType : String,
                         timeStamp : Number
                       }
                     ],
 image2Events : [ 
                        {
                         clickType : String,
                         timeStamp : Number
                       }
                     ],                     
 image3Events : [ 
                      {
                         image : String,
                         clickType : String,
                         timeStamp : Number
                       }
                     ],  
image4Events : [ 
                        {
                         image : String,
                         clickType : String,
                         timeStamp : Number
                       }
                     ],  
image5Events : [ 
                        {
                         image : String,
                         clickType : String,
                         timeStamp : Number
                       }
                     ],                     

  });

  module.exports = mongoose.model('User', UserSchema);