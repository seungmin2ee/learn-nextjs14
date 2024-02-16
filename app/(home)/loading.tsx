export default function Loading() {
  return <div>Loading...</div>;
}

// 로딩파일이 있으면 서버컴포넌트에서 fetching이 일어나는동안 로딩파일의 컴포넌트를 보여줌
// 그리고 fetcing이 끝나면 보여줄 페이지의 컴포넌트로 바뀌게됨
// 브라우저 탭의 로딩표시는 서버에서 응답이 늦는거. 리액트에서 로딩처리해주는것과 다름
