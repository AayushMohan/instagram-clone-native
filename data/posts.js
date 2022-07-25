import { USERS } from "./users";

export const POSTS = [
  {
    imageUrl:
      "https://instagram.fdel3-2.fna.fbcdn.net/v/t51.2885-19/271278320_2230211373796201_3550252510377996040_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fdel3-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=AxrXZMy-Zm4AX_mG-iR&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT8v0vBidCtNP8FWxOoD9k90zi1A-79ChAioDeZbx2Y1rA&oe=62E52483&_nc_sid=8fd12b",
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
      "https://www.canva.com/design/DAFHEsrN-dI/sFzmHSjrWYmEiwwCtkvE8A/view?utm_content=DAFHEsrN-dI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
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
