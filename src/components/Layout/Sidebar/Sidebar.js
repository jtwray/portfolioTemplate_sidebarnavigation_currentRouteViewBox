import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from './jtwrayheadshotblueshirt.jpg';
import logoImg2 from './jtwraystylizedHeadshothacktoberfestworkshopper.jpg';
import './Sidebar.css'
// import logoImg from 'src/assets/jtwrayheadshotblueshirt.jpg';

export const Sidebar = () => {
  return (
    <section id="sidebar"
      style={
        {
          width: 300,
          height: '100vh',
          borderRight: '5px solid grey',
          backgroundColor: 'white',
          color: 'white'
        }
      }
    >
      <navbar id='navbar'
        style={{
          fontSize: 36,
          display: "flex",
          flexFlow: 'column wrap',
          justifyContent: 'space-evenly',
          alignItems: 'flex-start',
        }}
      >
        <style>
          {styles.navbarstyle}
        </style>

        <NavBarLink
          linkPath='/'
        >
          <Logo className="logo" />
        </NavBarLink>
        {/* <NavBarLink linkPath='/' children={[<img className='logo' src={logoImg2} />]} /> */}
        <style>
          {
            `
              .logo:hover {
                background: radial-gradient(circle at 100% 100%, #ffffff 0, #ffffff 200px, transparent 200px) 0% 0%/205px 205px no-repeat,
                radial-gradient(circle at 0 100%, #ffffff 0, #ffffff 200px, purple 200px) 100% 0%/205px 205px no-repeat,
                radial-gradient(circle at 100% 0, #ffffff 0, #ffffff 200px, purple 200px) 0% 100%/205px 205px no-repeat,
                radial-gradient(circle at 0 0, #ffffff 0, #ffffff 200px, purple 200px) 100% 100%/205px 205px no-repeat,
                linear-gradient(#ffffff, #ffffff) 50% 50%/calc(100% - 10px) calc(100% - 500px) no-repeat,
                linear-gradient(#ffffff, #ffffff) 50% 50%/calc(100% - 500px) calc(100% - 10px) no-repeat,
                linear-gradient(35deg, purple 0%, #D748B2 100%),
                linear-gradient(90deg, purple 0%, #CF1512 100%);
                border-radius: 205px;
                padding: 9px;
                box-sizing: border-box;
              }
              .logo {
                width:250px;
                height:250px;
                border-radius: 250px;
                
              }

              .logo{
                background: linear-gradient(transparent, transparent) 50% 50%/calc(100% - 60px) calc(100% - 60px) no-repeat,
                linear-gradient(308deg, rgba(227,36,139,0.98) 0%, transparent 46.388%, #e129de 78.85%, #d415e2 100%),
                linear-gradient(246deg, #e3ae0d 0%, #f27818 63.353%, #d57917 68.172%, #ff450e 100%);
    border-radius: 30px;
    padding: 45px;
    box-sizing: border-box;

              }

        .logo{
          background: black;
          
border-radius: 260px;
padding: 20px;
box-sizing: border-box;
}    
        .logo:hover{
          background: radial-gradient(circle at 100% 100%, transparent 0, transparent 10px, transparent 10px) 0% 0%/260px 260px no-repeat,
            radial-gradient(circle at 0 100%, transparent 0, transparent 10px, transparent 10px) 100% 0%/260px 260px no-repeat,
            radial-gradient(circle at 100% 0, transparent 0, transparent 10px, transparent 10px) 0% 100%/260px 260px no-repeat,
            radial-gradient(circle at 0 0, transparent 0, transparent 10px, transparent 10px) 100% 100%/260px 260px no-repeat,
            linear-gradient(transparent, transparent) 50% 50%/calc(100% - 500px) calc(100% - 520px) no-repeat,
            linear-gradient(transparent, transparent) 50% 50%/calc(100% - 520px) calc(100% - 500px) no-repeat,
            repeating-conic-gradient(from 45deg, rgba(138,20,226,0.98) 14%, #ff004a 43%, #00e5ff 63%, rgba(72,171,224,0.91) 81%, rgba(0,0,0,0.12) 100%);
            background: conic-gradient(from 133deg, rgba(138,20,226,0.98) 4%, #ff004a 27%, #00e5ff 57%, rgba(72,171,224,0.91) 79%, rgba(138,20,226,0.98) 100%);
            transform:rotate(90deg);
            transition: transform 1.0s repeat ease;
            animation-iteration-count: infinite;

//             .rotate-icon
// {
//   transition: transform 0.3s ease-out;
// }
// .rotate-link:hover .rotate-icon
// {
//   transform: rotate(360deg);
// }

border-radius: 260px;
padding: 20px;
box-sizing: border-box;
}    
`
          }
        </style>
        <NavBarLink linkPath='projects' children={[<div className='navlink'
        >Projects</div>]} />
        <NavBarLink className='navlink' linkPath='blogs' children={[<div className='navlink'
        >Blogs</div>]} />

        <div className='navlink'
        > test</div>
        <style>{`
a {
  text-decoration-line: none !important;}
  .navlink{
font-weight:800;



}
.navlink:hover{
  color:#d71530;
  background: #D748B2;
  background:repeating-conic-gradient(from 45deg, rgba(138,20,226,0.98) 14%, #ff004a 43%, #00e5ff 63%, rgba(72,171,224,0.91) 81%, rgba(0,0,0,0.12) 100%);
  background: conic-gradient(from 133deg, rgba(138,20,226,0.98) 4%, #ff004a 27%, #00e5ff 57%, rgba(72,171,224,0.91) 79%, rgba(138,20,226,0.98) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.navlink{color:black;}
`}</style>
      </navbar>


    </section>
  )
}


export const Logo = ({ className }) =>
  <img className={className} src={logoImg2}
    style={{
      // borderRadius: 250, width: "100px", height: '50%'
      // border:'10px #d748b2 solid',
      // border:'10px #d71530 solid',
      // border:'10px black solid',
      // filter: "grayscale(.19)"
    }}>


  </img>

export const NavBarLink = ({ children, linkPath }) => (<Link to={linkPath}> {children}</Link>);

const styles = {
  navlinkstyle: `
.navlink{
  color:#d71530;
  background: #D748B2;
  background: linear-gradient(to right, #D748B2 48%, #CF1512 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
`,
  navbarstyle: `
--theme-ui-colors-transparent: transparent;
--theme-ui-colors-black: #000;
--theme-ui-colors-white: #fff;
--theme-ui-colors-gray-1: #f7fafc;
--theme-ui-colors-gray-2: #edf2f7;
--theme-ui-colors-gray-3: #e2e8f0;
--theme-ui-colors-gray-4: #cbd5e0;
--theme-ui-colors-gray-5: #a0aec0;
--theme-ui-colors-gray-6: #718096;
--theme-ui-colors-gray-7: #4a5568;
--theme-ui-colors-gray-8: #2d3748;
--theme-ui-colors-gray-9: #1a202c;
--theme-ui-colors-red-1: #fff5f5;
--theme-ui-colors-red-2: #fed7d7;
--theme-ui-colors-red-3: #feb2b2;
--theme-ui-colors-red-4: #fc8181;
--theme-ui-colors-red-5: #f56565;
--theme-ui-colors-red-6: #e53e3e;
--theme-ui-colors-red-7: #c53030;
--theme-ui-colors-red-8: #9b2c2c;
--theme-ui-colors-red-9: #742a2a;
--theme-ui-colors-orange-1: #fffaf0;
--theme-ui-colors-orange-2: #feebc8;
--theme-ui-colors-orange-3: #fbd38d;
--theme-ui-colors-orange-4: #f6ad55;
--theme-ui-colors-orange-5: #ed8936;
--theme-ui-colors-orange-6: #dd6b20;
--theme-ui-colors-orange-7: #c05621;
--theme-ui-colors-orange-8: #9c4221;
--theme-ui-colors-orange-9: #7b341e;
--theme-ui-colors-yellow-1: #fffff0;
--theme-ui-colors-yellow-2: #fefcbf;
--theme-ui-colors-yellow-3: #faf089;
--theme-ui-colors-yellow-4: #f6e05e;
--theme-ui-colors-yellow-5: #ecc94b;
--theme-ui-colors-yellow-6: #d69e2e;
--theme-ui-colors-yellow-7: #b7791f;
--theme-ui-colors-yellow-8: #975a16;
--theme-ui-colors-yellow-9: #744210;
--theme-ui-colors-green-1: #f0fff4;
--theme-ui-colors-green-2: #c6f6d5;
--theme-ui-colors-green-3: #9ae6b4;
--theme-ui-colors-green-4: #68d391;
--theme-ui-colors-green-5: #48bb78;
--theme-ui-colors-green-6: #38a169;
--theme-ui-colors-green-7: #2f855a;
--theme-ui-colors-green-8: #276749;
--theme-ui-colors-green-9: #22543d;
--theme-ui-colors-teal-1: #e6fffa;
--theme-ui-colors-teal-2: #b2f5ea;
--theme-ui-colors-teal-3: #81e6d9;
--theme-ui-colors-teal-4: #4fd1c5;
--theme-ui-colors-teal-5: #38b2ac;
--theme-ui-colors-teal-6: #319795;
--theme-ui-colors-teal-7: #2c7a7b;
--theme-ui-colors-teal-8: #285e61;
--theme-ui-colors-teal-9: #234e52;
--theme-ui-colors-blue-1: #ebf8ff;
--theme-ui-colors-blue-2: #bee3f8;
--theme-ui-colors-blue-3: #90cdf4;
--theme-ui-colors-blue-4: #63b3ed;
--theme-ui-colors-blue-5: #4299e1;
--theme-ui-colors-blue-6: #3182ce;
--theme-ui-colors-blue-7: #2b6cb0;
--theme-ui-colors-blue-8: #2c5282;
--theme-ui-colors-blue-9: #2a4365;
--theme-ui-colors-indigo-1: #ebf4ff;
--theme-ui-colors-indigo-2: #c3dafe;
--theme-ui-colors-indigo-3: #a3bffa;
--theme-ui-colors-indigo-4: #7f9cf5;
--theme-ui-colors-indigo-5: #667eea;
--theme-ui-colors-indigo-6: #5a67d8;
--theme-ui-colors-indigo-7: #4c51bf;
--theme-ui-colors-indigo-8: #434190;
--theme-ui-colors-indigo-9: #3c366b;
--theme-ui-colors-purple-1: #faf5ff;
--theme-ui-colors-purple-2: #e9d8fd;
--theme-ui-colors-purple-3: #d6bcfa;
--theme-ui-colors-purple-4: #b794f4;
--theme-ui-colors-purple-5: #9f7aea;
--theme-ui-colors-purple-6: #805ad5;
--theme-ui-colors-purple-7: #6b46c1;
--theme-ui-colors-purple-8: #553c9a;
--theme-ui-colors-purple-9: #44337a;
--theme-ui-colors-pink-1: #fff5f7;
--theme-ui-colors-pink-2: #fed7e2;
--theme-ui-colors-pink-3: #fbb6ce;
--theme-ui-colors-pink-4: #f687b3;
--theme-ui-colors-pink-5: #ed64a6;
--theme-ui-colors-pink-6: #d53f8c;
--theme-ui-colors-pink-7: #b83280;
--theme-ui-colors-pink-8: #97266d;
--theme-ui-colors-pink-9: #702459;
--theme-ui-colors-grayDark: #2d3748;
--theme-ui-colors-text: #1a202c;
--theme-ui-colors-background: #fff;
--theme-ui-colors-primary: #b75e09;
--theme-ui-colors-primaryHover: #2c5282;
--theme-ui-colors-secondary: #5a67d8;
--theme-ui-colors-muted: #e2e8f0;
--theme-ui-colors-success: #9ae6b4;
--theme-ui-colors-info: #63b3ed;
--theme-ui-colors-warning: #faf089;
--theme-ui-colors-danger: #feb2b2;
--theme-ui-colors-light: #f7fafc;
--theme-ui-colors-dark: #2d3748;
--theme-ui-colors-textMuted: #46505f;
--theme-ui-colors-primaryLight: #f18a27;
--theme-ui-colors-heading: #000;
--theme-ui-colors-textMutedLight: #a0aab8;
font-family: "Work Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
line-height: 1.625;
font-weight: 400;
-webkit-text-size-adjust: 100%;
color: #841800;
box-sizing: border-box;


`,
  logostyles: `.logo:hover{
  background: radial-gradient(circle at 100% 100%, #ffffff 0, #ffffff 245px, transparent 245px) 0% 0%/250px 250px no-repeat,
  radial-gradient(circle at 0 100%, #ffffff 0, #ffffff 245px, purple 245px) 100% 0%/250px 250px no-repeat,
  radial-gradient(circle at 100% 0, #ffffff 0, #ffffff 245px, purple 245px) 0% 100%/250px 250px no-repeat,
  radial-gradient(circle at 0 0, #ffffff 0, #ffffff 245px, purple 245px) 100% 100%/250px 250px no-repeat,
  linear-gradient(#ffffff, #ffffff) 50% 50%/calc(100% - 10px) calc(100% - 500px) no-repeat,
  linear-gradient(#ffffff, #ffffff) 50% 50%/calc(100% - 500px) calc(100% - 10px) no-repeat,
  linear-gradient(35deg, purple 0%, #D748B2 100%),
  linear-gradient(90deg, purple 0%, #CF1512 100%);
  border-radius: 250px;
  padding: 9px;
  box-sizing: border-box;
   }.logo{
    width:200px;
  height:25px;
  border-radius: 250px;
}
  
  `}