import { configurestore}  from "@reduxjs/toolkit";
//import reducer from "./task";
import reducer from "./reducer"; //name of file

export default function(){
    return configurestore({reducer})
}