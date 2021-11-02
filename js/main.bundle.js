(()=>{"use strict";var e,t={974:(e,t,i)=>{var a=i(294),n=i(935),r=i(163),l=i(704);const o=r.createGlobalStyle`
  ${l.Fv};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${e=>e.theme.fonts.main};
    font-size: 1.6rem;
    background: ${e=>e.theme.colors.background1};
    color: ${e=>e.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${e=>e.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

`;function p(e){return a.createElement(r.ThemeProvider,{theme:e.theme},a.createElement(o,null),e.children)}const d=r.default.div`
max-width: 1280px;
width: 100%;
margin: auto;
`;var m=i(583);const s=r.default.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;

  @media ${e=>e.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`,c=r.default.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${e=>e.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`,x=r.default.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  @media ${e=>e.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 5;
  }
`,h=r.default.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${e=>e.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`,g=r.default.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${e=>e.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`,u=r.default.a`
transition: 0.3s ease;
color: white;
border-radius: 50px;
padding: 8px;
&:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
    
  }
`;function f(){return a.createElement(s,null,a.createElement(c,null,a.createElement(g,null,"Dumetella")),a.createElement(x,null,a.createElement("li",null,a.createElement(g,{href:"#projects"},"Projects")),a.createElement("li",null,a.createElement(g,{href:"#tech"},"Technologies")),a.createElement("li",null,a.createElement(g,{href:"#about"},"About"))),a.createElement(h,null,a.createElement(u,{href:"https://github.com/Dumetella"},a.createElement(m.hJX,{size:"2.5em"})),a.createElement(u,{href:"https://t.me/dumetella"},a.createElement(m.Ww5,{size:"2.5em"}))))}const b=r.default.section`
  width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 2rem 48px 40px;
  margin: 1rem auto;
  box-sizing: content-box;


  @media ${e=>e.theme.breakpoints.sm} {
    padding: 0 16px 48px;
    width: calc(100vw - 32px);
  }
`,w=r.default.a`
	font-size: 2rem;
	line-height: 30px;
	color: rgba(255, 255, 255, 0.75);
	margin-bottom: 16px;
	transition: .3s ease;
	position: relative;
	left: 0;

	&:hover {
		color: #fff;
		left: 6px;
	}

	@media ${e=>e.theme.breakpoints.md} {
		font-size: 2.5rem;
		line-height: 28px;
		display: flex;
	}

	@media ${e=>e.theme.breakpoints.sm} {
		font-size: 1.5rem;
		line-height: 14px;
		margin-bottom: 8px;
		display: flex;
		align-items: center;
	}
`,k=r.default.div`
max-width: 1040px;
display: flex;
justify-content: space-between;

@media ${e=>e.theme.breakpoints.md}{
  display: flex;
  justify-content: space-between;
}

@media ${e=>e.theme.breakpoints.sm}{
  display: flex;
	width: 100%;
  flex-direction: column;
}
`,E=r.default.div`
  display: flex;
	align-items:baseline;
	flex-wrap: wrap;
	margin-right: auto;
	

	@media ${e=>e.theme.breakpoints.md}{
		flex-direction: column;
		align-items: baseline;
	}

	@media ${e=>e.theme.breakpoints.sm}{
		display: flex;
		flex-direction: column;
		margin: 0 0 32px;
		align-items: center;
	}
`,$=r.default.p`
	color: rgba(255, 255, 255, 0.5);
	min-width: 280px;
	letter-spacing: 0.02em;
	font-size: 18px;
	line-height: 30px;
	padding: 1rem;

	@media ${e=>e.theme.breakpoints.md}{
		font-size: 16px;
		line-height: 28px;
	}

	@media ${e=>e.theme.breakpoints.sm}{
		line-height: 22px;
		font-size: 14px;
		min-width: 100px;
	}
`,y=r.default.div`
	display: flex;
  align-items: center;

	@media ${e=>e.theme.breakpoints.md}{
		justify-content: center;
		padding-right: 16px;
		flex-wrap: wrap;
	}
`,v=r.default.ul`
	border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
	grid-template-columns: repeat(3, minmax(85px, 220px));
	gap: 40px;
  padding: 40px 0 28px;

	@media ${e=>e.theme.breakpoints.lg} {
		padding: 32px 0 16px;
	}

	@media ${e=>e.theme.breakpoints.md} {
		width: 100%;
		padding: 32px 0 16px;
		gap: 16px;
	}
	@media ${e=>e.theme.breakpoints.sm} {
		width: 100%;
		padding: 32px 4px 16px;
		gap: 5px;
	}
`,z=r.default.div`
	display: flex;
	flex-direction: column;
	max-width: 220px;
	width: 100%;
`,F=r.default.h4`
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 24px;
	text-transform: uppercase;
	color: rgba(255, 255, 255, 0.4);
	margin-bottom: 16px;

	@media ${e=>e.theme.breakpoints.sm} {
		font-size: 10px;
		line-height: 12px;
		margin-bottom: 8px;
	}
`;function j(){return a.createElement(b,null,a.createElement(v,null,a.createElement(z,null,a.createElement(F,null,"Email"),a.createElement(w,{href:"mailto:dumetella@outlook.com"},"dumetella@outlook.com"))),a.createElement(k,null,a.createElement(E,null,a.createElement($,null,"Stuff happens cuz stuff")),a.createElement(y,null,a.createElement(u,{href:"https://github.com/Dumetella"},a.createElement(m.hJX,{size:"3em"})),a.createElement(u,{href:"https://t.me/dumetella"},a.createElement(m.Ww5,{size:"3em"})))))}const D=r.default.section`
  display: ${e=>e.grid?"grid":"flex"};
  flex-direction: ${e=>e.row?"row":"column"};
  padding: ${e=>e.nopadding?"0":"32px 48px 0"} ;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${e=>e.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    padding: ${e=>e.nopadding?"0":"16px 16px 0"} ;

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`,S=r.default.h2`
  font-weight: 800;
  font-size: ${e=>e.main?"65px":"56px"};
  line-height: ${e=>e.main?"72px":"56px"};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${e=>e.main?"58px 0 16px":"0px 0px 8px"};

  @media ${e=>e.theme.breakpoints.md}{
    font-size: ${e=>e.main?"56px":"48px"};
    line-height: ${e=>e.main?"56px":"48px"};
    margin-bottom: 12px;
    padding: ${e=>e.main?"40px 0 12px":"0"};
  }

  @media ${e=>e.theme.breakpoints.sm}{
    font-size: 32px;
    line-height: 40px;
    font-size: ${e=>e.main?"28px":"32px"};
    line-height: ${e=>e.main?"32px":"40px"};
    margin-bottom: 8px;
    padding: ${e=>e.main?"16px 0 8px":"0"};
    max-width: 100%;
  }
`,O=r.default.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.5);

  @media ${e=>e.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`,P=r.default.div`

  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: ${e=>e.colorAlt?"linear-gradient(270deg, #F46737 0%, #945DD6 100%)":"linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"};

    margin: ${e=>e.divider?"4rem 0":""};

  @media ${e=>e.theme.breakpoints.md} {
    width: 48px;
    height: 4px;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    width: 32px;
    height: 2px;
  }
`,A=(r.default.p`
  max-width: 800px;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);

@media ${e=>e.theme.breakpoints.md} {
    max-width: 672px;
    font-size: 16px;
    line-height: 25px;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`,r.default.button`
  color: #FFF;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-sizing: border-box;
  border-radius: 999px;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  width: fit-content;
  margin-top: 32px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: 0.4s ease;
  &:focus {
    outline: none;
  }

  &:hover {
    color: #0f1624;
    background: #fff;
    border: 1px solid #fff;
  }

  &:active {
    background: #e0e4eb;
    border: 1px solid #304169;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${e=>e.theme.breakpoints.md}{
    margin-top: 24px; 
    margin-bottom: 64px;
    padding: 16px 24px;
    width: fit-content;
    font-size: 20px;
    line-height: 20px;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    margin-top: 16px;
    margin-bottom: 40px;
    padding: 8px 16px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
  }
`,r.default.div`
  width: ${({alt:e})=>e?"150px":"262px"};
  height: ${({alt:e})=>e?"52px":"64px"};
  border-radius: 50px;
  font-size: ${({alt:e})=>e?"20px":"24px"};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({alt:e,form:t})=>e||t?"0":"0 0 80px"};
  color: #fff;
  background: ${({alt:e})=>e?"linear-gradient(270deg, #ff622e 0%, #B133FF 100%)":"linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)"};
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({disabled:e})=>e?".5":"1"};

  @media ${e=>e.theme.breakpoints.md} {
    width: ${({alt:e})=>e?"150px":"184px"};
    height: ${({alt:e})=>e?"52px":"48px"};
    font-size: ${({alt:e})=>e?"20px":"16px"};
    margin-bottom: ${({alt:e})=>e?"0":"64px"};
  }

  @media ${e=>e.theme.breakpoints.sm} {
    width: 100%;
    height: 32px;
    font-size: 14px;
    margin-bottom: ${({alt:e})=>e?"0":"32px"};
  }
`,r.default.button`
  border: none;
  border-radius: 50px;
  color: #fff;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({alt:e})=>e?"linear-gradient(270deg, #F46737 0%, #945DD6 100%)":"linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"};
  opacity: ${({disabled:e})=>e?".5":"1"};
  transition: .4s ease;
  font-size: ${({alt:e})=>e?"20px":"24px"};
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({disabled:e})=>e?"inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)":"none"};

  &:hover {
    opacity: 0;
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  &:disabled{
    background: linear-gradient(270deg, #00DBD8 0%, #B133FF 100%);
    opacity: 0.5;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${e=>e.theme.breakpoints.md} {
    font-size: ${({alt:e})=>e?"20px":"16px"};
  }

  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 14px;
  }
`,r.default.div`
  margin-left: ${({large:e})=>e?"24px":"16px"};
  transition: 0.3s ease;
  justify-content: center;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }

  @media ${e=>e.theme.breakpoints.md} {
    margin-left: ${({large:e})=>e?"16px":"8px"};

  }
  @media ${e=>e.theme.breakpoints.sm} {
    margin-left: ${({large:e})=>e?"0":"8px"};
  }
`,r.default.div`
  display: flex;  
  height: ${({large:e})=>e?"32px":"24px"};

  @media ${e=>e.theme.breakpoints.md} {
    height: ${({nav:e})=>e?"16px":"24px"};
  }

  @media ${e=>e.theme.breakpoints.sm} {
    height: ${({large:e})=>e?"32px":"16px"};
  }
`,r.default.div`
  width: 100%;
  @media ${e=>e.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${e=>e.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`);function B(){return a.createElement(a.Fragment,null,a.createElement(D,{row:!0,nopadding:!0},a.createElement(A,null,a.createElement(S,{main:!0,center:!0},"Hi ",a.createElement("br",null),"I am Dumetella"),a.createElement(O,null,"I like coffee and to create useless web-applications at 5AM."))))}const M=r.default.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
  max-height: 200px;
`,_=r.default.div`
  display: flex;
  flex: 0 1;
`,T=r.default.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${e=>e.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`,I=r.default.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${e=>e.theme.breakpoints.sm} {
    width: 100%;
  }
`,R=r.default.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`,C=r.default.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${e=>e.title?"3rem":"2rem"};
`,G=r.default.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`,W=(r.default.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`,r.default.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${e=>e.theme.breakpoints.sm} {
    padding:.3rem
  
}
`),L=r.default.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`,N=r.default.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #801414;

}
`,U=(r.default.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`,r.default.li`
color: #d8bfbf;
font-size: 1.5rem;
`,[{title:"React Puzzle Games",description:"Small game project written with React, TypeScript and styled-components.",image:"/images/taken.png",source:"https://github.com/Dumetella/react-15game",visit:"https://google.com",id:0},{title:"React Weather",description:"Forecast web application written with React, TypeScript and MaterialUI",image:"/images/react_weather.png",source:"https://github.com/Dumetella/react-weather",visit:"https://dumetella-weather.herokuapp.com/",id:0}]);function X(){return a.createElement(D,{nopadding:!0,id:"projects"},a.createElement(P,null),a.createElement(S,{main:!0},"Projects"),a.createElement(T,null,U.map(((e,t)=>a.createElement(I,{key:t},a.createElement(_,null,a.createElement(M,{src:e.image})),a.createElement(R,null,a.createElement(C,null,e.title),a.createElement(G,null)),a.createElement(W,{className:"card-info"},e.description),a.createElement(L,null,a.createElement(N,{href:e.visit},"Live"),a.createElement(N,{href:e.source},"Source")))))))}var J=i(859);r.default.div`
  text-align: center;
  background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${e=>e.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${e=>e.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`,r.default.img`
  width: 100%;
`;const H=r.default.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: 3rem 0;
  
  @media ${e=>e.theme.breakpoints.lg}{
    margin: 64px 0;
  }

  @media ${e=>e.theme.breakpoints.md}{
    margin: 64px 0;
    gap: 24px
  }
  
  @media ${e=>e.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
`,Q=r.default.div`
  display: flex;
  flex-direction: column;

  @media ${e=>e.theme.breakpoints.sm}{
    display: flex;
    margin-left: 18px;
  }
`,q=r.default.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-bottom: 8px;

@media ${e=>e.theme.breakpoints.md}{
  font-size: 24px;
  line-height: 28px;
}

@media ${e=>e.theme.breakpoints.sm}{
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.02em;
  margin-bottom: 4px;
}
`,K=r.default.p`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);

  @media ${e=>e.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 28px;
  }

  @media ${e=>e.theme.breakpoints.sm}{
    font-size: 14px;
    line-height: 22px;
  }
`,V=r.default.li`
  max-width: 320px;
  display: flex;
  flex-direction: column;

@media ${e=>e.theme.breakpoints.md}{
  max-width: 203px;
}

@media ${e=>e.theme.breakpoints.sm}{
  margin-bottom: 14px;
  max-width: 320px;
  flex-direction: row;
}
`;r.default.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
  
  @media ${e=>e.theme.breakpoints.md}{
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${e=>e.theme.breakpoints.sm}{
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`;function Y(){return a.createElement(D,{id:"tech"},a.createElement(P,{divider:!0}),a.createElement(S,null,"Technologies"),a.createElement(O,null,"I have little commercial development experience, but I have a lot of enthusiasm for the modern front-end"),a.createElement(H,null,a.createElement(V,null,a.createElement("picture",null,a.createElement(J.GR$,{size:"3em"})),a.createElement(Q,null,a.createElement(q,null,"Front-End"),a.createElement(K,null,"intermediate experience with: ",a.createElement("br",null),"React.js, ",a.createElement("br",null),"TypeScript, ",a.createElement("br",null),"Redux, ",a.createElement("br",null),"styled-components ",a.createElement("br",null)))),a.createElement(V,null,a.createElement("picture",null,a.createElement(J.BwW,{size:"3em"})),a.createElement(Q,null,a.createElement(q,null,"Back-End"),a.createElement(K,null,"Beginner experience with: ",a.createElement("br",null),"Node.js, ",a.createElement("br",null),"Express, ",a.createElement("br",null),"SQL, ",a.createElement("br",null),"Nginx ",a.createElement("br",null)))),a.createElement(V,null,a.createElement("picture",null,a.createElement(J.MSM,{size:"3em"})),a.createElement(Q,null,a.createElement(q,null,"UI/UX"),a.createElement(K,null,"Average experience with ",a.createElement("br",null),"Figma and Photoshop")))),a.createElement(P,{colorAlt:!0}))}const Z=r.default.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 24px 0 40px;

  @media ${e=>e.theme.breakpoints.md}{
    gap: 16px;
    margin: 20px 0 32px;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  @media ${e=>e.theme.breakpoints.sm}{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-width: 500px;
    margin: 24px auto;
  }
`,ee=r.default.div`
  background: #212D45;
  border-radius: 12px;
  height: 144px;
  padding: 24px;
  @media ${e=>e.theme.breakpoints.lg} {
    height: 210px;

  }

  @media ${e=>e.theme.breakpoints.md} {
    height: 135px;
    padding: 16px;
  }

  @media ${e=>e.theme.breakpoints.sm} {
    height: 110px;
    padding: 12px;
    
    &:nth-child(2n){
      grid-row:2;
    }
  }
`,te=r.default.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.01em;
  color: #FFFFFF;
  margin-bottom: 8px;

  @media ${e=>e.theme.breakpoints.md} {
    font-size: 28px;
    line-height: 32px;
  }
  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 24px;
    line-height: 26px;
}
`,ie=r.default.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);

  @media ${e=>e.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 20px;
  };

  @media ${e=>e.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 14px;
  }
`,ae=(r.default.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media ${e=>e.theme.breakpoints.md}{
    display: flex;
    justify-content: center;
    padding-bottom: 64px;
  }

  @media ${e=>e.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
  }
`,r.default.h5`
  display: flex;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);

@media ${e=>e.theme.breakpoints.md}{
  line-height: 32px;
  font-size: 20px;
};

@media ${e=>e.theme.breakpoints.sm}{
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 16px;
}
`,r.default.div`
  display: flex;

  @media ${e=>e.theme.breakpoints.sm}{
    width: 160px;
    justify-content: space-between;
  }
`,[{number:1600,text:"Lichess Elo"}]);function ne(){return a.createElement(D,null,a.createElement(S,null,"Personal Achievements"),a.createElement(Z,null,ae.map(((e,t)=>a.createElement(ee,{key:t},a.createElement(te,null,`${e.number}+`),a.createElement(ie,null,e.text))))),a.createElement(P,null))}const re={fonts:{title:"Space Grotesk, sans-serif",main:"Space Grotesk, sans-serif"},colors:{primary1:"hsl(204,23.8%,95.9%)",background1:"#0F1624",accent1:"hsl(34.9,98.6%,72.9%)",button:"hsl(205.1,100%,36.1%)",background2:"hsl(232.7,27.3%,23.7%)"},breakpoints:{sm:"screen and (max-width: 640px)",md:"screen and (max-width: 768px)",lg:"screen and (max-width: 1024px)",xl:"screen and (max-width: 1280px)"}},le=r.default.div`
    width: 300px;
    height: 280px;
    position: absolute;
    top: calc(25%);
    left: calc(65%);
    @media ${e=>e.theme.breakpoints.lg} {
        display: none;
    }
`,oe=r.default.div`
    width: 100%;
    height: 80px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #ddcfcc;
    border-radius: 10px;
`,pe=r.default.div`
    width: 25px;
    height: 25px;
    position: absolute;
    top: 25px;
    background-color: #282323;
    border-radius: 50%;
    &::after {
        content: "";
        width: 8px;
        height: 8px;
        position: absolute;
        bottom: -8px;
        left: calc(50% - 4px);
        background-color: #615e5e;
    }
    left: ${e=>e.left}; 
`,de=r.default.div`
    width: 50px;
    height: 50px;
    position: absolute;
    top: calc(50% - 25px);
    left: calc(50% - 25px);
    border-radius: 50%;
    background-color: #9acfc5;
    border: 5px solid #43beae;
    box-sizing: border-box;
`,me=r.default.div`
    width: 8px;
    height: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #9b9091;
    box-shadow: -12px 0 0 #9b9091, -24px 0 0 #9b9091;
`,se=r.default.div`
    width: 90%;
    height: 160px;
    position: absolute;
    top: 80px;
    left: calc(50% - 45%);
    background-color: #bcb0af;
    &::before {
        content: "";
        width: 90%;
        height: 100px;
        background-color: #776f6e;
        position: absolute;
        bottom: 0;
        left: calc(50% - 45%);
        border-radius: 20px 20px 0 0;
    }
`,ce=r.default.div`
    width: 60px;
    height: 20px;
    position: absolute;
    top: 0;
    left: calc(50% - 30px);
    background-color: #231f20;
    &::before {
        content: "";
        width: 50px;
        height: 20px;
        border-radius: 0 0 50% 50%;
        position: absolute;
        bottom: -20px;
        left: calc(50% - 25px);
        background-color: #231f20;
    }
    &::after {
        content: "";
        width: 10px;
        height: 10px;
        position: absolute;
        bottom: -30px;
        left: calc(50% - 5px);
        background-color: #231f20;
    }
`,xe=r.default.div`
    width: 70px;
    height: 20px;
    position: absolute;
    top: 15px;
    right: 25px;
    background-color: #231f20;

    &::before{
        content: "";
        width: 15px;
        height: 5px;
        position: absolute;
        top: 7px;
        left: -15px;
        background-color: #9e9495;
    }
`,he=r.default.div`
    width: 80px;
    height: 47px;
    position: absolute;
    bottom: 0;
    left: calc(50% - 40px);
    background-color: #fff;
    border-radius: 0 0 70px 70px / 0 0 110px 110px;

    &::after {
        content: "";
        width: 20px;
        height: 20px;
        position: absolute;
        top: 6px;
        right: -13px;
        border: 5px solid #fff;
        border-radius: 50%;
    }
`,ge=r.keyframes`
    0% {
        height: 0px;
        opacity: 1;
    }
    5% {
        height: 0px;
        opacity: 1;
    }
    20% {
        height: 62px;
        opacity: 1;
    }
    95% {
        height: 62px;
        opacity: 1;
    }
    100% {
        height: 62px;
        opacity: 0;
    }
`,ue=r.default.div`
    width: 6px;
    height: 63px;
    opacity: 0;
    position: absolute;
    top: 50px;
    left: calc(50% - 3px);
    background-color: #74372b;
    animation: ${ge} 4s 4s linear infinite;
`,fe=r.default.div`
    width: 95%;
    height: 15px;
    position: absolute;
    bottom: 25px;
    left: calc(50% - 47.5%);
    background-color: #41bdad;
    border-radius: 10px;

    &::after {
        content: "";
        width: 106%;
        height: 26px;
        position: absolute;
        bottom: -25px;
        left: -8px;
        background-color: #000;
    }
`,be=r.keyframes`
    0% {
        bottom: 20px;
        opacity: 0;
    }
    40% {
        bottom: 50px;
        opacity: 0.5;
    }
    80% {
        bottom: 80px;
        opacity: 0.3;
    }
    100% {
        bottom: 80px;
        opacity: 0;
    }
`,we=r.keyframes`
    0% {
        bottom: 40px;
        opacity: 0;
    }
    40% {
        bottom: 70px;
        opacity: 0.5;
    }
    80% {
        bottom: 80px;
        opacity: 0.3;
    }
    100% {
        bottom: 80px;
        opacity: 0;
    }
`,ke=r.default.div`
    width: 8px;
    height: 20px;
    position: absolute;
    border-radius: 5px;
    background-color: #b3aeae;
    opacity: 0;
    bottom: ${e=>e.bottom};
    left: ${e=>e.left};
    animation: ${we} ${e=>e.animation};
`,Ee=r.default.div`
    width: 8px;
    height: 20px;
    position: absolute;
    border-radius: 5px;
    background-color: #b3aeae;
    opacity: 0;
    bottom: ${e=>e.bottom};
    left: ${e=>e.left};
    animation: ${be} ${e=>e.animation};
`;function $e(){return a.createElement(le,null,a.createElement(oe,null,a.createElement(pe,{left:"14px"}),a.createElement(pe,{left:"50px"}),a.createElement(de,null),a.createElement(me,null)),a.createElement(se,null,a.createElement(ce,null),a.createElement(xe,null),a.createElement(ue,null),a.createElement(ke,{bottom:"50px",left:"102px",animation:"3s 4s linear infinite"}),a.createElement(Ee,{bottom:"70px",left:"118px",animation:"3s 5s linear infinite"}),a.createElement(Ee,{bottom:"65px",left:"118px",animation:"3s 6s linear infinite"}),a.createElement(ke,{bottom:"50px",left:"102px",animation:"3s 5s linear infinite"}),a.createElement(he,null)),a.createElement(fe,null))}function ye(){return a.createElement(D,{id:"about"},a.createElement(S,null,"About Me"),a.createElement(O,null,"Currently working on my personal projects"))}n.render(a.createElement(a.StrictMode,null,a.createElement((function(){return a.createElement(p,{theme:re},a.createElement(d,null,a.createElement(f,null),a.createElement(D,{grid:!0},a.createElement(B,null),a.createElement($e,null)),a.createElement(X,null),a.createElement(Y,null),a.createElement(ye,null),a.createElement(ne,null),a.createElement(j,null)))}),null)),document.getElementById("root"))}},i={};function a(e){var n=i[e];if(void 0!==n)return n.exports;var r=i[e]={exports:{}};return t[e](r,r.exports,a),r.exports}a.m=t,e=[],a.O=(t,i,n,r)=>{if(!i){var l=1/0;for(m=0;m<e.length;m++){for(var[i,n,r]=e[m],o=!0,p=0;p<i.length;p++)(!1&r||l>=r)&&Object.keys(a.O).every((e=>a.O[e](i[p])))?i.splice(p--,1):(o=!1,r<l&&(l=r));if(o){e.splice(m--,1);var d=n();void 0!==d&&(t=d)}}return t}r=r||0;for(var m=e.length;m>0&&e[m-1][2]>r;m--)e[m]=e[m-1];e[m]=[i,n,r]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};a.O.j=t=>0===e[t];var t=(t,i)=>{var n,r,[l,o,p]=i,d=0;if(l.some((t=>0!==e[t]))){for(n in o)a.o(o,n)&&(a.m[n]=o[n]);if(p)var m=p(a)}for(t&&t(i);d<l.length;d++)r=l[d],a.o(e,r)&&e[r]&&e[r][0](),e[l[d]]=0;return a.O(m)},i=self.webpackChunkreact_ts_template=self.webpackChunkreact_ts_template||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var n=a.O(void 0,[675],(()=>a(974)));n=a.O(n)})();