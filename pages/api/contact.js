// import nodemailer from 'nodemailer';

// export default async function ContactAPI (req, res) {
//         const {name, email, messsage} =req.body

//         const data = {
//                 name, email, messsage
//         }

//         const transporter = nodemailer.createTransport({
//                 host: 'ariel@laserbrainvfx.com',
//                 port: 465, 
//                 secure: true,
//                 auth: {
//                         user: process.env.user,
//                         pass: process.env.pass,
//                 },
//         });

//         try {
//                 const mail = await transporter.sendMail({})

//                 return res.status(200).json({ message: "success"})
//         } catch (error) {
//                 console.log(error);
//                 res.status(500).json({message: "Could not send message, try again later."});
//         }
// }

