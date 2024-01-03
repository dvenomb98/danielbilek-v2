import { Shorts } from "@/lib/types/general";
import serverActions from "public/images/shorts/server-actions.png";
import profile from "public/images/profile.jpg"

const author = {
  name: "Daniel Bílek",
  image: profile
};

const shorts: Shorts[] = [
  {
    image: serverActions,
    description: "Starting a new year with server actions! You can try it by clicking like button!",
    author: author,
    id: 1,
    date: "2024-01-03",
  },
];

export default shorts;
