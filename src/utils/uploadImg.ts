import { ImgurClient } from "imgur";
import { accessToken } from "./env";

const client = new ImgurClient({accessToken: accessToken});

export default async function uploadImage(image: File) {
  const {
    data: { link },
  } = await client.upload({ image, type: "base64" });

  return link;
}
