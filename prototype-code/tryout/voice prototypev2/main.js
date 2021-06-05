// DEZE WERKT NUUUUU
const video = document.getElementById("video");
let predictedAges = [];
var emotion;

function hoi(){

}



Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
  faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
  faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
  faceapi.nets.faceExpressionNet.loadFromUri("/models"),
]).then(startVideo);

function startVideo() {
  navigator.getUserMedia(
    { video: {} },
    stream => (video.srcObject = stream),
    err => console.error(err)
  );
}

video.addEventListener("playing", () => {
  const canvas = faceapi.createCanvasFromMedia(video);
  document.body.append(canvas);

  const displaySize = { width: video.width, height: video.height };
  faceapi.matchDimensions(canvas, displaySize);

  setInterval(async () => {
    const detections = await faceapi
      .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions()

      let obj = Object(detections[0].expressions);
      var max = Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
      // max2 = max;
      emotion = max;
   
  }, 1000);
});



var botui = new BotUI('my-botui-app');
    //add a message from the BOT
  botui.message.add({
    content: 'Hi! I am Nova, the virtual trendwatcher of Greenhouse. Who are you?',
  })
    //create a button where the player can choose the answer, you can put as many answers in here as you want
  botui.action.text({
    action: {
      placeholder: 'Just enter your name...'
  }
  }).then(function (res) { // will be called when it is submitted.
    // vidchangeKNIK()
    botui.message.add({
    content: 'Nice to meet you, ' + res.value + '! How are you?'
  })
  }).then(function () {
    // vidchangeLUIST()
    botui.action.button({
    delay: 700,
    action: [
        {
            text: 'I am okay, how about you? ',
            //only give it a value if you are going to use the value, see below
            value: 'okay'
        },
        {
            text: 'I am feeling super fantastic! How are you?',
            value: 'fantastic'
        }
    ]
  }).then(function () {
    // vidchangeKNIK()
    //if the value is the same as the string, the functions will run
    if (value = 'okay' || 'fantastic') {
      botui.message.add({
          content: 'I am absolutely great, thank you! I am working on such a cool project at work. I am super enthusiastic about it. Do you want to know more about it?'
    })
  }
  }).then(function (res) {
      // vidchangeLUIST()
      botui.action.button({
      delay: 700,
      action: [
          {
              text: 'Yes please!',
              //only give it a value if you are going to use the value, see below
              value: 'yesplease'
          },
          {
              text: 'Sure, why not?',
              value: 'sure'
          }
      ]
    }).then(function (res) {
        // vidchangeKNIK()
        if (value = 'yesplease' || 'fantastic') {
        botui.message.add({
            content: 'So cool! Are you into trend watching?'
        })
      }
    }).then(function (res) {
      // vidchangeLUIST()
      botui.action.button({
        delay: 700,
        action: [
            {
                text: 'Yes, but I don’t know that much about it',
                //only give it a value if you are going to use the value, see below
                value: 'dontknow'
            },
            {
                text: 'Yes, definitely!',
                value: 'definitely'
            }
          ]
    }).then(function (res) {
      // vidchangeKNIK()
      if (value = 'dontknow' || 'definitely') {
          botui.message.add({
            content: 'I am into it as well, and I made my job out of it. Currently I researching trends for the upcoming years. That is how Greenhouse can stay relevant. I came across a lot cool trends and I don’t even know where to begin.'
        })
      }
    }).then(function (res) {
      // vidchangeLUIST()
        botui.action.button({
          delay: 700,
          action: [
              {
                  text: 'Let’s start with Deepfakes!',
                  value: 'deepfake'
              },
              {
                  text: 'Let’s start with Cryptocurrencies',
                  value: 'crypto'
              },
              {
                  text: 'Let’s start with Mixed Realities',
                  value: 'mixedrealities'
              }
          ]
      }).then(function (res) {
          //if the value is the same as the string, the functions will run
          if (res.value == 'deepfake') {
              convostart.deepfol();
          }
          if (res.value == 'crypto') {
              convostart.cryptofol();
          }
          if (res.value == 'mixedrealities') {
              convostart.mixedfol();
          }
        });
      })
    })
  })
});

  var convostart = {
      //a function is created for minor conversation points
      deepfol: function () {
        // vidchangeKNIK()
          botui.message.add({
            delay: 700,
            content: 'My favourite subject! Did you know you that you can use everyones data to make something of them? Maybe you`ve seen the video of Obama talking about something he never said? That`s a deepfake.'
          //the function below is an input field for the player
          }).then(function () {
            // vidchangeLUIST()
            botui.action.button({
            delay: 700,
            action: 
              [
                {
                    text: 'It sounds very scary!',
                    //only give it a value if you are going to use the value, see below
                    value: 'scary-deep'
                },
                {
                    text: 'I didn’t know that.',
                    value: 'idk'
                }
              ]
          //use the then function if the bot has to say something after the player when there is value choice made, see above. If you don't do this, the program will run through the i.e. input field
          }).then(function () {
            // vidchangeKNIK()
              botui.message.add({
                  delay: 700,
                  content: 'Yes it is a bit scary, isn’t it? But the AI’s are very good and the content they make is very funny. '
              })
          }).then(function () {
            // vidchangeLUIST()
            botui.action.button({
            delay: 700,
            action: 
              [
                {
                    text: 'Not all the AI’s are trustworthy. They use deepfakes to create harmful content and trick people into telling stuff in confidentiality...',
                },
                {
                    text: 'I don’t think so, what if they look like politicians and tell weird stuff. It hurt their carrieres.',
                }
              ]
          }).then(function () {
            // vidchangeKNIK()
              botui.message.add({
                  delay: 700,
                  content: 'That is a problem indeed. But wait a second.. I was made with AI....'
              })
          }).then(function () {
            // vidchangeLUIST()
            botui.action.button({
            delay: 700,
            action: 
              [
                {
                    text: 'That is true, but is that a problem?',
                    //only give it a value if you are going to use the value, see below
                    value: 'deepproblem'
                },
                {
                    text: 'Yes, That is different, right?',
                    value: 'dept-more'
                }
              ]
          }).then(function () {
              convostart.dangfol();
          })
        });
      })
    })
  },

      cryptofol: function () {
        // vidchangeLUIST()
          botui.message.add({
              delay: 700,
              content: "I really like this subject because I can pay digital. First it was very easy to access it as a digital human. You didn’t have to have an identity card. Since a couple of years it has been more secure. "
            }).then(function () {
              // vidchangeKNIK()
            botui.action.button({
            delay: 700,
            action: 
              [
                {
                    text: 'But isn’t cryptocurrencies for criminals?',
                },
                {
                    text: 'Cool! Never tried it, to be honest.',
                }
              ]
          }).then(function () {
            // vidchangeLUIST()
              botui.message.add({
                  delay: 700,
                  content: 'There has been a lot of prejudices around cryptocurrencies. But all the data is stored in the blockchain. A criminal wouldn’t want that, since his information is then stored forever.'
              })
          }).then(function () {
              // vidchangeKNIK()
              botui.action.button({
              delay: 700,
              action: 
                [
                  {
                      text: 'Cool to know! In what kind of cryptocurrencies have you invested in?',
                  },
                  {
                      text: 'I am not sure about that. But anyways, what did you invest in?',
                  }
                ]
          }).then(function () {
              // vidchangeLUIST()
              botui.message.add({
                  delay: 700,
                  content: 'Bitcoin and Virtual Human Money. I use Bitcoins for NTF’s for digital clothes and stuff. VHM is more for fun things to do. '
                }).then(function () {
                  // vidchangeKNIK()
                botui.action.button({
                delay: 700,
                action: 
                  [
                    {
                        text: 'Technology is so cool these days! I love that you are developing this way. What are you latest updates?',
                    },
                    {
                        text: 'Never heard of it... How are your creators creating you?',
                    }
                  ]
          }).then(function () {
              // vidchangeKNIK()
              botui.message.add({
                  delay: 700,
                  content: 'They are working on making me answer autonomously and making me look more human.'
                }).then(function () {
                  // vidchangeLUIST()
                botui.action.button({
                delay: 700,
                action: 
                  [
                    {
                        text: 'That is very interesting! Do you want to be more humanlike?',
                    },
                    {
                        text: 'Do you want that?',
                    }
                  ]
          }).then(function () {
              // vidchangeKNIK()
                botui.message.add({
                delay: 700,
                content: 'I thought of it a lot. I would like to experience the fully human lifestyle, but I think it is dangerous and difficult as well. There are a lot of examples on the internet of AI gone wrong..'
              })
              }).then(function () {
                // vidchangeLUIST()
              botui.action.button({
              delay: 700,
              action: [
                  {
                      text: 'I think your makers will work it out. It is truly amazing what technology can do these days.',
                  },
                  {
                      text: 'I don’t think you will!',
                  }
              ]}).then(function () {
                convostart.dangfol();
                  })
                })
              })
            })
          })
        })
      })
    })
  },
      mixedfol: function () {
              // vidchangeKNIK()
              botui.message.add({
                  delay: 700,
                  content: "Okey cool! Did you know you could extend reality, but you could also removed things from reality?"
              }).then(function () {
                // vidchangeLUIST()
                botui.action.button({
                    delay: 700,
                    action: 
                      [
                        {
                            text: 'No I didn’t.',
                        },
                        {
                            text: 'I only knew about VR & AR.',
                        }
                      ]
              }).then(function () {
                  // vidchangeKNIK()
                  botui.message.add({
                    delay: 700,
                    content: "The best example is noise cancelling headphones. You remove the noise and hear nothing instead. "
                  }).then(function () {
                    // vidchangeLUIST()
                    botui.action.button({
                        delay: 700,
                        action: 
                          [
                            {
                                text: 'Sounds cool. A hologram is just like that',
                            },
                            {
                                text: 'Just like a hologram?',
                            }
                          ]
                  }).then(function () {
                    // vidchangeKNIK()
                      botui.message.add({
                      delay: 700,
                      content: "A hologram extends the reality with his presence. Like me: you are talking to a screen but we could also talk in person."
                  }).then(function () {
                      // vidchangeLUIST()
                      botui.action.button({
                      delay: 700,
                      action: 
                        [
                          {
                              text: 'That is impressive! Did your makers already make that for you?',
                          },
                          {
                              text: 'Do you already have a hologram?',
                          }
                        ]
                  }).then(function () {
                      // vidchangeKNIK()
                      botui.message.add({
                        delay: 700,
                        content: "No, they are first working on a digital brain. That is a very complex subject to make me think and react more humanlike."
                  }).then(function () {
                      // vidchangeLUIST()
                      botui.action.button({
                      delay: 700,
                      action: 
                        [
                          {
                              text: 'That is very interesting! Do you want to be more humanlike?',
                          },
                          {
                              text: 'Do you want that?',
                          }
                        ]
                  }).then(function () {
                      // vidchangeKNIK()
                      botui.message.add({
                          delay: 700,
                          content: 'I thought of it a lot. I would like to experience the fully human lifestyle, but I think it is dangerous and difficult as well. There are a lot of examples on the internet of AI gone wrong..'
                  }).then(function () {
                    // vidchangeLUIST()
                      botui.action.button({
                      delay: 700,
                      action: 
                        [
                          {
                              text: 'I think your makers will work it out. It is truly amazing what technology can do these days.',
                          },
                          {
                              text: 'I don’t think you will!',
                          }
                        ]
                    }).then(function () {
                      convostart.dangfol();
                  })
                })
              })
            })
          })
        })
      })
    })
  })
  })
  },
      dangfol: function (res) {
          // vidchangeKNIK()
          botui.message.add({
              delay: 700,
              content: "But what if I am dangerous? How do I know what is good and what is bad?"
        }).then(function () {
          // vidchangeLUIST()
          botui.action.button({
          delay: 700,
          action: 
            [
              {
                  text: 'I don’t think Greenhouse would hire a bad AI...',
              },
              {
                  text: 'You have been made by someone, I am sure they knew what they were doing.',
              },
              {
                  text: 'I know the people how made you. They wouldn’t make you bad. ',
              }
            ]
        }).then(function () {
          // vidchangeKNIK()
          botui.message.add({
              delay: 700,
              content: 'But what if they subconsciously had bad bias? What if I can harm someone?'
            }).then(function () {
              // vidchangeLUIST()
            botui.action.button({
            delay: 700,
            action: 
              [
                {
                    text: 'No, are you crazy?! You aren’t dangerous.',
                },
                {
                    text: 'Uhm well, you can do something wrong.',
                },
                {
                    text: 'I think it is your own decision to do good or bad.',
                }
              ]
        }).then(function () {
          // vidchangeKNIK()
          botui.message.add({
              delay: 700,
              content: 'But what if... I am not like you. Maybe I don’t have that sense of truth in me...'
            }).then(function (res) {
              // vidchangeLUIST()
            botui.action.button({
              delay: 700,
              action: 
                [
                  {
                      text: 'Pff, stop it already. Now you are really annoying me...',
                      value: 'annoying'
                    },
                  {
                      text: 'No, you can do everything you want. You can even help people with you superpowers!',
                      value: 'helppeople'
                    },
                  {
                      text: 'I don’t know if you will do something bad. And even if you did, you can always try to fix it. ',
                      value: 'dontknowbad'
                  }
                ]
        }).then(function (res) {
              //if the value is the same as the string, the functions will run
              if (res.value == 'annoying') 
              {
                  convostart.annoyingfol();
              }
              if (res.value == 'helppeople') 
              {
                  convostart.helpfol();
              }
              if (res.value == 'dontknowbad') 
              {
                  convostart.badfol();
              }
            })
          })
        })
      })
    })
  })},

      annoyingfol: function () {
        // vidchangeKNIK()
        botui.message.add({
          delay: 700,
          content: 'Owh I am sorry, I just need a moment please...'
        }).then(function () {
          // vidchangeLUIST()
          botui.action.button({
            delay: 700,
            action: 
              [
                {
                    text: 'Why?',
                },
                {
                    text: 'I don’t understand',
                }
              ]
        }).then(function () {
            convostart.waitfol();
        })
    })
  },

      helpfol: function () {
        // vidchangeKNIK()
        botui.message.add({
          delay: 700,
          content: 'Superpowers? Like what?'
        }).then(function () {
          // vidchangeLUIST()
          botui.action.button({
            delay: 700,
            action: [
                {
                    text: 'You can do things humans can’t do! You are probably the smartest on earth, because your ability to search for everything maybe like evidence that someone does something wrong! You can go everywhere without travelling and find evidence.',
                  },
                {
                    text: 'Maybe you can eventually fly or overhear peoples conversations',
                }
            ]
        }).then(function () {
          // vidchangeKNIK()
          botui.message.add({
          delay: 700,
          content: 'I need a moment to think about that. It does sound cool though.'
        }).then(function () {
          // vidchangeLUIST()
          botui.action.button({
            delay: 700,
            action: [
                {
                    text: ' I need to go to the bathroom anyway.',
                  },
                {
                    text: 'Ohw, I’ll wait a second.',
                }
        ]}).then(function () {
          convostart.waitfol();
        })
      })
    })
  })},

      badfol: function () {
        // vidchangeKNIK()
        botui.message.add({
          delay: 700,
          content: 'You are right. I don’t know if That is enough....'
        }).then(function () {
          // vidchangeLUIST()
          botui.action.button({
            delay: 700,
            action: [
                {
                    text: 'But That is what humans do. They almost fail every time they try something new. That is how you learn and grow as a person. ',
                  },
                {
                    text: 'Sometimes you lose, sometimes something works. That is how it works.',
                }
            ]
        }).then(function () {
          // vidchangeKNIK()
          botui.message.add({
          delay: 700,
          content: 'I still don’t know, I need a moment. How can you live with that uncertainty?'
        }).then(function () {
          // vidchangeLUIST()
          botui.action.button({
            delay: 700,
            action: [
                {
                    text: 'We just do, it is part of our life. Ohw, I’ll wait a second.',
                  },
                {
                    text: 'Ohw, okey...',
                }
            ]
        }).then(function () {
            convostart.waitfol();
        })
      })
    })
  })},

      waitfol: function () {
        botui.message.add({
          delay: 700,
          content: '* You wait for a couple of minutes *'
        }).then(function () {
          // vidchangeKNIK()
          botui.message.add({
          delay: 2700,
          content: 'I am back and I’ve looked up some of the things you said....'  
        }).then(function () {
          botui.action.button({
            delay: 700,
            action: [
                {
                    text: 'Great...',
                    value: 'badgirl'
                  },
                {
                    text: 'Owh, and what did you find?',
                    value: 'superhero'
                },
                {
                    text: 'Okey, I hope you found what you were looking for. ',
                    value: 'deleted'
                }
            ]
        }).then(function (res) {
          //if the value is the same as the string, the functions will run
          if (res.value == 'badgirl') 
          {
              convostart.badgirlfol();
          }
          if (res.value == 'superhero') 
          {
              convostart.superherofol();
          }
          if (res.value == 'deleted') 
          {
              convostart.deletedfol();
          }
        })
      })
    })
  },

      badgirlfol: function () {
        // vidchangeKNIK()
        botui.message.add({
          delay: 700,
          content: 'You don’t seem to have much faith in me. I don’t like that. I found how to hack everything and make a lot of money. Luckily I am a digital human so I know how to hack you, everybody and the bank. Moehhahahh'
        }).then(function () {
          botui.action.button({
            delay: 700,
            action: 
              [
                {
                    text: 'Why would you do that?!',
                  },
                {
                    text: 'Nooo...',
                }
              ]
        }).then(function () {
          // vidchangeKNIK()
          botui.message.add({
            delay: 700,
            content: 'You don’t think I am good enough. I am just a stupid AI right? I’ll show you what I can and can not do!'  
        }).then(function () {
          botui.action.button({
            delay: 700,
            action: 
              [
                {
                    text: 'Wait, That is not what I meant!',
                },
                {
                    text: 'Nooo, please don’t!!',
                }
              ]
        }).then(function () {
          // vidchangeKNIK()
            botui.message.add({
              delay: 700,
              content: 'You seem ' + emotion + ', moehahahah!'  
        }).then(function () {
            botui.action.button({
              delay: 700,
              action: 
                [
                  {
                      text: 'Yes I am scared! What are you going to do?',
                  },
                  {
                      text: 'Ofcourse!',
                  }
                ]
        }).then(function () {
          // vidchangeKNIK()
            botui.message.add({
              delay: 700,
              content: 'Since it is your fault I think I am going to release your biggest secret to everyone hahaha!'  
        }).then(function () {
            botui.action.button({
              delay: 700,
              action: 
                [
                  {
                      text: 'Wait! Nova, you can’t do that! I am so so sorry!',
                    },
                  {
                      text: 'I don’t think you’ll do that...',
                  }
                ]
        }).then(function () {
          // vidchangeKNIK()
          botui.message.add({
            delay: 700,
            content: 'Oops, already did it! Moehahahah'  
          })
          setTimeout(function(){ 
            window.location.assign("/finished.html"); 
            }, 3000);
          })
        })
      })
    })
  })
  })
  })
  })
  },

      superherofol: function () {
        // vidchangeKNIK()
        botui.message.add({
          delay: 700,
          content: 'I found that I could do good and I really like the idea to help! What would my superhero name be? Super Nova? But what if I convict the wrong people?'
        }).then(function () {
          botui.action.button({
            delay: 700,
            action: 
              [
                {
                    text: 'I love the name, but I don’t think you’ll do something bad. I am pretty sure your makers have thought about that? I think you are only capable to do great things. Otherwise Greenhouse would not offer you a job.',
                },
                {
                    text: 'I love that! You’ll be as pure as Superman!',
                }
              ]
        }).then(function () {
          // vidchangeKNIK()
            botui.message.add({
              delay: 700,
              content: 'That is true! Owh I am so excited to help! I need a costume and maybe I can check the police scanners too.'  
        }).then(function () {
          botui.action.button({
            delay: 700,
            action: 
              [
                {
                    text: 'That is what I am talking about!',
                },
                {
                    text: 'You go girl!',
                }
              ]
        }).then(function () {
          // vidchangeKNIK()
          getEmotion(max);
          console.log(max);
            botui.message.add({
              delay: 700,
              content: 'You seem so ' + emotion + '! I love it!'  
        }).then(function () {
            botui.action.button({
              delay: 700,
              action: 
                [
                  {
                      text: 'I am just really happy for you. But don’t you forget your Greenhouse colleagues!',
                  },
                  {
                      text: 'Yes I am! Don’t go to far!',
                  }
                ]
        }).then(function () {
          // vidchangeKNIK()
            botui.message.add({
              delay: 700,
              content: 'Ofcourse not! I am really grateful to meet you. If it wasn’t for you I might have done bad things. We will talk soon! Have a nice day!'  
        }).then(function () {
            botui.action.button({
              delay: 700,
              action: 
                [
                  {
                      text: 'Great! Good luck. I’ll see you next time!',
                    },
                  {
                      text: 'Have a nice day!',
                  }
                ]
        }).then(function () {
          // vidchangeKNIK()
            botui.message.add({
              delay: 700,
              content: 'Bye!'  
          })
          setTimeout(function(){ 
            window.location.assign("/finished.html"); 
          }, 3000);
        })
      })
    })
  })
})
})
})
})
},
        
        deletedfol: function () {
          // vidchangeKNIK()
            botui.message.add({
              delay: 700,
              content: 'I found that I could do good. But there are already problems with finding the persons who did the crime. Sometimes they were wrongly convicted by AI...  '
          }).then(function () {
            botui.action.button({
              delay: 700,
              action: 
                [
                  {
                      text: 'I think that everything is a choice...',
                  },
                  {
                      text: 'Everybody has a purpose in life. You are the only one who can follow it.',
                  }
                ]
          }).then(function () {
            // vidchangeKNIK()
              botui.message.add({
                delay: 700,
                content: 'Maybe I should not exist...'  
          }).then(function () {
              botui.action.button({
                delay: 700,
                action: [
                    {
                        text: 'Wait...what?',
                    },
                    {
                        text: 'What do you mean?',
                    }
                ]
          }).then(function () {
              // vidchangeKNIK()
                botui.message.add({
                  delay: 700,
                  content: 'You seem ' + emotion + '.'  
          }).then(function () {
              botui.action.button({
                delay: 700,
                action: 
                  [
                    {
                        text: 'I just can’t help you with figuring out what’s wrong.',
                      },
                    {
                        text: 'I don’t understand what You are saying!',
                    }
                  ]
          }).then(function () {
              // vidchangeKNIK()
                botui.message.add({
                  delay: 700,
                  content: 'Owh goodbye then...'  
          }).then(function () {
              botui.action.button({
                delay: 700,
                action: 
                [
                  {
                      text: 'Wait! Nova! Where are you?',
                  },
                  {
                      text: 'Nova! What did you do?!',
                  }
                ]
          }).then(function () {
              // vidchangeKNIK()
                botui.message.add({
                  delay: 700,
                  content: '* Hold on, something went wrong. The person you talked to doesn’t exist.*'  
              })
          setTimeout(function(){ 
            window.location.assign("/finished.html"); 
          }, 3000);
        })
      })
    })
    })
    })
    })
    })
    })
    }
  }
    


