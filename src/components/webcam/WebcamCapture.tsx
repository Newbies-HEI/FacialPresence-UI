import React, { useEffect, useRef, useState } from 'react';
import "./webcam.css";

function Faciale() {
    const [image, setImage] = useState<string>("")
    const [imageList, setImageList] = useState<string[]>([])
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const photoRef = useRef<HTMLCanvasElement | null>(null);

    const getVideo = () => {
        navigator.mediaDevices
            .getUserMedia({
                video: { width:700, height: 520}
            })
            .then(stream => {
                let video = videoRef.current;
                video!.srcObject = stream;
                {video&& video!.play().catch((err)=>console.log(err))}
            })
    }
    
    const takePhoto = () =>{
        const width = 100;
        const height = width / (16/9);
    
        let video:HTMLVideoElement = videoRef.current!;
        let photo:HTMLCanvasElement = photoRef.current!;
    
        photo!.width = width!;
        photo.height = height;
        
        let ctx = photo.getContext('2d');
        ctx!.drawImage(video, 0, 0, width, height)
        setImage(photo.toDataURL())
    }
    
    
    useEffect(()=>{
        getVideo();
    }, [videoRef])

    return (
        <>
            <div className="webcam">
                <video ref={videoRef}/>
                <canvas ref={photoRef} style={{ display:'none'}}/>
                <img src={image} alt="empty"/>
                <div className='bouton'>
                    <button className="verification" onClick={takePhoto}>Vérifie ma présence</button>
                    <button className="finish">Terminer</button>   
                </div> 
            </div>   
        </>
    )
}

export default Faciale
