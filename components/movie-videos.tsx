import { API_URL } from "../app/constants";
import styles from "../styles/movie-videos.module.css";

async function getVideos(id: string) {
  console.log("비디오 가져오는 중✨✨✨✨✨");
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  // 에러발생시 movies폴더의 error페이지를 보여줌
  // TODO: fetching중에 에러내보고 싶으면 아래주석 풀면됨
  // throw new Error("something broke...");

  const res = await fetch(`${API_URL}/${id}/videos`);
  return res.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);

  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          title={video.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ))}
    </div>
  );
}
