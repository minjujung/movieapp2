import Router from "Components/Router";
import GlobalStyles from "Components/GlobalStyles";

//'Header'가 'Router'바깥쪽에 있어서 모든 페이지에서 
//'Header' 공통적으로 있음!

function App() {
  return (   
    <div className="App">
      <Router />
      <GlobalStyles />
    </div>    
  );
}

export default App;
