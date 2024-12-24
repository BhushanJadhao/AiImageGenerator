import React,{useState} from React;
import {generateImage } from '../services/openaiService';
import ImageDisplay from './ImageDisplay';

const ImageGenerator = () => {
    const[prompt,setPrompt]=useState('');
    const[apiKey,setApiKey]=useState('');
    const[imageUrl,setImageUrl]=useState('');
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState('');

    const handleSubmit=async(e)=>{
        e.preventDefault();
    }
}