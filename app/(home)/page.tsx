import type { Metadata } from "next";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constants";

export const metadata: Metadata = {
  title: "Home",
};

async function getMovies() {
  const res = await fetch(API_URL);
  const json = await res.json();
  return json;
}

export default async function HomePage() {
  await new Promise((resolve) => setTimeout(resolve, 100));
  const movies = await getMovies(); // 실행이 완료될때까지 기다림.. 그동안 로딩페이지를 보여줌.

  return (
    <div className={styles.container}>
      {movies.map((movie: any) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
}

// react에서는 직접 로딩상태를 구현해야하고 useState를 써야함. 데이터를 주고받을때 보안때문에 반드시 api를 통해야함. 메타데이터 못씀
// server component에서 fetcing은 useState, useEffet같은 훅이 필요없어짐. 로딩상태도 관리할필요가 없음, 메타데이터도 exprot할 수 있음
// 캐싱도 됨. server에서 데이터페칭이 이루어지므로 보안상 이슈에서 안전하기때문에 api를 통하지않고 db와 바로 통신도 할 수 있음
// 업데이트가 필요없는(필요하지않은) 데이터여도 처음 한번은 데이터요청이 있고,
// 그 요청이 오래걸린다면 사용자는 그동안 아무것도 볼 수 없으므로 로딩상태임을 여전히 보여줄 필요가 있음.
// -> 이 때 필요한게 loading 페이지.
