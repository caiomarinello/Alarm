import React from "react";
import { AlarmProps } from "Shared-Types/AlarmProps";

const AlarmComponent: React.FC<AlarmProps> = ({ id, title, description}) => {
    return <div> ID: {id}, Title: {title}, Description: {description}</div>
}

export default AlarmComponent;