  

export const messagesData = [
    {
      id: 1,
      sender: { id: 2, name: "Lisa Roy", avatar: "/userpic.png" },
      text: "Hi David, have you got the project report pdf?",
      time: "Today",
      isOwn: false,
    },
    {
      id: 2,
      sender: { id: 1, name: "David Peters", avatar: "/userpic.png" },
      text: "NO. I did not get it",
      time: "Today",
      isOwn: true,
    },
    {
      id: 3,
      sender: { id: 2, name: "Lisa Roy", avatar: "/userpic.png" },
      text: "Ok, I will just sent it here. Plz be sure to fill the details by today end of the day.",
      time: "Yesterday",
      isOwn: false,
    },
    {
      id: 4,
      sender: { id: 2, name: "Lisa Roy", avatar: "/userpic.png" },
      document: {
        name: "project_report.pdf",
        preview: "/chatpdf.png",
      },
      time: "Yesterday",
      isOwn: false,
    },
    {
      id: 5,
      sender: { id: 1, name: "David Peters", avatar: "/userpic.png" },
      text: "Ok. Should I send it over email as well after filling the details.",
      time: "Yesterday",
      isOwn: true,
    },
    {
      id: 6,
      sender: { id: 2, name: "Lisa Roy", avatar: "/userpic.png" },
      text: "Ya. I'll be adding more team members to it.",
      time: "Yesterday",
      isOwn: false,
    },
    {
      id: 7,
      sender: { id: 1, name: "David Peters", avatar: "/userpic.png" },
      text: "OK",
      time: "Yesterday",
      isOwn: true,
    },
  ]



  export const contacts = [
      {
        id: 2,
        name: "Lisa Roy",
        avatar: "/userpic.png",
        status: "online",
        lastMessage: "Hi, are you Available Tomorrow?",
        time: "10:35 AM",
        unread: 0,
      },
      {
        id: 3,
        name: "Jamie Taylor",
        avatar: "/userpic.png",
        status: "offline",
        lastMessage: "Nice One.\nWill Do it tomorrow",
        time: "10:35 AM",
        unread: 3,
      },
      {
        id: 4,
        name: "Jason Roy",
        avatar: "/userpic.png",
        status: "offline",
        lastMessage:
          "That's Great. I am Looking forward to having a great start.",
        time: "10:35 AM",
        unread: 0,
        read: true,
      },
      {
        id: 5,
        name: "Amy Frost",
        avatar: "/userpic.png",
        status: "offline",
        lastMessage: "Hi, will you start working on the chat app right now?",
        time: "10:35 AM",
        unread: 0,
        read: true,
      },
      {
        id: 6,
        name: "Paul Wilson",
        avatar: "/userpic.png",
        status: "offline",
        lastMessage: "See you tomorrow champ",
        time: "10:35 AM",
        unread: 0,
        read: true,
      },
      {
        id: 7,
        name: "Ana Williams",
        avatar: "/userpic.png",
        status: "offline",
        lastMessage: "??",
        time: "10:35 AM",
        unread: 1,
      },
    ]


export const currentUser = {
        id: 1,
        name: "David Peters",
        avatar: "/userpic.png",
        title: "Senior Developer",
      }

export const chartData = [
  { name: "JAN", value: 650 },
  { name: "FEB", value: 350 },
  { name: "MAR", value: 600 },
  { name: "APR", value: 370 },
  { name: "MAY", value: 500 },
  { name: "JUN", value: 850 },
  { name: "JUL", value: 580 },
  { name: "AUG", value: 610 },
  { name: "SEP", value: 450 },
  { name: "OCT", value: 720 },
  { name: "NOV", value: 390 },
  { name: "DEC", value: 600 },
];