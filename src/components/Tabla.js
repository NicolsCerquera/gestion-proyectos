import React, {Component} from "react";
import { Bar, Line, Pie } from "react-chartjs-2";


const Tabla = () => {
  return (
    <div className="chart">
        <Bar
        
        labels = {[
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
        ]}
        
        />
    </div>
  )
}

export default Tabla;


