# (Office Cake Party)[https://master.d2bfyql4kzrsrv.amplifyapp.com/]

### By: Keturah Howard, January 2021

## Description

Most of us are remote now! 2020 changed our world to where the majority of us are working from home. Am I the only one missing cake parties?

This is a site dedicated to bringing cake parties to our homes. Join a party that your team is throwing, or make one yourself. Choose the decorations for your party, the cake, and then look at everyones beautiful faces surrounding the cake. After all, its not about the cake. Its about being appreciated and showing appreciation :)

## Technologies Used

- React
- [React WebCam](https://www.npmjs.com/package/react-webcam)
- [Grommet](https://v2.grommet.io/)
- yarn
- AWS amplify

## Behavior Driven Development

| Specification                                                                      | Example Input                                                            | Example Output                                                                         |
| :--------------------------------------------------------------------------------- | :----------------------------------------------------------------------- | :------------------------------------------------------------------------------------- |
| User can choose to make a party                                                    | on landing page.. _clicks 'Make a Party'_                                | _taken to form_                                                                        |
| User can choose party room color                                                   | in form.. _selects a color for room_                                     | _color of form is changed to that same color_                                          |
| User can choose party's cake                                                       | in form.. _selects cake image from lists of cakes_                       | _that cake is highlighted and will apear in next screen_                               |
| User can make party banner                                                         | in form.. _text input available to type in: you type "Happy BDAY James!_ | _that text will apear in next screen_                                                  |
| User submitting form is taken to room and room code is displayed for them to share | in form.. _clicks submit_                                                | _Taken to room- everything is there including room code_                               |
| Joining a room requires room code                                                  | _clicks 'Join a Party'_                                                  | _propted to input room code_                                                           |
| Entering room code allows entry of party                                           | _enters room code_                                                       | _taken to decorated page with cake in center, faces of coworkers adn self around cake_ |
| Room can be deleted by clicking 'end party'                                        | In party's room.. _clicks end party_                                     | _user's taken to landing page_                                                         |

### Liscensing

MIT
