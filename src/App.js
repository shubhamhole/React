import './App.css';
import UseContext from './components/UseContextIntro';
import BasicReactForm from './components/BasicReactForm';
import Counter from './components/Counter';
import EventIntro from './components/EventIntro';
import Fragement from './components/Fragement';
import MultipleConditionTerniary from './components/MultipleConditionTerniary';
import Nav from './components/Nav';
import NestedTerniaryOperator from './components/NestedTerniaryOperator';
// import About from './components/About';
// import Blog from './components/Blog';
// import Home from './components/Home';
// import HomeClass from './components/HomeClass';
// import { MultipleComponent } from './components/MultipleComponent';
// import PassValueProps from './components/PassValueProps';
// import Props from './components/Props';
import ObjectProps from './components/ObjectProps';
import OnChnageEvent from './components/OnChnageEvent';
import { Component1 } from './components/PropDrilling';
import PropsinClasscomp from './components/PropsinClasscomp';
import StateIntro from './components/StateIntro';
import StyleIntro from './components/StyleIntro';
import TerniaryOperators from './components/TerniaryOperator';
import UseEffectIntro from './components/UseEffectIntro';
import UseReference from './components/UseReference';
import UseStateIntro from './components/UseStateIntro';
import UseContextIntro from './components/UseContextIntro';
import Todos from './components/UseReducerIntro';
import UseReducerSimpleEx from './components/UseReducerSimpleEx';
import UseCallBackIntro from './components/UseCallBackIntro';
import UseMemoIntro from './components/UseMemoIntro';
import UseCustomeHookImpl from './components/UseCustomeHookImpl';
import UseCustomeHook2 from './components/UseCustomeHook2';
import Constructor from './ClassLifeCycle/Constructor';
import Counter1 from './ClassLifeCycle/getShouldComponentUpdate';
import { useState } from 'react';
import Header from './ClassLifeCycle/getDerviedStateFromProps';


function App() {
  const [counter1,setCounter1]=useState(0)
  function increase1() {
    setCounter1(counter1+1)
  }
  return (
    <div className="App">
      {/* <Home/>
      <About/>
      <Blog/>
      <HomeClass/>
      <MultipleComponent/> 
      <Props name='Tester'/>
      <PassValueProps/> 
      <ObjectProps/>
      <PropsinClasscomp class='React'/>
      <StateIntro/>
      <EventIntro/>
      <Counter/>
      */}
      {/* <Nav/>
      <OnChnageEvent/>
      <Fragement/>
      <TerniaryOperators/>
      <StyleIntro/> 
      <NestedTerniaryOperator/>
      <MultipleConditionTerniary/>
      <BasicReactForm/>
      <UseStateIntro/>
      <UseEffectIntro/>
      <Component1/>
      <UseContext/>
      <UseReference/>
      <Todos/>
      <UseReducerSimpleEx/>
      <UseCallBackIntro/>
      <UseMemoIntro/>
      <UseCustomeHookImpl/>
      <UseCustomeHook2/>
      <Constructor/>
      <Counter1 value={counter1} onClick={increase1}/>
      */}
      <Header favcol='yellow'/>
    </div>
  );
}

export default App;
