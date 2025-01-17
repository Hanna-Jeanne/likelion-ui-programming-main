import React from "../lib/react.js";
import SwitchList from "../components/switch-list.tsx";

// hyperscript 함수
// JavaScript 마크업 처리 사용
// const h = React.createElement;

// // React 엘리먼트를 반환하는 함수 (재사용 목적)
// // React 컴포넌트(구성요소, UI의 부분)
// function App(): React.ReactNode {
//   // React 엘리먼트 생성하는 함수 실행 결과 반환
//   // React 엘리먼트 반환
//   // React (또는 Vue) 가상(Virtual) DOM
//   // VDOM을 구성하는 가상 노드(vNode) 생성
//   return h(
//     /* type: HTML 컴포넌트(태그) 이름 or React 빌트인 컴포넌트 or 사용자 정의 컴포넌트 */
//     "div",
//     /* 컴포넌트 속성(props, 외부에서 전달되는 데이터) */
//     {
//       lang: "en",
//       style: appStyles,
//     },
//     /* 컴포넌트의 자식들(children) */
//     h(Switch, { active: true, onToggle: () => console.log("clicked switch 1") }, "Wi-Fi"),
//     h(Switch, { active: false }, "Bluetooth"),
//     h(Switch, { disabled: true, onToggle: () => console.log("clicked switch 3") }, "Reduced Motion")
//   );
// }

const appStyles = {
  display: "flex",
  flexFlow: "column",
  gap: 12,
  padding: 20,
};

// function App(): React.ReactNode {
//   const handleSwitch1Toggle = () => console.log("clicked switch 1");
//   const handleSwitch3Toggle = () => console.log("clicked switch 3");
//   return (
//     <div lang="en" style={appStyles}>
//       <Switch active onToggle={handleSwitch1Toggle}>
//         Wi-Fi
//       </Switch>
//       <Switch>Bluetooth</Switch>
//       <Switch disabled onToggle={handleSwitch3Toggle}>
//         Reduced Motion
//       </Switch>
//     </div>
//   );
// }

function App(): React.ReactNode {
  const list = [
    {
      id: "item-1",
      active: true,
      onToggle: () => console.log("clicked switch 1"),
      children: "와이파이(Wi-Fi)",
    },
    {
      id: "item-2",
      children: "블루투스(Bluetooth)",
    },
    {
      id: "item-3",
      disabled: true,
      onToggle: () => console.log("clicked switch 3"),
      children: "동작 줄이기(Reduced Motion)",
    },
    {
      id: "item-4",
      children: "스크린 리더(Screen Reader)",
      active: true,
    },
  ];

  return (
    <div lang="en" style={appStyles}>
      <SwitchList items={list} />
    </div>
  );
}

export default App;
