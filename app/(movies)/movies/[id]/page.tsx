// nomad-movies.nomadcoders.workers.dev

import { Suspense } from "react";
import { API_URL } from "../../../constants";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";




export default async function MovieDetail(props) {
  const params = await props.params;
  const id = params.id;

  // const movie = await getMovie(id);
  // const videos = await getVideos(id);

  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

  // return <h1>{movie.title}</h1>
  return (
    <div>
      <Suspense fallback = {<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback = {<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  )

}
