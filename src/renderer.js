import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';


const App = () => 
{
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // 페이지 리프레시 방지
        // 입력 데이터 메인 프로세스로 전송
        window.electron.sendInputData(input);
        setInput(''); // 입력 필드 초기화
    };
    useEffect(() => {
        window.electron.onProcessedData((data) => {
            setOutput(data);
        });
    }, []);

    return(
        <div>
            <h1>Input Data</h1>
            <form onSubmit={handleSubmit}>
                <input value={input} onChange={handleInputChange}></input>
                <button type='submit'>submit</button>
            </form>
        
            <h2>Output: {output}</h2>
        </div>
            )
}

// createRoot 사용
const root = createRoot(document.getElementById('root'));
root.render(<App />);
