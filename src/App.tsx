import { useState, useRef } from 'react';
// import Update from '@/components/update';
import VideoJS from './VideoJS';
import logoVite from './assets/logo-vite.svg';
import logoElectron from './assets/logo-electron.svg';
import './App.css';

// remove stupid security warning - i already know
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

function App() {
  const [count, setCount] = useState(0);

  const url = 'https://assets.afcdn.com/video49/20210722/v_645516.m3u8';
  //const url = 'https://az.baseballproduct.com/live/MLB13/subchunks.m3u8';

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: url,
        type: 'application/x-mpegURL',
      },
    ],
  };

  return (
    <div className='App'>
      <div className='logo-box'>
        <a
          href='https://github.com/electron-vite/electron-vite-react'
          target='_blank'
        >
          <img
            src={logoVite}
            className='logo vite'
            alt='Electron + Vite logo'
          />
          <img
            src={logoElectron}
            className='logo electron'
            alt='Electron + Vite logo'
          />
        </a>
      </div>
      <div style={{ width: '800px' }}>
        <VideoJS options={videoJsOptions} />
      </div>
    </div>
  );
}

export default App;
