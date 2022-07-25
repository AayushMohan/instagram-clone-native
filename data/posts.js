import { USERS } from "./users";

export const POSTS = [
  {
    imageUrl:
      "https://instagram.fdel3-3.fna.fbcdn.net/v/t51.2885-15/271266258_3051978025090893_1475305425478943407_n.jpg?stp=dst-jpg_e35&cb=2d435ae8-0fbdf7c6&_nc_ht=instagram.fdel3-3.fna.fbcdn.net&_nc_cat=109&_nc_ohc=JDc0XyIoHSIAX9T8oLh&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjc0MzgxNzYzODYzMDE0NzQ5NA%3D%3D.2-ccb7-5&oh=00_AT--CwPynzGndjYeUOoG_LkPf8UETbpeS2-Jt6DAOEbqEQ&oe=62E5DA63&_nc_sid=30a2ef",
    user: USERS[0].user,
    likes: 7870,
    caption: "Train Ride to Hogwarts. 😂🚆",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "aayushmohan",
        comment: "WOW! This build looks fire. Super excited about it.",
      },
      {
        user: "billgates",
        comment: "I'm so excited to see this build. 😍",
      },
    ],
  },
  {
    imageUrl:
      "https://instagram.fdel3-2.fna.fbcdn.net/v/t51.2885-15/286875377_118827587505425_8968988057441669205_n.jpg?se=7&stp=dst-jpg_e35&cb=2d435ae8-0fbdf7c6&_nc_ht=instagram.fdel3-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=e2kiMcRMyi4AX8rg03a&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg1NjIxODg3OTI3ODIxNDAwNw%3D%3D.2-ccb7-5&oh=00_AT8vRizpLV9D0rqoND4A9X77FMDXUBqzlFKzY1A90orCjw&oe=62E5DA5A&_nc_sid=30a2ef",
    user: USERS[1].user,
    likes: 7870,
    caption: "Train Ride to Hogwarts. 😂🚆",
    profile_picture: USERS[1].image,
    comments: [
      {
        user: "aayushmohan",
        comment: "Yo",
      },
      {
        user: "billgates",
        comment: "Amazing",
      },
    ],
  },
];
