import { postAlarm } from "../api/PostAlarms";
import React from "react";

export const PostAlarmButton: React.FC = () => {
    const handleClick = () => {
        postAlarm()
    };

    return (
        <div>
            <button onClick={handleClick}> Criar Alarme! </button>
        </div>
    );
};