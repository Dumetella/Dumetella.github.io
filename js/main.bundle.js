(()=>{"use strict";var e,t={108:(e,t,i)=>{var a=i(294),n=i(935),o=i(163);const r=o.default.div`
    max-width: 1280px;
    width: 100%;
    margin: auto;
`;var l=i(583);const p=o.default.div`
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
`,d=o.default.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${e=>e.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`,m=o.default.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  @media ${e=>e.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 5;
  }
`,s=o.default.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${e=>e.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`,c=o.default.a`
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
`,x=o.default.a`
transition: 0.3s ease;
color: white;
border-radius: 50px;
padding: 8px;
&:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
    
  }
`;function h(){return a.createElement(p,null,a.createElement(d,null,a.createElement(c,null,"Dumetella")),a.createElement(m,null,a.createElement("li",null,a.createElement(c,{href:"#projects"},"Projects")),a.createElement("li",null,a.createElement(c,{href:"#tech"},"Technologies")),a.createElement("li",null,a.createElement(c,{href:"#about"},"About"))),a.createElement(s,null,a.createElement(x,{href:"https://github.com/Dumetella"},a.createElement(l.hJX,{size:"2.5em"})),a.createElement(x,{href:"https://t.me/dumetella"},a.createElement(l.Ww5,{size:"2.5em"}))))}const g=o.default.section`
  width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 2rem 48px 40px;
  margin: 1rem auto;
  box-sizing: content-box;


  @media ${e=>e.theme.breakpoints.sm} {
    padding: 0 16px 48px;
    width: calc(100vw - 32px);
  }
`,u=o.default.a`
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
`,f=o.default.div`
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
`,b=o.default.div`
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
`,k=o.default.p`
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
`,w=o.default.div`
	display: flex;
  align-items: center;

	@media ${e=>e.theme.breakpoints.md}{
		justify-content: center;
		padding-right: 16px;
		flex-wrap: wrap;
	}
`,E=o.default.ul`
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
`,$=o.default.div`
	display: flex;
	flex-direction: column;
	max-width: 220px;
	width: 100%;
`,y=o.default.h4`
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
`;function v(){return a.createElement(g,null,a.createElement(E,null,a.createElement($,null,a.createElement(y,null,"Email"),a.createElement(u,{href:"mailto:dumetella@outlook.com"},"dumetella@outlook.com"))),a.createElement(f,null,a.createElement(b,null,a.createElement(k,null,"Stuff happens cuz stuff")),a.createElement(w,null,a.createElement(x,{href:"https://github.com/Dumetella"},a.createElement(l.hJX,{size:"3em"})),a.createElement(x,{href:"https://t.me/dumetella"},a.createElement(l.Ww5,{size:"3em"})))))}const z=o.default.section`
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
`,F=o.default.h2`
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
`,j=o.default.p`
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
`,D=o.default.div`

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
`,S=(o.default.p`
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
`,o.default.button`
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
`,o.default.div`
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
`,o.default.button`
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
`,o.default.div`
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
`,o.default.div`
  display: flex;  
  height: ${({large:e})=>e?"32px":"24px"};

  @media ${e=>e.theme.breakpoints.md} {
    height: ${({nav:e})=>e?"16px":"24px"};
  }

  @media ${e=>e.theme.breakpoints.sm} {
    height: ${({large:e})=>e?"32px":"16px"};
  }
`,o.default.div`
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
`);function O(){return a.createElement(a.Fragment,null,a.createElement(z,{row:!0,nopadding:!0},a.createElement(S,null,a.createElement(F,{main:!0,center:!0},"Hi ",a.createElement("br",null),"I am Dumetella"),a.createElement(j,null,"Fueled by coffee and addicted to coding all-nighters."))))}const P=o.default.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  max-height: 200px;
`,_=o.default.div`
  display: flex;
  flex: 0 1;
`,B=o.default.section`
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

`,A=o.default.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  height: 450px;
  @media ${e=>e.theme.breakpoints.sm} {
    width: 100%;
  }
`,C=o.default.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`,M=o.default.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding-top: 2rem;
  font-size: ${e=>e.title?"3rem":"2rem"};
`,I=o.default.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`,T=(o.default.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`,o.default.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${e=>e.theme.breakpoints.sm} {
    padding:.3rem
  
}
`),R=o.default.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`,W=o.default.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
width: 8rem;
&:hover{
  background: #801414;

}
`,G=(o.default.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`,o.default.li`
color: #d8bfbf;
font-size: 1.5rem;
`,[{id:0,title:"React Chat",description:"Websocket chat application inspired by old RTC-chats.",image:"/images/react_chat.png",source:"https://github.com/Dumetella/react-chat-front",visit:"https://dumetella-react-chat.herokuapp.com/",stack:["react","ts","styled-components","redux"]},{id:1,title:"Dodo Copy",description:"WIP",image:"/images/wip.png",source:"https://github.com/Dumetella/next-pizza",visit:"",stack:["react","ts","styled-components"]},{id:2,title:"React Weather",description:"Small forecast web application",image:"/images/react_weather.png",source:"https://github.com/Dumetella/react-weather",visit:"https://dumetella-weather.herokuapp.com/",stack:["react","ts","MUI"]}]),L=[{number:1600,text:"Lichess Elo"}];function N(){return a.createElement(z,{nopadding:!0,id:"projects"},a.createElement(D,null),a.createElement(F,{main:!0},"Projects"),a.createElement(B,null,G.map(((e,t)=>a.createElement(A,{key:t},a.createElement(_,null,a.createElement(P,{src:e.image})),a.createElement(C,null,a.createElement(M,null,e.title),a.createElement(I,null)),a.createElement(T,{className:"card-info"},e.description),a.createElement(R,null,a.createElement(W,{href:e.visit},"Live"),a.createElement(W,{href:e.source},"Source")))))))}var U=i(859);o.default.div`
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
`,o.default.img`
  width: 100%;
`;const X=o.default.ul`
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
`,J=o.default.div`
  display: flex;
  flex-direction: column;

  @media ${e=>e.theme.breakpoints.sm}{
    display: flex;
    margin-left: 18px;
  }
`,H=o.default.h4`
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
`,Q=o.default.p`
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
`,q=o.default.li`
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
`;o.default.img`
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
`;function K(){return a.createElement(z,{id:"tech"},a.createElement(D,{divider:!0}),a.createElement(F,null,"Technologies"),a.createElement(j,null,"I have little commercial development experience, but I have a lot of enthusiasm for the modern front-end"),a.createElement(X,null,a.createElement(q,null,a.createElement("picture",null,a.createElement(U.GR$,{size:"3em"})),a.createElement(J,null,a.createElement(H,null,"Front-End"),a.createElement(Q,null,"intermediate experience with: ",a.createElement("br",null),"React.js, ",a.createElement("br",null),"TypeScript, ",a.createElement("br",null),"Redux, ",a.createElement("br",null),"styled-components ",a.createElement("br",null)))),a.createElement(q,null,a.createElement("picture",null,a.createElement(U.BwW,{size:"3em"})),a.createElement(J,null,a.createElement(H,null,"Back-End"),a.createElement(Q,null,"Beginner experience with: ",a.createElement("br",null),"Node.js, ",a.createElement("br",null),"Express, ",a.createElement("br",null),"SQL, ",a.createElement("br",null),"Nginx ",a.createElement("br",null)))),a.createElement(q,null,a.createElement("picture",null,a.createElement(U.MSM,{size:"3em"})),a.createElement(J,null,a.createElement(H,null,"UI/UX"),a.createElement(Q,null,"Average experience with ",a.createElement("br",null),"Figma and Photoshop")))),a.createElement(D,{colorAlt:!0}))}const V=o.default.div`
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
`,Y=o.default.div`
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
`,Z=o.default.h5`
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
`,ee=o.default.p`
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
`;o.default.div`
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
`,o.default.h5`
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
`,o.default.div`
  display: flex;

  @media ${e=>e.theme.breakpoints.sm}{
    width: 160px;
    justify-content: space-between;
  }
`;function te(){return a.createElement(z,null,a.createElement(F,null,"Personal Achievements"),a.createElement(V,null,L.map(((e,t)=>a.createElement(Y,{key:t},a.createElement(Z,null,`${e.number}+`),a.createElement(ee,null,e.text))))),a.createElement(D,null))}const ie=o.default.div`
    width: 300px;
    height: 280px;
    position: absolute;
    top: calc(25%);
    left: calc(65%);
    @media ${e=>e.theme.breakpoints.lg} {
        display: none;
    }
`,ae=o.default.div`
    width: 100%;
    height: 80px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #ddcfcc;
    border-radius: 10px;
`,ne=o.default.div`
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
`,oe=o.default.div`
    width: 50px;
    height: 50px;
    position: absolute;
    top: calc(50% - 25px);
    left: calc(50% - 25px);
    border-radius: 50%;
    background-color: #9acfc5;
    border: 5px solid #43beae;
    box-sizing: border-box;
`,re=o.default.div`
    width: 8px;
    height: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #9b9091;
    box-shadow: -12px 0 0 #9b9091, -24px 0 0 #9b9091;
`,le=o.default.div`
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
`,pe=o.default.div`
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
`,de=o.default.div`
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
`,me=o.default.div`
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
`,se=o.keyframes`
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
`,ce=o.default.div`
    width: 6px;
    height: 63px;
    opacity: 0;
    position: absolute;
    top: 50px;
    left: calc(50% - 3px);
    background-color: #74372b;
    animation: ${se} 4s 4s linear infinite;
`,xe=o.default.div`
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
`,he=o.keyframes`
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
`,ge=o.keyframes`
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
`,ue=o.default.div`
    width: 8px;
    height: 20px;
    position: absolute;
    border-radius: 5px;
    background-color: #b3aeae;
    opacity: 0;
    bottom: ${e=>e.bottom};
    left: ${e=>e.left};
    animation: ${ge} ${e=>e.animation};
`,fe=o.default.div`
    width: 8px;
    height: 20px;
    position: absolute;
    border-radius: 5px;
    background-color: #b3aeae;
    opacity: 0;
    bottom: ${e=>e.bottom};
    left: ${e=>e.left};
    animation: ${he} ${e=>e.animation};
`;function be(){return a.createElement(ie,null,a.createElement(ae,null,a.createElement(ne,{left:"14px"}),a.createElement(ne,{left:"50px"}),a.createElement(oe,null),a.createElement(re,null)),a.createElement(le,null,a.createElement(pe,null),a.createElement(de,null),a.createElement(ce,null),a.createElement(ue,{bottom:"50px",left:"102px",animation:"3s 4s linear infinite"}),a.createElement(fe,{bottom:"70px",left:"118px",animation:"3s 5s linear infinite"}),a.createElement(fe,{bottom:"65px",left:"118px",animation:"3s 6s linear infinite"}),a.createElement(ue,{bottom:"50px",left:"102px",animation:"3s 5s linear infinite"}),a.createElement(me,null)),a.createElement(xe,null))}function ke(){return a.createElement(z,{id:"about"},a.createElement(F,null,"About Me"),a.createElement(j,null,"Currently working on my personal projects"))}var we=i(704);const Ee=o.createGlobalStyle`
  ${we.Fv};

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

`,$e={type:"dark",fonts:{title:"Space Grotesk, sans-serif",main:"Space Grotesk, sans-serif"},colors:{primary1:"hsl(204,23.8%,95.9%)",background1:"#0F1624",accent1:"hsl(34.9,98.6%,72.9%)",button:"hsl(205.1,100%,36.1%)",background2:"hsl(232.7,27.3%,23.7%)"},breakpoints:{sm:"screen and (max-width: 640px)",md:"screen and (max-width: 768px)",lg:"screen and (max-width: 1024px)",xl:"screen and (max-width: 1280px)"}};n.render(a.createElement(a.StrictMode,null,a.createElement(o.ThemeProvider,{theme:$e},a.createElement(Ee,null),a.createElement((function(){return a.createElement(r,null,a.createElement(h,null),a.createElement(z,{grid:!0},a.createElement(O,null),a.createElement(be,null)),a.createElement(N,null),a.createElement(K,null),a.createElement(ke,null),a.createElement(te,null),a.createElement(v,null))}),null))),document.getElementById("root"))}},i={};function a(e){var n=i[e];if(void 0!==n)return n.exports;var o=i[e]={exports:{}};return t[e](o,o.exports,a),o.exports}a.m=t,e=[],a.O=(t,i,n,o)=>{if(!i){var r=1/0;for(m=0;m<e.length;m++){for(var[i,n,o]=e[m],l=!0,p=0;p<i.length;p++)(!1&o||r>=o)&&Object.keys(a.O).every((e=>a.O[e](i[p])))?i.splice(p--,1):(l=!1,o<r&&(r=o));if(l){e.splice(m--,1);var d=n();void 0!==d&&(t=d)}}return t}o=o||0;for(var m=e.length;m>0&&e[m-1][2]>o;m--)e[m]=e[m-1];e[m]=[i,n,o]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};a.O.j=t=>0===e[t];var t=(t,i)=>{var n,o,[r,l,p]=i,d=0;if(r.some((t=>0!==e[t]))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(p)var m=p(a)}for(t&&t(i);d<r.length;d++)o=r[d],a.o(e,o)&&e[o]&&e[o][0](),e[r[d]]=0;return a.O(m)},i=self.webpackChunkreact_ts_template=self.webpackChunkreact_ts_template||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var n=a.O(void 0,[675],(()=>a(108)));n=a.O(n)})();