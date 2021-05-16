import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Ihqr2_gHNQMKb5VxLKgBT5HH415CgzgdctHK71daN_0",
  },
});
