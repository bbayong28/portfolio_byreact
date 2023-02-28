

import { FaUser, FaCalendar, FaPhoneAlt,FaEnvelope } from "react-icons/fa";
import { SiGithub, SiNaver } from "react-icons/si";


const HomeMenu = [
  {
    id: 1,
    icon: 'xi-home',
    title: 'Home'
  },
  {
    id: 2,
    icon: 'xi-package',
    title: 'Archiving'
  },
  {
    id: 3,
    icon: 'xi-documents',
    title: 'Projects'
  },
  {
    id: 4,
    icon: 'xi-mail',
    title: 'Contact'
  },
];

const btns = [
  { id: 1, name: "All", value: "All" },
  { id: 2, name: "React", value: "React" },
  { id: 3, name: "HTML/CSS/JS", value: "HTML/CSS/JS" },
  { id: 4, name: "Training", value: "Training" },
];

const projects = [
  {
    id: 1,
    name:'megflix',
    value: "React",
  },
  {
    id: 2,
    name:'한국 미술관',
    value: "React",
  },
  {
    id: 3,
    name:'카카오뱅크',
    value: "React",
  },
  {
    id: 4,
    name:'이메일 매니저',
    value: "React",
  },
  {
    id: 5,
    name:'잭슨카멜레온',
    value: "HTML/CSS/JS",
  },
  {
    id: 6,
    name:'한화',
    value: "HTML/CSS/JS",
  },
  {
    id: 7,
    name:'롯데리조트',
    value: "HTML/CSS/JS",
  },
  {
    id: 8,
    name:'마리떼',
    value: "HTML/CSS/JS",
  },
  {
    id: 9,
    name: '메타퀘스트',
    value: "HTML/CSS/JS",
  },
  {
    id: 10,
    name:'국사랑',
    value: "HTML/CSS/JS",
  },
  {
    id: 11,
    name:'calculator',
    value: "Training",
  },
  {
    id: 12,
    name:'Hyudai(react/jquery/js)',
    value: "Training",
  },
  {
    id: 13,
    name:'날씨어플',
    value: "Training",
  },
  {
    id: 14,
    name:'번역기',
    value: "Training",
  },
  {
    id: 15,
    name:'플립게임',
    value: "Training",
  },
  {
    id: 16,
    name:'배터리잔량',
    value: "Training",
  },
  {
    id: 17,
    name:'할일 앱',
    value: "React",
  },
  {
    id: 18,
    name:'간단한 카운터',
    value: "React",
  },
  {
    id: 19,
    name:'로그인',
    value: "React",
  },
  {
    id: 20,
    name:'단위 변환기',
    value: "React",
  },
];

const contacts = [
  {
    id: 1,
    icon: <FaUser />,
    text: "신화영",
  },
  {
    id: 2,
    icon: <FaCalendar />,
    text: "1995.09.21",
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    text: "+82 010-7356-5795",
  },
  {
    id: 4,
    icon: <FaEnvelope />,
    text: "ghkdud5795@naver.com",
  }
];

const archiving = [
  {
    id: 1,
    name:'GitHub',
    icon: <SiGithub />,
    add: "github.com/bbayong28",
    intro:"소스 코드 저장소 입니다.",
    des1:"국비지원 학원에서의 프로젝트 코드",
    des2:"혼자서 코딩 연습을 위해 만든 프로젝트 코드"
  },
  {
    id: 2,
    name: 'Blog',
    icon: <SiNaver />,
    add : 'blog.naver/ghkdud5795',
    intro:"공부 및 지식 공유 목적의 블로그 입니다.",
    des1:"공부하며 알게된 지식들 정리위한 기록",
    des2:"지식 공유를 통해 다른사람에게 도움이 되기 위해"
  }
];


export { HomeMenu, btns, projects, contacts, archiving }