import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import { Suspense } from "react";

interface MovieDetailProps {
  params: {
    id: string;
  };
}

// async function getMovie(id: string) {
//   console.log("데이터 가져오는 중✨✨✨✨✨");
//   await new Promise((resolve) => setTimeout(resolve, 5000));
//   const res = await fetch(`${API_URL}/${id}`);
//   return res.json();
// }

// async function getVideos(id: string) {
//   console.log("비디오 가져오는 중✨✨✨✨✨");
//   await new Promise((resolve) => setTimeout(resolve, 5000));
//   const res = await fetch(`${API_URL}/${id}/videos`);
//   return res.json();
// }

// dynamic metadata
// 메타데이터를 위해서 data fetching을 하는것이 비효율적일것처럼 보이지만
// movie-info에서 또 fetching하려고 할때는 캐싱되어있는 데이터를 쓰므로 2번 요청하지 않아서 괜찮음
export async function generateMetadata({ params: { id } }: MovieDetailProps) {
  const movie = await getMovie(id);

  return {
    title: movie.title,
  };
}

// dynamic routing 페이지는 props로 params와 searchParams를 받음
export default async function MovieDetail({
  params: { id },
}: MovieDetailProps) {
  // 아래처럼 쓰면 순차적으로 실행되어 getMovie()가 오래걸릴경우 비디오를 받기까지 한참 기다려야함
  // 각각 5초가 걸릴경우 10초이상 기다려야함
  // console.log("시작🚀🚀🚀🚀🚀");
  // const movie = await getMovie(id);
  // const videos = await getVideos(id);
  // console.log("끝👍👍👍👍👍");
  // return <div>{movie.title}</div>;

  // Promise.all()을 쓰면 아래 getMovie(), getVidoes()를 병렬적으로 실행할 수 있음
  // 동시에 시작하므로 5초만 기다리면 됨
  // 그치만 이것도 단점이 있음. 어쨋든 데이터를 다 받아와야 타이틀을 볼 수 있는거임🥲
  // 그래서 이것보단 2개의 컴포넌트로 분리시키고 Suspense를 써주면 됨⭐️
  // console.log("시작🚀🚀🚀🚀🚀");
  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  // console.log("끝👍👍👍👍👍");
  // return <div>{movie.title}</div>;

  // 아래처럼 Suspense를 사용하면 두 컴포넌트의 fetching이 동시에 시작되고
  // fetching이 완료되는 동안 fallback으로 받은 요소를 보여주고
  // 먼저 완료되는 컴포넌트부터 보여줄 수 있어서 효율적임
  return (
    <div>
      <Suspense fallback={<div>Loading info...</div>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<div>Loading videos...</div>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
