import { Requests, getIntegrity } from "./httpService.js";
export const getMovieMetaData = async id => {
  const token = await getIntegrity();
  const req = await Requests.post(
    "/api/movie/",
    true,
    {
      token,
      id
    },
    { "content-type": "application/json" }
  );
  return await req.json();
};
