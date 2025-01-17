//@ts-nocheck

// 클래스 컴포넌트
// 2018년 이전 시점의 React 앱 개발에서 상태 관리는 클래스 컴포넌트로만 가능
//
// 클래스 컴포넌트 vs. 함수형 컴포넌트

import React from "../lib/react.js";
import Switch from "../components/switch.tsx";

// React 클래스 컴포넌트 <- React.Component 클래스 확장
class SwitchListClass extends React.Component {
  // 컴포넌트 생성할 때 1회 호출
  constructor(props) {
    super(props);

    // 컴포넌트 상태(객체만 가능)
    this.state = {
      switches: [
        {
          id: "likelion-12",
          active: false,
          children: "멋사 Front-End 스쿨 12기",
        },
        {
          id: "likelion-8",
          active: true,
          children: "멋사 Front-End 스쿨 8기",
        },
      ],
    };
  }

  // 컴포넌트 렌더 -> 리액트 엘리먼트 반환
  render() {
    // 리액트 엘리먼트 (JSX)
    return (
      <ul className="SwitchList" style={switchStyles}>
        {this.state.switches.map(({ id, active, children }) => (
          <li key={id}>
            <Switch active={active} onToggle={() => this.handleToggleState(id)}>
              {children}
            </Switch>
          </li>
        ))}
      </ul>
    );
  }

  // 컴포넌트로부터 생성된 인스턴스의 메서드(들)
  handleToggleState(id) {
    const nextSwitches = this.state.switches.map((item) => {
      return item.id === id ? { ...item, active: !item.active } : item;
    });

    this.setState({
      switches: nextSwitches,
    });
  }
}

export default SwitchListClass;

const switchStyles = {
  display: "flex",
  flexFlow: "column",
  gap: 12,
  listStyle: "none",
  paddingInlineStart: 0,
};

/* ---------------------------------------------------------- */
// => 타입스크립트로 바꿈
/* ---------------------------------------------------------- */

// interface Props {}
// interface State {
//   switches: {
//     id: string;
//     active: boolean;
//     children: string;
//   }[];
// }
// class SwitchListClass extends React.Component<Props, State> {
//   // state: State;
//   setState: (nextState: Partial<State>) => void;
//   // constructor(props: Props) {
//   //   super(props);
//   //   this.handleClickMethod = this.handleClickMethod.bind(this);
//   // }
//   state: State = {
//     switches: [
//       {
//         id: 'likelion-12',
//         active: false,
//         children: '멋사 Front-End 스쿨 12기',
//       },
//       {
//         id: 'likelion-8',
//         active: true,
//         children: '멋사 Front-End 스쿨 8기',
//       },
//     ],
//   };
//   render() {
//     return (
//       <ul className="SwitchList" style={switchStyles}>
//         {this.state.switches.map(({ id, active, children }) => (
//           <li key={id}>
//             <Switch active={active} onToggle={() => this.handleToggleState(id)}>
//               {children}
//             </Switch>
//             <button type="button" onClick={this.handleClickMethod}>
//               button in class component
//             </button>
//           </li>
//         ))}
//       </ul>
//     );
//   }
//   handleClickMethod = () => {
//     console.log('clicked button');
//     console.log(this); // this.setState()
//   };
//   handleToggleState(id: string): void {
//     const nextSwitches = this.state.switches.map((item) => {
//       return item.id === id ? { ...item, active: !item.active } : item;
//     });
//     this.setState({
//       switches: nextSwitches,
//     });
//   }
// }
// export default SwitchListClass;
// const switchStyles = {
//   display: 'flex',
//   flexFlow: 'column',
//   gap: 12,
//   listStyle: 'none',
//   paddingInlineStart: 0,
// };
