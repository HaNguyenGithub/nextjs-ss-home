import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useState } from 'react';
import AudioPlayer from 'react-audio-player';
import { Howl } from 'howler';

export default function BottomAppBar() {

    const [isPlaying, setIsPlaying] = useState(false);
    const audio = React.useRef();
    const handleButtonClick = () => {
      setIsPlaying(!isPlaying);
    }

    const testPause = () => {}

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="sticky" color="transparent" sx={{ top: 'auto', bottom: 0 , backdropFilter:"blur(50px)"}}>
        <Toolbar>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center" 
            padding={1}
          >
            <Box width={50} height={50}>
              <Image
                src="/album.png"
                  width={100}
                  height={100}
                  style={{ borderRadius:'8px' }}
                  alt="album-cover"/>
          </Box>
          <Box sx={{flexGrow: 1, marginLeft:"15px"}}>
          <Typography  component="div" sx={{fontSize:"15px"}}>Pretty boy</Typography>
          <Typography  component="div" sx={{fontSize:"15px"}}>Wan Pis Cecile</Typography>
          <Typography  component="div" sx={{fontSize:"10px"}}>14/5/2023 22:00:37</Typography>
          </Box>
          <Box sx={{marginTop:"5px"}}>
            <button id='btnPlay' onClick={handleButtonClick}>
                    {
                    isPlaying ? (
                      <>
                      <img src="/pause.svg" alt="PauseIcon" /> 
                      <AudioPlayer
                        src="/remider.mp3"
                        autoPlay={isPlaying}
                        
                      />
                      </>
                    
                    ) : (
                      <>
                      <AudioPlayer
                        src="/remider.mp3"
                        onPause={testPause}
                      />
                        <img src="/play.svg" alt="Play Icon" />
                      </>
                    
                    )
                    }
            </button>
            
          </Box>   
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}