"use client";

import Link from "next/link";
import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";

interface IMovieProps {
  title: string;
  id: string;
  poster_path: string;
}

export default function Movie({ title, id, poster_path }: IMovieProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/movies/${id}`);
  };

  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={handleClick} />
      <Link prefetch href={`/movies/${id}`}>
        {title}
      </Link>
    </div>
  );
}
// prefetch: 사용자의 viewport에 Link 컴포넌트가 들어오면 링크된 페이지를 구성하는 데이터를 미리받음
// useRouter()보다는 Link를 써서 최적화 가능
// 새창에서 열고 싶으면 target="_blank" 속성 쓰면 됨
// 📍 prefetch는 프로덕션 환경에서만 동작함

// caching: 첫번째 요청 이후의 요청에서는 캐싱된 데이터를 가져와 사용함
// revalidate: 설정값이 10이면 10초이후 요청이 있을경우 재빌드함. 10초마다 재빌드하는게 아님
