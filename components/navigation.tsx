"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname();

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "✨" : ""}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>{" "}
          {path === "/about-us" ? "✨" : ""}
        </li>
      </ul>
    </nav>
  );
}

// 렌더링: 자바스크립트 function을 가져와서 브라우저가 이해할수있는 html로 변환하는작업
// React 렌더링 방식은 CSR, 렌더링이 클라이언트의 브라우저에서 일어남. 렌더링하는 동안 빈 화면
// Next의 렌더링 방식은 SSR, 서버에서 렌더링되어 html을 브라우저에 전달하기때문에
// js가 비활성화상태이거나 느리게 load되어도 최소한의 html은 있으므로 빈 화면을 볼일은 없음.
// "use client"가 있든 없든 모든 페이지, 모든 컴포넌트들은 기본적으로 SSR.
// -> 어떻게 확인? client component에서 console.log() 찍어보면 터미널에는 찍히지만 콘솔에는 안찍힘.

// hydration(수화): 단순html을 리액트앱으로 초기화하는 작업. 건조한 html이 hydration을 거치면 촉촉해져서 생기가 돌고 예뻐짐.
// "use client"가 선언된 컴포넌트만 hydrate됨. 서버에서 pre렌더링된후 클라이언트에서 hydrate됨
// client component 전체가 hydrate되는게 아니라 필요한 부분만 hydrate. 예를 들어 이벤트기능 있는 버튼이나 네비게이션바 등등
// 페이지접속 -> <button>0</button> -> 😀 -> <button onClick={}>0</button> -> 😍
// 사용자가 페이지에 접속하면 0이 쓰여진 아무 이벤트도 없는 버튼을 보게됨. 그리고 그 즉시 리액트앱을 초기화하여 onClick을 부착함

// layout 페이지
// 페이지 이동시 layout이 먼저 렌더링되고 url에 해당하는 페이지가 layout 컴포넌트의 children prop이 되어 렌더링됨
// layout 중첩가능

// Metadata : 메타데이터는 병합됨.
// layout, page에서만 export할 수 있음(일반 컴포넌트X)
// 메타데이터는 서버컴포넌트에서만 있을 수 있음
